import { USERNAME_CHANGE, PASSWORD_CHANGE, LOGIN_USER} from './types';

export const usernameChanged = (value) => {
    return {
        type: USERNAME_CHANGE ,
        payload: value,
    }
};

