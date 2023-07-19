import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// // https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }):any => {
  console.log("🚀 ~ file: vite.config.ts:6 ~ defineConfig ~ ssrBuild:", ssrBuild)
  console.log("🚀 ~ file: vite.config.ts:6 ~ defineConfig ~ mode:", mode)
  console.log("🚀 ~ file: vite.config.ts:6 ~ defineConfig ~ command:", command)
  
  return {
    plugins: [uni()]
  }
});
