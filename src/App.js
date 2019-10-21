import React from 'react';
import './App.css';
import GenerateQuote from './GenerateQuote'
import DisplayQuote from './DisplayQuote'


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      quote: {
        value: '',
      }
    }
  }

  componentDidMount = () => {
    this.selectQuote();
  };
  
  selectQuote = async() => {
    // fetch('https://api.chucknorris.io/jokes/random')
    // .then(rawresponse => rawresponse.json())
    // .then(response => this.setState({ quote: response }))
    const rawResponse = await fetch("https://api.chucknorris.io/jokes/random");
    const response = await rawResponse.json();
    this.setState({ quote: response});
  }

  render() {
    return (
      <header>
        <div>
          <GenerateQuote selectQuote={this.selectQuote} />
          <DisplayQuote quote={this.state.quote} />
        </div>
      </header>
    )
  }
}

export default App;
