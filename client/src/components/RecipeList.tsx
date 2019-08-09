import React from 'react';
import { Recipe } from '../App';

interface RecipeListProps {
  recipes: Recipe[];
  handleClick: () => void;
}

class RecipeList extends React.Component<RecipeListProps> {
  public render(): React.ReactElement {
    const { recipes, handleClick } = this.props;
    return (
      <div className="recipe-list">
        {recipes.map(
          (recipe): React.ReactElement => {
            const { name, course, technique, ingredients } = recipe;
            return (
              <div className="recipe" key={name}>
                <h1>{name}</h1>
                <h2>{course}</h2>
                <h2>{technique}</h2>
                <ul>
                  {ingredients.map(
                    (ing): React.ReactElement => (
                      <li key={ing}>{ing}</li>
                    )
                  )}
                </ul>
                <button type="button" onClick={handleClick}>
                  Click
                </button>
              </div>
            );
          }
        )}
      </div>
    );
  }
}

export default RecipeList;
