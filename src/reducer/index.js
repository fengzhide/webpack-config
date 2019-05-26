export default function (state = {}, action) {
    switch(action.type) {
        case 'CHANGE_COLOR':
            return { ...state, themeColor: action.themeColor }
        default:
            return state;
    }
}