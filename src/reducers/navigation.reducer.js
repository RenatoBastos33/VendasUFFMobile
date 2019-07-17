import React from "react";
import Welcome from '../views/Welcome'


const initialState = {
    view: (<Welcome/>),

}

const navigationReducer=(state = initialState, action) => {
    switch(action.type){
        default:
            return state
    }

}
export default navigationReducer