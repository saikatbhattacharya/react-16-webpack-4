import {actions} from 'Constants';

const defaultStates = {
    userRole: 'admin'
};

const UserReducer = (state = defaultStates, action) => {
    switch(action.type) {
        case actions.GET_USER_ROLE:
            return { ...state, userRole: action.userRole }
        default:
            return state
    }
};

export default UserReducer;