import React, {Component} from 'react';
// import marked from 'marked';
class MarkdownHtml extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div id="mark-content" dangerouslySetInnerHTML={{__html: this.props.markHtml}}>
            </div>
        );
    }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log('MarkdownHtml', 'nextProps:', nextProps, 'nextContext', nextContext);
    //     this.setState({
    //         html: nextProps.html
    //     });
    // }

    // componentDidMount() {
    //     document.getElementById('mark-content').innerHTML = marked(this.state.html);
    // }

    // componentDidUpdate() {
    //     document.getElementById('mark-content').innerHTML = marked(this.state.html);
    // }
}

export default MarkdownHtml;