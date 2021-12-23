import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Component from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import viteSvgIcon from 'vite-plugin-svg-icons'
const pathResolve = (path: string): string => resolve(__dirname, path)
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': pathResolve('./src'),
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    Component({
      resolvers: [AntDesignVueResolver()],
    }),
    viteSvgIcon({
      iconDirs: [resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
})
