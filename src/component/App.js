import React, { Component } from 'react';
// import MarkdownTextarea from './MarkdownTextarea';
// import MarkdownHtml from './MarkdownHtml';
import MarkdownEdit from '../container/MarkdownEdit';
import MarkdownShow from '../container/MarkdownShow';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../style/css/main.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      initialHtml: ''
    };
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-6 col-md-6">
          {/* <MarkdownTextarea name="aaaa" onChange={(e) =>{this.textChange(e)}}></MarkdownTextarea> */}
          <MarkdownEdit></MarkdownEdit>
        </div>
        <div className="col-lg-6 col-md-6">
          {/* <MarkdownHtml html={this.state.initialHtml}></MarkdownHtml>   */}
          <MarkdownShow></MarkdownShow>
        </div> 
      </div>
    );
  }

  textChange(e){
    console.log(e.target.value);
    this.setState({
      initialHtml: e.target.value
    });
  }

  componentDidMount() {
    console.log(this.state.initialHtml);
  }
}

export default App;
