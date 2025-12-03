// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // این تنظیم مسیرها را نسبت به فایل index.html می‌سازد که معمولاً مشکل گیت‌هاب پیج را حل می‌کند
  base: './', 
});
