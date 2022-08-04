import type { App } from 'vue'
import Button from './Button.vue'
export default {
    install: function (app: App) {
        app.component(Button.name, Button)
    }
}