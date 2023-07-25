import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// // https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }):any => {
  console.log("🚀 ~ file: vite.config.ts:6 ~ defineConfig ~ ssrBuild:", ssrBuild)
  console.log("🚀 ~ file: vite.config.ts:6 ~ defineConfig ~ mode:", mode)
  console.log("🚀 ~ file: vite.config.ts:6 ~ defineConfig ~ command:", command)
  
  return {
    plugins: [uni()],
    server: {
      proxy: {
        "/_alive": {
          target: 'https://appAKLWLitn7978.h5.xiaoeknow.com',
          changeOrigin: true,
          followRedirects: true,// 重点在这里
          configure: (proxy, _options) => {
            proxy.on('proxyRes', (proxyRes, req, res) => {
              console.log("🚀 ~ file: vite.config.ts:47 ~ proxy.on ~ res:", res)
              // console.log("🚀 ~ file: vite.config.ts:47 ~ proxy.on ~ req:", req)
              // console.log("🚀 ~ file: vite.config.ts:55 ~ proxy.on ~ proxyRes:", proxyRes)
              //  res.removeHeader("Access-Control-Allow-Origin")
              //  res.removeHeader("access-control-allow-origin")
              //  res.setHeader("Access-Control-Allow-Origin", "*")
               res.setHeader("set-cookie","ko_token=52f4d470e5bae507a210ad7fdc935fe7")
              proxyRes.pipe(res)
            });
          }
        }
      },
    }
  }
});
