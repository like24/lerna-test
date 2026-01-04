require('dotenv').config();
const https = require('https');

// 配置
const owner = 'yourusername'; // 替换为你的 GitHub 用户名
const repo = 'lerna-pnpm-workspace'; // 替换为你的仓库名
const tag = 'v0.2.0';
const token = process.env.GH_TOKEN;

// Release 说明
const releaseNotes = `## v0.2.0

### 新功能
- 添加了 \`getUppercaseName()\` 方法到 Core 类
- 支持将名称转换为大写

### 包更新
- @example/core: 0.1.0 → 0.2.0
- @example/utils: 0.1.0 → 0.2.0

### 改进
- 优化了项目结构
- 添加了 GitHub token 支持
- 更新了文档

### 技术栈
- Lerna: 多包版本管理
- pnpm: 快速包管理
- TypeScript: 类型安全
`;

// 创建 Release 的数据
const data = JSON.stringify({
  tag_name: tag,
  name: tag,
  body: releaseNotes,
  draft: false,
  prerelease: false
});

// 发送请求
const options = {
  hostname: 'api.github.com',
  port: 443,
  path: `/repos/${owner}/${repo}/releases`,
  method: 'POST',
  headers: {
    'Authorization': `token ${token}`,
    'Content-Type': 'application/json',
    'User-Agent': 'lerna-release-script'
  }
};

const req = https.request(options, (res) => {
  let body = '';

  res.on('data', (chunk) => {
    body += chunk;
  });

  res.on('end', () => {
    if (res.statusCode === 201) {
      const release = JSON.parse(body);
      console.log('✅ GitHub Release created successfully!');
      console.log(`📦 Release URL: ${release.html_url}`);
      console.log(`🏷️  Tag: ${tag}`);
    } else {
      console.error('❌ Failed to create GitHub Release');
      console.error(`Status: ${res.statusCode}`);
      console.error(`Response: ${body}`);
      process.exit(1);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Error:', error.message);
  process.exit(1);
});

req.write(data);
req.end();
