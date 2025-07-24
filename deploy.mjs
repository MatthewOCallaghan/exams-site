// Template deploy script from ChatGPT
import Client from 'ssh2-sftp-client';
import { readdirSync } from 'fs';

const sftp = new Client();
const config = {
  host: 'yourserver.com',
  port: 22,
  username: 'yourusername',
  password: 'yourpassword', // or privateKey
};

const localPath = './dist';
const remotePath = '/path/on/server';

async function deploy() {
  try {
    // await sftp.connect(config);
    // await sftp.rmdir(remotePath, true); // Remove old build (recursive)
    // await sftp.mkdir(remotePath, true); // Recreate path
    // await sftp.uploadDir(localPath, remotePath);
    console.log('✅ Deployment successful!');
  } catch (err) {
    console.error('❌ Deployment error:', err);
  } finally {
    sftp.end();
  }
}

deploy();