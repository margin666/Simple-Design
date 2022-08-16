export default {
    size: {
        type: String,
        default: 'default',
        required: false
    },
    active: {
        type: Number,
        default: 0,
        required: false
    },
    event: {
        type: Function,
        default: () => {},
        required: false
    }
}