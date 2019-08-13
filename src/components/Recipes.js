import React from 'react';

const Recipes = props => (
    <div className="container">
        <div className="row">
            { props.recipes.map((recipe, index) => {
                return (
                    <div key={recipe.recipe.label} className="col-md-4" style={{marginBottom: "2rem"}}>
                        <div className="recipes__box">
                            <img src={recipe.recipe.image} alt={recipe.recipe.label} className="recipe__box-img"/>
                            <div className="recipe__text">
                                <h5 className="recipes__title">i{recipe.recipe.label.length<20?`${recipe.recipe.label}`:`${recipe.recipe.label.substring(0,24)}...`}  </h5> 
                                <p className="recipes__subtitle">{recipe.recipe.source}</p>
                            </div>
                            <button className="recipe__buttons">View Recipe</button>
                        </div>
                    </div>   
                );
            })}    
        </div>    

    </div>

);

export default Recipes;
