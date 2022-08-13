import type {App} from 'vue';
import tab from './tab.vue';

export default {
    install(app:App){
        app.component(tab.name, tab)
    }
}