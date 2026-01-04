# Lerna + pnpm Workspace 示例项目

这是一个使用 Lerna 和 pnpm workspace 搭建的多包版本管理和 npm 发布自动化示例项目。

## 项目结构

```
lerna-pnpm-workspace/
├── packages/
│   ├── core/           # 核心功能包
│   │   ├── src/        # 源代码
│   │   ├── lib/        # 构建输出
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── utils/          # 工具函数包（依赖于 core）
│       ├── src/        # 源代码
│       ├── lib/        # 构建输出
│       ├── package.json
│       └── tsconfig.json
├── package.json        # 根项目配置
├── lerna.json          # Lerna 配置
├── pnpm-workspace.yaml # pnpm workspace 配置
└── tsconfig.json       # 全局 TypeScript 配置
```

## 技术栈

- **Lerna**: 多包版本管理和发布工具
- **pnpm**: 快速、节省磁盘空间的包管理器
- **TypeScript**: 类型安全的 JavaScript 超集
- **Workspace**: 利用 pnpm workspace 实现包间依赖共享

## 核心功能

1. **多包管理**: 集中管理多个相关包
2. **版本控制**: 自动管理包版本和依赖关系
3. **发布自动化**: 一键发布所有变更的包
4. **依赖共享**: 包间依赖本地引用，无需发布即可测试
5. **并行构建**: 支持并行构建多个包

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 构建所有包

```bash
pnpm run build
```

### 开发模式（并行监听）

```bash
pnpm run dev
```

### 运行测试

```bash
pnpm run test
```

### 版本管理

```bash
# 升级版本（交互式）
pnpm run version

# 发布包
pnpm run publish
```

## Lerna 配置说明

### 版本策略

- 使用 **Conventional Commits** 自动确定版本号
- 支持 **独立版本** 或 **固定版本**（当前配置为固定版本）
- 自动生成 CHANGELOG

### 发布流程

1. 执行 `pnpm run version` 升级版本
2. Lerna 自动检测变更的包
3. 基于提交信息生成新版本号
4. 更新包间依赖关系
5. 生成 CHANGELOG
6. 执行 `pnpm run publish` 发布到 npm

## pnpm Workspace 优势

1. **磁盘空间节省**: 所有包共享相同的依赖
2. **快速安装**: 依赖只安装一次
3. **本地依赖**: 包间依赖直接引用本地文件
4. **严格的依赖管理**: 避免依赖地狱

## 包间依赖示例

在 `@example/utils` 中依赖 `@example/core`：

```json
{
  "dependencies": {
    "@example/core": "workspace:*" // 使用 workspace: 协议引用本地包
  }
}
```

## 使用指南

1. **创建新包**:
   - 在 `packages/` 目录下创建新目录
   - 初始化 `package.json`，使用 `@example/` 前缀
   - 添加依赖时，使用 `workspace:*` 引用本地包

2. **开发流程**:
   - 编写代码
   - 执行 `pnpm run build` 构建
   - 执行 `pnpm run test` 测试
   - 提交代码（使用 Conventional Commits 规范）
   - 执行 `pnpm run version` 升级版本
   - 执行 `pnpm run publish` 发布

3. **版本号规则**:
   - `fix: ...` → 补丁版本（0.0.x）
   - `feat: ...` →  minor 版本（0.x.0）
   - `BREAKING CHANGE: ...` →  major 版本（x.0.0）

## 常见问题

### 如何添加新的开发依赖？

```bash
# 添加到根项目（所有包共享）
pnpm add -Dw <dependency>

# 添加到特定包
pnpm add -D <dependency> --filter @example/<package-name>
```

### 如何运行特定包的脚本？

```bash
pnpm run <script-name> --filter @example/<package-name>
```

### 如何清理构建产物？

```bash
pnpm run clean
```

## 学习资源

- [Lerna 官方文档](https://lerna.js.org/)
- [pnpm 官方文档](https://pnpm.io/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [TypeScript 官方文档](https://www.typescriptlang.org/)

## 许可证

MIT
