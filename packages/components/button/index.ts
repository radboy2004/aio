import { App } from 'vue'
import AioThemeButton from './src/button.vue'

AioThemeButton.install = (app: App): void => {
  app.component(AioThemeButton.name, AioThemeButton)
}

export default AioThemeButton
