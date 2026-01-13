import React from "react"
import ClaudeRecipe from "./claudeRecipe"
import IngredientList from "./ingredientList"
import { getRecipeFromGroq } from "../ai"

export default function Body() {
    const [ingredientList, setIngredientList] = React.useState([])


    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredientList(prevIngredientList => [...prevIngredientList, newIngredient])
    }

    const [recipe, setrecipe] = React.useState("")
   async function getRecipe() {
            const recipeMarkdown=await getRecipeFromGroq(ingredientList)
            setrecipe(recipeMarkdown)
    }
    return (
        <>
            <main>
                <form action={addIngredient}>
                    <div className="Form-Container">
                        <input type="text" name="ingredient" id="ingredient" placeholder="e.g. Salmon" />
                        <button id="add-btn" type="submit">+ Add Ingredient</button>
                    </div>

                </form>
                
                {ingredientList.length > 0 ? <IngredientList ingredient={ingredientList} getRecipe={getRecipe} /> : null}
                {recipe && <ClaudeRecipe recipe={recipe}/>}
            </main>
        </>
    )
}