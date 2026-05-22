import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: `${API_URL}/api`,
});

// 添加用户ID到请求头
api.interceptors.request.use((config) => {
  const userId = localStorage.getItem('userId');
  if (userId) {
    config.headers['x-user-id'] = userId;
  }
  return config;
});

export const bookService = {
  // 生成书籍框架
  generateFramework: (title: string, description?: string) =>
    api.post('/books/generate-framework', { title, description }),

  // 获取书籍详情
  getBook: (id: string) => api.get(`/books/${id}`),

  // 获取用户的所有书籍
  getUserBooks: () => api.get('/books'),

  // 删除书籍
  deleteBook: (id: string) => api.delete(`/books/${id}`),
};

export const chapterService = {
  // 生成章节内容
  generateChapterContent: (bookId: string, chapterNumber: number) =>
    api.post('/chapters/generate', { bookId, chapterNumber }),

  // 获取章节内容
  getChapterContent: (id: string) => api.get(`/chapters/${id}`),

  // 获取书籍的所有章节
  getBookChapters: (bookId: string) => api.get(`/chapters/book/${bookId}`),
};

export default api;
