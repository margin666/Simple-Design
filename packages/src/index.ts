import { App } from 'vue';
import './style.scss'
import Button from './button/index'

export default {
    install: function(app:App){
        app.use(Button)
    }
}