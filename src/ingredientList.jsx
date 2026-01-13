export default function IngredientList(props) {

    const reactElementIngredientList = props.ingredient.map((ingredient) => (<li key={ingredient}>{ingredient}</li>))

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul>
                {reactElementIngredientList}
            </ul>
            {props.ingredient.length > 3 ?
                <div className="ready-for-recipe-container">
                    <div className="inner-container">
                        <h3>Ready for a recipe?</h3>
                        <div>Generate a recipe from your list of ingredients</div>
                    </div>
                    <button onClick={props.getRecipe} type="submit">Get a recipe</button>
                </div> : null
            }
        </section>
    )
}