import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <h2>Ingredients</h2>
            <hr/>
            <ol>
                {ingredients.map(ingredient => (
                    <li>
                        {ingredient.text}
                    </li>
                ))}
            </ol>
            <p>Calories - {Math.trunc(calories)}</p>
            <img className={style.image} src={image}/>
        </div>
    );
}

export default Recipe;