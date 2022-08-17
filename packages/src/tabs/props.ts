export default {
    size: {
        type: String,
        default: 'default',
        required: false
    },
    active: {
        type: String,
        default: '',
        required: false
    },
    event: {
        type: Function,
        default: () => {},
        required: false
    }
}