import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 打包路径
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    }
  },
  server: {
    port: 3008, // 服务端口号
    open: true, // 服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    proxy: {
      '/api': {
        target: 'http://www.holmesen.site',
        changeOrigin: true,
        rewrite: path => path.replace('/api', '')
      }
    }
  },
  build: {
    target: 'es2015', // 最终构建的浏览器兼容目标
    sourcemap: false, // 构建后是否生成 source-map 文件
    chunkSizeWarningLimit: 2000, // chunk 大小警告的限制（以 kbs 为单位）
    reportCompressedSize: false, // 启用/禁用 gzip 压缩大小报告
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/style/variables.less')}"`,
        },
        math: 'strict',
        javascriptEnabled: true,
      },
    },
  },
})
