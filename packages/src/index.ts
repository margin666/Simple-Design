import { App } from 'vue';
import './style.scss'
import Row from './row/index'
import Col from './col/index'
import Button from './button'
import ButtonGroup from './button-group'
import Tabs from './tabs'
import Tab from './tab'

import '../styles/button/style.scss'
import '../styles/button-group/style.scss'
import '../styles/tabs/style.scss'
import '../styles/tab/style.scss'

export default {
    install: function(app:App){
        app.use(Row)
        app.use(Col)
        app.use(Button)
        app.use(ButtonGroup)
        app.use(Tabs)
        app.use(Tab)
    }
}