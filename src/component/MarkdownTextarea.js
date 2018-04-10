import  React,{Component} from 'react';
// import PropTypes from 'prop-types';

class MarkdownTextarea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="mark-textarea">
                <textarea onChange={e => this.props.onChange(e.target.value)} html={this.props.markHtml}/>
            </div>
        )
    }
}

MarkdownTextarea.propTypes = {

};

export default MarkdownTextarea;

