import  React,{Component} from 'react';
// import PropTypes from 'prop-types';

class MarkdownTextarea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="mark-textarea">
                <textarea {...this.props}/>
            </div>
        )
    }
}

MarkdownTextarea.propTypes = {

};

export default MarkdownTextarea;

