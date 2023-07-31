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
          configure: (proxy, options) => {
            proxy.on('proxyReq', function (proxyReq, req, res) {
              // proxyReq.removeHeader('referer')  //移除请求头
              // proxyReq.removeHeader('origin') //移除请求头
              // proxyReq.setHeader('host','www.abc.com') //添加请求头
            });
            proxy.on('proxyRes', function (proxyRes, req, res) {
              /*添加或删除响应头有两种写法，第一种是操作 proxyRes 参数*/
              // delete proxyRes.headers['set-cookie']
              proxyRes.headers['set-cookie'] = 'ko_token=';
  
              /*第二种方法是操作 res 参数*/
              // res.removeHeader("Access-Control-Allow-Origin");
              // res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
              // res.setHeader("Access-Control-Allow-Credentials", 'true');
              // res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
              // res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
            });
          }
        }
      },
    }
  }
});
