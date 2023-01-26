import React from 'react';
import catgirl from './Gay-Cat.png'

import './App.css';
class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {headpat: 0,count: 0};
    setInterval(this.tick, 1000);
  }
  test = () =>{
    console.log("test");
    this.setState({headpat:this.state.headpat+1});
  }
  tick=()=>{
    this.setState({count: this.state.count+1});
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div align="center">
            Gay Cat-Girl on screen for {this.state.count} seconds <br/>
            Click her to give headpats! Headpats Given {this.state.headpat}
          </div>
          <div align="center" onClick={(event => this.test(event))}> <img src={catgirl} alt="Gay Cat"/></div>
        </header>
      </div>
    );
  }

}

export default App;

