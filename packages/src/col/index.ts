import col from './col.vue'
import type {App} from 'vue'

export default {
    install: function(app:App){
        app.component(col.name, col)
    }
}