import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import FormikRegisterForm from './components/RegisterForm';
import RecipeList from './components/RecipeList';

it('renders without crashing', (): void => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('registration form', (): void => {
  it('has a registration button', (): void => {
    const { getByText } = render(
      <FormikRegisterForm setRecipes={(): void => {}} />
    );
    const registerButton = getByText(/register/i);
    expect(registerButton).toBeDefined();
  });
});

describe('recipe list', (): void => {
  const recipes = [
    {
      name: 'TestRecipe',
      course: 'TestCourse',
      technique: 'TestTechnique',
      ingredients: [],
    },
  ];
  const click = jest.fn();
  it('renders without crashing', (): void => {
    render(<RecipeList recipes={recipes} handleClick={click} />);
  });
  it('renders the recipe', (): void => {
    const { getByText } = render(
      <RecipeList recipes={recipes} handleClick={click} />
    );
    expect(getByText('TestRecipe')).toBeDefined();
  });
  it('recipe list button clicks', (): void => {
    const { getByText } = render(
      <RecipeList recipes={recipes} handleClick={click} />
    );
    fireEvent.click(getByText('Click'));
    expect(click).toBeCalled();
  });
});
