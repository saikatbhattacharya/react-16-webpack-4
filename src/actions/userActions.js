import {actions} from '../constants';
import {getUserRole} from 'APIs';

const updateUserRole = (userRole) => ({
        type: actions.GET_USER_ROLE,
        userRole
})

const getUserRoleAction = (username) => (dispatch) => {
    dispatch(updateUserRole(getUserRole(username)));
}

export {
    updateUserRole,
    getUserRoleAction
}