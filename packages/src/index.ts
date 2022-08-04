import { App } from 'vue';
import Button from './button/index'

export default {
    install: function(app:App){
        app.use(Button)
    }
}