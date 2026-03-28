#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import process from 'node:process';

const command = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const args = ['-y', '@valtren-ai/extension-sdk@^0.2.0', 'create-valtren-extension', ...process.argv.slice(2)];
const result = spawnSync(command, args, { stdio: 'inherit' });
if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}
process.exit(result.status ?? 0);
