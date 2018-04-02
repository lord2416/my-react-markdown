import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../style/css/main.css';
import MarkdownTextarea from './MarkdownTextarea';
import MarkdownHtml from './MarkdownHtml';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      initialHtml: '<p>123</p>'
    };
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <MarkdownTextarea name="aaaa" onChange={(e) =>{this.textChange(e)}}></MarkdownTextarea>
        </div>
        <div className="col-lg-6 col-md-6">
          <MarkdownHtml html={this.state.initialHtml}></MarkdownHtml>  
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
