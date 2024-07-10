import path from 'path'
import { defineConfig } from 'vite'
import Vue2_7 from '@vitejs/plugin-vue2'
import Vue3 from '@vitejs/plugin-vue'
import compiler from '@vue/compiler-sfc-2.7'
import compilerVue from '@vue/compiler-sfc'

// import { createVuePlugin as Vue2_6 } from 'vite-plugin-vue2'

const src = path.resolve(__dirname, 'src')

export default defineConfig({
  plugins: [
    Vue3({
      include: [/vue3.4[/\\].*\.vue$/],
      exclude: [/vue2.7[/\\].*\.vue$/, /vue2.6[/\\].*\.vue$/,],
      compiler: compilerVue
    }),
    Vue2_7({
      include: [/vue2.7[/\\].*\.vue$/],
      compiler: compiler as any,
      exclude: [/vue2.6[/\\].*\.vue$/, /vue3.4[/\\].*\.vue$/,]
    }),
    // Vue2_6({
    //   include: [/vue2.6[/\\].*\.vue$/],
    //   exclude: [/vue2.7[/\\].*\.vue$/, /vue3.4[/\\].*\.vue$/,]
    // })
  ],
})
