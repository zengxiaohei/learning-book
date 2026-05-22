# 项目贡献指南

感谢你对 Learning Book 的关注！以下是贡献指南。

## 🚀 如何开始

1. **Fork 仓库**
   - 点击右上角的 Fork 按钮

2. **克隆你的分支**
   ```bash
   git clone https://github.com/YOUR_USERNAME/learning-book.git
   cd learning-book
   ```

3. **创建特性分支**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 提交代码的规范

### 分支命名规范

```
feature/描述      # 新功能
bugfix/描述       # Bug 修复
docs/描述         # 文档
refactor/描述     # 代码重构
test/描述         # 测试
```

### Commit 消息规范

使用 Conventional Commits 格式：

```
<type>(<scope>): <subject>

<body>

<footer>
```

**类型**：
- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码风格（不改变功能）
- `refactor`: 代码重构
- `test`: 添加或修改测试
- `chore`: 构建工具或依赖更新

**示例**：
```
feat(book): add AI-powered chapter generation

- Integrate OpenAI API for chapter content generation
- Add validation for generated content
- Support custom prompt templates

Closes #123
```

## 🔄 Pull Request 流程

1. **推送你的分支**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **创建 Pull Request**
   - 提供清晰的标题和描述
   - 关联相关的 Issue
   - 添加必要的截图或演示

3. **代码审查**
   - 维护者会审查你的代码
   - 可能需要进行修改
   - 通过审查后合并

## ✅ 代码质量标准

### TypeScript

- 使用严格模式
- 为所有函数添加类型注解
- 避免使用 `any`

### 代码风格

- 使用 Prettier 格式化代码
- ESLint 检查：`npm run lint`
- 遵循现有的代码风格

### 测试

- 添加单元测试
- 为新功能添加集成测试
- 保持代码覆盖率 > 80%

### 文档

- 为新功能添加 README
- 更新 API 文档
- 添加代码注释（复杂逻辑）

## 🐛 报告 Bug

### 提交 Issue 模板

```markdown
## 描述
清晰地描述这个 bug 是什么。

## 复现步骤
1. 进行第一步...
2. 进行第二步...
3. 看到问题...

## 预期行为
应该发生什么？

## 实际行为
实际发生了什么？

## 环境
- OS: Windows/Mac/Linux
- Node: 18.x
- MongoDB: 5.x
```

## 💡 功能建议

### 提交建议模板

```markdown
## 建议的功能
简洁的功能描述。

## 使用场景
为什么需要这个功能？

## 可能的实现方案
你有什么想法吗？
```

## 📚 开发指南

### 本地开发环境设置

```bash
# 安装依赖
cd backend && npm install
cd ../frontend && npm install

# 配置环境变量
cp .env.example .env

# 启动开发服务器
docker-compose up -d

# 运行后端
cd backend && npm run dev

# 运行前端（新终端）
cd frontend && npm run dev
```

### 常用命令

```bash
# 后端
npm run dev      # 开发模式
npm run build    # 构建
npm run test     # 测试
npm run lint     # 代码检查

# 前端
npm run dev      # 开发服务器
npm run build    # 生产构建
npm run preview  # 预览构建
npm run lint     # 代码检查
```

## 🎓 项目结构

```
learning-book/
├── backend/          # Node.js/Express 后端
├── frontend/         # React 前端
├── .env.example      # 环境变量示例
├── docker-compose.yml
├── README.md
├── DEVELOPMENT.md    # 开发指南
├── API_INTEGRATION.md # API 集成指南
└── CONTRIBUTING.md   # 贡献指南
```

## 🔐 安全性指南

- 不要提交 `.env` 文件或任何密钥
- 不要在代码中硬编码敏感信息
- 使用环境变量管理配置
- 遵循 OWASP 安全实践

## 📞 联系方式

- 提交 Issue 讨论
- 在 PR 中评论
- 查看项目 Wiki

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者！

---

祝你编码愉快！ 🎉
