import { App } from 'vue';
import './style.scss'
import Button from './button/index'
import Row from './row/index'
import Col from './col/index'

export default {
    install: function(app:App){
        app.use(Button)
        app.use(Row)
        app.use(Col)
    }
}