import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        // 插件预设支持导入的api
        "vue",
        "vue-router",
        "pinia",
        // 自定义导入的api
      ],
    }),
    Components({
        dirs: ['src/components'], // 目标文件夹
        extensions: ['vue','jsx'], // 文件类型
        dts: 'src/components.d.ts', // 输出文件，里面都是一些import的组件键值对
        // ui库解析器，也可以自定义，需要安装相关UI库
        resolvers: [
        ],
      })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
