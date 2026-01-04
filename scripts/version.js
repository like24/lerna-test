require('dotenv').config();
const { execSync } = require('child_process');

try {
  console.log('Loading environment variables from .env...');
  
  // 验证 GH_TOKEN 是否设置
  if (!process.env.GH_TOKEN) {
    console.error('Error: GH_TOKEN is not set in .env file');
    process.exit(1);
  }
  
  console.log('Running lerna version...');
  execSync('lerna version', { stdio: 'inherit', env: { ...process.env } });
  
  console.log('✅ Version and GitHub Release created successfully!');
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
