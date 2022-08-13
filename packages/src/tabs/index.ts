import type {App} from 'vue';
import tabs from './tabs.vue';

export default {
    install(app: App){
        app.component(tabs.name, tabs)
    }
}
