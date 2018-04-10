import * as actions from './action';

const defaultState = {};

export const editMarkdown = (state = defaultState, action) => {
    switch(action.type){
        case actions.EDIT_MARKDOWN_TEXT:
            return Object.assign({}, state, {
                text: action.text
            });
        case actions.SHOW_MARKDOWN_HTML:
            return Object.assign({}, state, {
                html: action.html
            });    
        default: 
            return defaultState;
    }
}
