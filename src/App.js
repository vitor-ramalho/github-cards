import React from 'react';

import './App.css'
import CardList from './Components/CardList/CardList';
import Form from './Components/Form/Form';


class App extends React.Component {
  state = {
    profiles: [],
  };

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  }
  render() {
    return (
      <>
        <div className="App">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </>
    );
  }

}

export default App;
