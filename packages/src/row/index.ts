import type { App } from 'vue';
import Row from './Row.vue'
export default {
    install: function(app: App){
        app.component(Row.name, Row)
    }
}