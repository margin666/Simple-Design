import { App } from 'vue';
import './style.scss'
import Row from './row/index'
import Col from './col/index'
import Button from './button'

export default {
    install: function(app:App){
        app.use(Row)
        app.use(Col)
        app.use(Button)
    }
}