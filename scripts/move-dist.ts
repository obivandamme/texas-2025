import { copy, remove } from 'fs-extra';
import { join } from 'path';

async function moveDist() {
  const distPath = join(__dirname, '../dist');
  const rootPath = join(__dirname, '../');

  try {
    // Move all files from dist to the root directory
    await copy(distPath, rootPath);

    // Remove the dist folder after copying
    await remove(distPath);

    console.log('Deployment files moved to the root directory.');
  } catch (err) {
    console.error('Error during deployment:', err);
  }
}

moveDist();
