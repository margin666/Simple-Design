type Tsize = 'small' | 'default' | '' | 'large'
const prop = {
    type: {
        type: String,
        default: '',
        required: false
    },
    size: {
        type: String,
        default (prop){
            return prop.size === 'default'?'':prop.size
        },
        required: false,
    },
    disabled: {
        type: Boolean,
        default: false,
        required: false
    },
    style: {
        type: Object,
        default: {},
        required: false,
    },
}
export default prop