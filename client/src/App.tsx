import React from 'react';
import './App.css';
import FormikRegisterForm from './components/RegisterForm';
import RecipeList from './components/RecipeList';

interface AppState {
  recipes: Recipe[];
}
export interface Recipe {
  name: string;
  course: string;
  technique: string;
  ingredients: string[];
}
class App extends React.Component<{}, AppState> {
  public state = {
    recipes: [],
  };

  private setRecipes = (recipes: Recipe[]): void => {
    this.setState({
      recipes,
    });
  };

  public render(): React.ReactElement {
    return (
      <div className="App">
        <FormikRegisterForm setRecipes={this.setRecipes} />
        <RecipeList recipes={this.state.recipes} handleClick={(): void => {}} />
      </div>
    );
  }
}

export default App;
