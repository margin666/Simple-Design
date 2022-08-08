
export const props = {
    size: {
        type: String,
        default: 'default',
        required: false,
    },
    type: {
        type: String,
        default: '',
        required: false
    },
    text: {
        type: Boolean,
        default: false,
        required: false
    },
    round: {
        type: Boolean,
        default: false,
        required: false
    },
    circle: {
        type: Boolean,
        default: false,
        required: false,
    },
    disabled: {
        type: Boolean,
        default: false,
        required: false
    }
}