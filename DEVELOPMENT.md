# Learning Book 项目开发指南

## 🚀 快速开始

### 前置条件

- Node.js >= 18.0
- MongoDB >= 5.0（本地或 Docker）
- OpenAI API Key

### 环境配置

1. **复制环境变量模板**
```bash
cp .env.example .env
```

2. **编辑 .env 文件**，填入你的配置：
```bash
OPENAI_API_KEY=sk-your-key-here
MONGODB_URI=mongodb://localhost:27017/learning-book
NODE_ENV=development
PORT=3000
VITE_API_URL=http://localhost:3000
```

### 使用 Docker 启动（推荐）

```bash
# 启动所有服务（MongoDB + 后端 + 前端）
docker-compose up -d

# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down
```

访问地址：
- 前端：http://localhost:5173
- 后端 API：http://localhost:3000/health

### 本地开发启动

**终端 1 - 启动后端：**
```bash
cd backend
npm install
npm run dev
```

**终端 2 - 启动前端：**
```bash
cd frontend
npm install
npm run dev
```

## 📚 项目结构详解

### 后端架构 (`backend/`)

```
backend/src/
├── config/          # 配置文件（环境变量）
├── models/          # MongoDB 数据模型
│   ├── Book.ts      # 书籍模型
│   └── Chapter.ts   # 章节模型
├── controllers/     # 业务逻辑控制器
│   ├── bookController.ts
│   └── chapterController.ts
├── services/        # 第三方服务集成
│   └── openaiService.ts  # OpenAI API 调用
├── routes/          # API 路由
│   ├── bookRoutes.ts
│   └── chapterRoutes.ts
├── middleware/      # Express 中间件
├── utils/           # 工具函数
└── index.ts         # 入口文件
```

### 前端架构 (`frontend/`)

```
frontend/src/
├── components/      # React 组件
├── pages/          # 页面
├── services/       # API 调用服务
│   └── api.ts      # Axios 配置和 API 方法
├── store/          # 状态管理（Zustand）
│   └── bookStore.ts
├── types/          # TypeScript 类型定义
├── styles/         # 样式文件
├── App.tsx         # 主应用组件
└── main.tsx        # 入口文件
```

## 🔑 API 端点文档

### 书籍相关 API

#### 生成书籍框架
```http
POST /api/books/generate-framework
Content-Type: application/json

{
  "title": "Python 编程入门",
  "description": "适合初学者的 Python 教程"
}
```

**响应：**
```json
{
  "message": "书籍框架生成成功",
  "book": {
    "_id": "...",
    "title": "Python 编程入门",
    "framework": {
      "totalChapters": 10,
      "chapters": [
        {
          "chapterNumber": 1,
          "title": "第一章：Python 基础",
          "summary": "...",
          "keyPoints": ["变量", "数据类型", "运算符"]
        }
      ]
    }
  }
}
```

#### 获取用户的所有书籍
```http
GET /api/books
Headers:
  x-user-id: user-123
```

#### 获取书籍详情
```http
GET /api/books/:id
```

#### 删除书籍
```http
DELETE /api/books/:id
```

### 章节相关 API

#### 生成章节内容
```http
POST /api/chapters/generate
Content-Type: application/json

{
  "bookId": "...",
  "chapterNumber": 1
}
```

#### 获取章节内容
```http
GET /api/chapters/:id
```

#### 获取书籍的所有章节
```http
GET /api/chapters/book/:bookId
```

## 🛠️ 开发工作流

### 添加新功能的步骤

1. **创建分支**
```bash
git checkout -b feature/your-feature-name
```

2. **开发和测试**
```bash
# 后端开发
cd backend && npm run dev

# 前端开发
cd frontend && npm run dev
```

3. **提交更改**
```bash
git add .
git commit -m "feat: 添加新功能描述"
git push origin feature/your-feature-name
```

4. **提交 PR**
在 GitHub 上创建 Pull Request

## 📝 常见任务

### 添加新的 API 端点

1. **创建控制器方法** (`backend/src/controllers/`)
2. **添加路由** (`backend/src/routes/`)
3. **在前端创建 API 调用** (`frontend/src/services/api.ts`)

示例：

**后端控制器：**
```typescript
export const myController = {
  async myAction(req: Request, res: Response) {
    try {
      // 你的逻辑
      res.json({ data: 'success' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
```

**后端路由：**
```typescript
import { myController } from '../controllers/myController';

router.get('/my-endpoint', myController.myAction);
```

**前端 API：**
```typescript
export const myService = {
  myAction: () => api.get('/my-endpoint'),
};
```

## 🐛 调试

### 查看后端日志
```bash
docker-compose logs backend
```

### 查看数据库
```bash
# 连接到 MongoDB
docker exec -it learning-book-mongodb mongosh

# 查看数据库
use learning-book
db.books.find()
```

### 测试 API
使用 Postman 或 VS Code 的 REST Client 扩展

## 📦 依赖管理

### 后端依赖
- Express.js - Web 框架
- Mongoose - MongoDB ODM
- OpenAI - AI API
- TypeScript - 类型检查

### 前端依赖
- React - UI 库
- Vite - 构建工具
- Axios - HTTP 客户端
- Zustand - 状态管理
- TailwindCSS - 样式库

## 🚢 部署

### 部署到生产环境

1. **构建 Docker 镜像**
```bash
docker-compose build
```

2. **推送到容器仓库**
```bash
docker push your-registry/learning-book-backend
docker push your-registry/learning-book-frontend
```

3. **在服务器上部署**
```bash
docker-compose -f docker-compose.prod.yml up -d
```

## 📚 学习资源

- [Express.js 文档](https://expressjs.com/)
- [React 文档](https://react.dev/)
- [MongoDB 文档](https://docs.mongodb.com/)
- [OpenAI API 文档](https://platform.openai.com/docs)
- [Vite 文档](https://vitejs.dev/)

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支
3. 提交更改
4. 推送到分支
5. 提交 Pull Request

## 📝 许可证

MIT

---

有问题？提交 [Issue](https://github.com/zengxiaohei/learning-book/issues) 或联系开发者！
