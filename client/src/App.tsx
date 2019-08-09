import React from 'react';
import './App.css';

interface AppState {
  users: string[];
}
class App extends React.Component<{}, AppState> {
  public state = {
    users: [],
  };

  public render(): React.ReactElement {
    return <div className="App"></div>;
  }
}

export default App;
