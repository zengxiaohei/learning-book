import mongoose from 'mongoose';

export interface IChapter {
  _id?: string;
  bookId: string;
  chapterNumber: number;
  title: string;
  content: {
    introduction: string;
    sections: Array<{
      sectionNumber: number;
      title: string;
      content: string;
      learningPoints: string[];
      examples: string[];
    }>;
    summary: string;
    keyTerms: Record<string, string>;
    exercises: Array<{
      questionNumber: number;
      question: string;
      difficulty: 'easy' | 'medium' | 'hard';
    }>;
  };
  generatedAt?: Date;
  updatedAt?: Date;
}

const chapterSchema = new mongoose.Schema<IChapter>(
  {
    bookId: { type: String, required: true },
    chapterNumber: { type: Number, required: true },
    title: { type: String, required: true },
    content: {
      introduction: String,
      sections: [
        {
          sectionNumber: Number,
          title: String,
          content: String,
          learningPoints: [String],
          examples: [String],
        },
      ],
      summary: String,
      keyTerms: mongoose.Schema.Types.Mixed,
      exercises: [
        {
          questionNumber: Number,
          question: String,
          difficulty: {
            type: String,
            enum: ['easy', 'medium', 'hard'],
          },
        },
      ],
    },
  },
  { timestamps: true }
);

export const Chapter = mongoose.model<IChapter>('Chapter', chapterSchema);
