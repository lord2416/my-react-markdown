import  React,{Component} from 'react';
// import PropTypes from 'prop-types';

class MarkdownTextarea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <textarea {...this.props}/>
        )
    }
}

MarkdownTextarea.propTypes = {

};

export default MarkdownTextarea;

