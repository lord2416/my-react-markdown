import {connect} from 'react-redux';
import MarkdownTextarea from '../component/MarkdownTextarea';
import {createEditMarkdownText, createShowMarkdownHtml} from '../store/action';
import marked from 'marked';

const getMark = text => {
    let html = marked(text);
    return html;
}

const mapStateToProps = state => {
    return {
        markHtml: state.editMarkdown.text
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: text =>{
            dispatch(createEditMarkdownText(text));
            dispatch(createShowMarkdownHtml(getMark(text)));
        }
    }
};

const MarkdownEdit = connect(
    mapStateToProps,
    mapDispatchToProps
)(MarkdownTextarea);

export default MarkdownEdit;
