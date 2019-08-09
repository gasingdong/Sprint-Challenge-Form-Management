import React from 'react';
import './App.css';
import FormikRegisterForm from './components/RegisterForm';

interface AppState {
  users: string[];
}
class App extends React.Component<{}, AppState> {
  public state = {
    users: [],
  };

  public render(): React.ReactElement {
    return (
      <div className="App">
        <FormikRegisterForm />
      </div>
    );
  }
}

export default App;
