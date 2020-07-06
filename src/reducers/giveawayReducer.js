import {GIVE_AWAY_SUCCESS, GIVE_AWAY_ERROR} from '../actions/types';

const initialState = {
    giveawayErr: null,
    giveawaySuccess: null
}

const giveawayReducer = (state=initialState, action) => {
    switch(action.type) {
        case GIVE_AWAY_SUCCESS:
            return {
                ...state,
                giveawaySuccess: true,
                giveawayErr: null
            }
        case GIVE_AWAY_ERROR:
            console.log(action.payload)
            return {
                ...state,
                giveawayErr: 'Coś poszło nie tak. Spróbuj później',
                giveawaySuccess: null
            }
        default:
            return state;
    }
}

export default giveawayReducer;