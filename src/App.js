import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      person: {
        fullName: 'pablo escobar',
        bio: 'presidente del republica del colombia',
        imgSrc: 'https://qph.cf2.quoracdn.net/main-qimg-db60cd9c2c45341d9a3276909e0baa85',
        profession: 'buisnessman'
      },
      interval: 0
    };
 }
 toggleShow = () => {
  this.setState({ show: !this.state.show });
};

 componentDidMount() {
  this.intervalID = setInterval(
    () => this.tick(),
    1000
  );
}

componentWillUnmount() {
  clearInterval(this.intervalID);
}

tick() {
  this.setState({
    interval: this.state.interval + 1
  });
}

render() {
  return (
    <div className="App">
      <h1>pablo emilio escobar gaviria</h1>
      <button onClick={this.toggleShow}>
        {this.state.show ? 'Hide Profile' : 'Show Profile'}
      </button>
      {this.state.show && (
        <div>
          <h2>{this.state.person.fullName}</h2>
          <h3>{this.state.person.profession}</h3>
          <p>{this.state.person.bio}</p>
          <img src={this.state.person.imgSrc} alt="Profile" />
          <p>Time interval since the last component was mounted: {this.state.interval} seconds</p>
        </div>
      )}
    </div>
  );
}
}



export default App;