const path = require('path')
const fs = require('fs')
const { build, defineConfig } = require('vite')

const vue = require('@vitejs/plugin-vue')

const rootDir = path.resolve(__dirname, '../../')
console.log("🚀 ~ file: index.js:10 ~ rootDir:", rootDir)
const outDir = resolve('npmBuild/dist')
console.log("🚀 ~ file: index.js:12 ~ outDir:", outDir)

const baseConfig = defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  build: {
    lib: {
      entry: resolve('npmBuild/install/index.js'),
      name: 'live-multi',
      fileName: format => `index.${format}.js`
    },
    outDir,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})

main()

async function main() {
  // build
  await build(baseConfig)

//   await copyFiles()
}

// async function copyFiles() {
//   // fs.copyFileSync(
//   //   resolve('packages/vangle/package.json'),
//   //   resolve('packages/vangle/dist/package.json')
//   // )
//   fs.copyFileSync(resolve('README.md'), resolve('packages/vangle/README.md'))
// }

function resolve(...urlOrUrls) {
  return path.resolve(rootDir, ...urlOrUrls)
}
