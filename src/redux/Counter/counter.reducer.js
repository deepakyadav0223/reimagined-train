import { SAVE } from './counter.types';


const INITIAL_STATE = {

    obj: [],
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case SAVE:

           return {

             ...state , action

           };

       
         default: return state;

    }

};

export default reducer;