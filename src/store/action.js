// action type
export const EDIT_MARKDOWN_TEXT = "EDIT_MARKDOWN_TEXT";
export const SHOW_MARKDOWN_HTML = "SHOW_MARKDOWN_HTML";

// action creator
export function createEditMarkdownText (text){
    return {
        type: EDIT_MARKDOWN_TEXT,
        text
    }
}

export function createShowMarkdownHtml (html){
    return {
        type: SHOW_MARKDOWN_HTML,
        html
    }
}