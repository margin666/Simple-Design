import ButtonGroup from './button-group.vue'
import type {App} from 'vue'

export default {
    install(app: App){
        app.component(ButtonGroup.name, ButtonGroup)
    }
}