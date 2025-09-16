import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
  host: false, // слушать на 0.0.0.0
  allowedHosts: ["orion.mil.ru", "orion_front"], // разрешаем доступ по домену
  port: 3000
  }
})
