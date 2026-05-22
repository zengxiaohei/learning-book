import { Request, Response } from 'express';
import { Chapter } from '../models/Chapter';
import { openaiService } from '../services/openaiService';
import { Book } from '../models/Book';

export const chapterController = {
  // 生成章节详细内容
  async generateChapterContent(req: Request, res: Response) {
    try {
      const { bookId, chapterNumber } = req.body;

      if (!bookId || !chapterNumber) {
        return res.status(400).json({ error: '书籍ID和章节号不能为空' });
      }

      // 获取书籍信息
      const book = await Book.findById(bookId);
      if (!book) {
        return res.status(404).json({ error: '书籍不存在' });
      }

      // 获取对应章节的信息
      const chapterInfo = book.framework.chapters.find(
        (ch) => ch.chapterNumber === chapterNumber
      );
      if (!chapterInfo) {
        return res.status(404).json({ error: '章节不存在' });
      }

      // 调用 OpenAI 生成详细内容
      const content = await openaiService.generateChapterContent(
        book.title,
        chapterInfo.title,
        chapterInfo.keyPoints
      );

      // 保存到数据库
      const chapter = new Chapter({
        bookId,
        chapterNumber,
        title: chapterInfo.title,
        content,
      });

      await chapter.save();

      return res.status(201).json({
        message: '章节内容生成成功',
        chapter,
      });
    } catch (error) {
      console.error('Error generating chapter content:', error);
      return res.status(500).json({
        error: '生成章节内容失败',
        details: (error as Error).message,
      });
    }
  },

  // 获取章节内容
  async getChapterContent(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const chapter = await Chapter.findById(id);
      if (!chapter) {
        return res.status(404).json({ error: '章节不存在' });
      }

      return res.json(chapter);
    } catch (error) {
      console.error('Error fetching chapter:', error);
      return res.status(500).json({ error: '获取章节失败' });
    }
  },

  // 获取书籍的所有章节
  async getBookChapters(req: Request, res: Response) {
    try {
      const { bookId } = req.params;

      const chapters = await Chapter.find({ bookId }).sort({ chapterNumber: 1 });

      return res.json({
        total: chapters.length,
        chapters,
      });
    } catch (error) {
      console.error('Error fetching chapters:', error);
      return res.status(500).json({ error: '获取章节列表失败' });
    }
  },

  // 获取或创建章节
  async getOrCreateChapter(req: Request, res: Response) {
    try {
      const { bookId, chapterNumber } = req.params;

      let chapter = await Chapter.findOne({ bookId, chapterNumber: parseInt(chapterNumber) });

      if (!chapter) {
        // 创建新章节
        const createReq = { body: { bookId, chapterNumber: parseInt(chapterNumber) } };
        const createRes = {
          status: () => ({
            json: (data: any) => {
              chapter = data.chapter;
            },
          }),
        } as any;

        await this.generateChapterContent(createReq as Request, createRes as Response);
      }

      return res.json(chapter);
    } catch (error) {
      console.error('Error in getOrCreateChapter:', error);
      return res.status(500).json({ error: '操作失败' });
    }
  },
};
