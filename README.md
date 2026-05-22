# 📚 Learning Book - AI 智能学习平台

一个利用 OpenAI API 自动生成书籍内容框架和章节大纲的智能学习资料网站。

## 🌟 核心功能

- **📖 书籍框架生成**：输入书名，自动生成完整的目录结构和章节大纲
- **📝 章节内容深化**：详细展开各章节内容、学习要点和练习题
- **🎯 个性化学习路径**：基于用户进度推荐最优学习顺序
- **✨ 实时 AI 对话**：支持用户关于章节内容的实时提问
- **💾 学习进度追踪**：记录用户学习历史和进度

## 🏗️ 技术栈

- **前端**：React + Vite + TailwindCSS
- **后端**：Node.js + Express + TypeScript
- **数据库**：MongoDB
- **AI**：OpenAI API (GPT-4)
- **工具**：Docker, Git

## 📦 项目结构

```
learning-book/
├── backend/                    # Node.js/Express 后端
│   ├── src/
│   │   ├── controllers/       # 业务逻辑控制器
│   │   ├── routes/            # API 路由
│   │   ├── services/          # 业务服务层
│   │   ├── models/            # MongoDB 数据模型
│   │   ├── config/            # 配置文件
│   │   ├── middleware/        # Express 中间件
│   │   ├── utils/             # 工具函数
│   │   ├── types/             # TypeScript 类型定义
│   │   └── index.ts           # 入口文件
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   └── .env
├── frontend/                   # React 前端应用
│   ├── src/
│   │   ├── components/        # React 组件
│   │   ├── pages/             # 页面
│   │   ├── services/          # API 服务
│   │   ├── styles/            # 全局样式
│   │   ├── types/             # TypeScript 类型
│   │   ├── hooks/             # 自定义 Hooks
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   ├── Dockerfile
│   ├── vite.config.ts
│   ├── package.json
│   └── tsconfig.json
├── .env.example               # 环境变量模板
├── .gitignore
├── docker-compose.yml         # Docker 容器编排
└── README.md
```

## 🚀 快速开始

### 前置条件
- Node.js >= 18.0
- MongoDB >= 5.0（或使用 Docker）
- OpenAI API Key

### 使用 Docker 启动（推荐）

```bash
# 1. 克隆仓库
git clone https://github.com/zengxiaohei/learning-book.git
cd learning-book

# 2. 配置环境变量
cp .env.example .env
# 编辑 .env，填入你的 OpenAI API Key

# 3. 启动所有服务
docker-compose up -d

# 4. 访问应用
# 前端：http://localhost:5173
# 后端 API：http://localhost:3000
```

### 本地开发启动

**启动后端：**
```bash
cd backend
npm install
npm run dev
```

**启动前端：**
```bash
cd frontend
npm install
npm run dev
```

## 📋 API 端点

### 书籍相关
```
POST   /api/books/generate-framework    # 生成书籍框架
GET    /api/books/:id                   # 获取书籍详情
GET    /api/books                       # 获取用户的书籍列表
DELETE /api/books/:id                   # 删除书籍
```

### 章节相关
```
POST   /api/chapters/generate           # 生成章节详细内容
GET    /api/chapters/:id                # 获取章节内容
PUT    /api/chapters/:id                # 更新章节进度
```

### 用户相关
```
POST   /api/users/register              # 用户注册
POST   /api/users/login                 # 用户登录
GET    /api/users/profile               # 获取用户信息
```

## 🔑 环境变量说明

```bash
# OpenAI 配置
OPENAI_API_KEY=sk-your-api-key-here      # 你的 OpenAI API Key
OPENAI_MODEL=gpt-4                        # 使用的模型

# MongoDB 配置
MONGODB_URI=mongodb://localhost:27017/learning-book
MONGODB_USER=root
MONGODB_PASSWORD=password

# 服务器配置
NODE_ENV=development                      # 运行环境
PORT=3000                                 # 后端端口
BACKEND_URL=http://localhost:3000         # 后端地址

# 前端配置
VITE_API_URL=http://localhost:3000        # API 地址
```

## 📚 开发路线图

### Phase 1: 基础内容生成引擎 ✅
- [x] 项目结构初始化
- [ ] 后端框架搭建（Express + TypeScript）
- [ ] MongoDB 连接和数据模型
- [ ] OpenAI API 集成
- [ ] 书籍框架生成接口
- [ ] 章节大纲生成接口

### Phase 2: 前端界面 🔄
- [ ] React 项目初始化
- [ ] 书籍搜索和输入页面
- [ ] 内容展示组件
- [ ] 进度跟踪面板
- [ ] 响应式设计

### Phase 3: 用户系统
- [ ] 用户认证（JWT）
- [ ] 学习记录保存
- [ ] 个性化推荐
- [ ] 用户偏好设置

### Phase 4: 高级功能
- [ ] 社区分享功能
- [ ] 笔记和标签系统
- [ ] 学习数据分析
- [ ] 导出 PDF/Markdown

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 开发流程
1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📝 许可证

MIT

## 👨‍💻 作者

[zengxiaohei](https://github.com/zengxiaohei)

---

**让学习变得更智能、更高效！** 🎯✨

有问题或建议？欢迎提交 [Issue](https://github.com/zengxiaohei/learning-book/issues)！
