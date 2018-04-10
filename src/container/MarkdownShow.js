import {connect} from 'react-redux';
import MarkdownHtml from '../component/MarkdownHtml';
import {createEditMarkdownText, createShowMarkdownHtml} from '../store/action';

const mapStateToProps = state => {
    return {
        markHtml: state.editMarkdown.html
    }
};

const MarkdownShow = connect(
    mapStateToProps
)(MarkdownHtml);

export default MarkdownShow;
