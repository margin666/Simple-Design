import button from './button.vue'
import type {App} from 'vue'

export default {
    install: function(app:App){
        app.component(button.name, button)
    }
}