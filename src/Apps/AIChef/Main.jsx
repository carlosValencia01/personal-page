import { useState } from 'react';
import './components.css';
import { ClaudeRecipe } from './ClaudeRecipe';
import { IngredientList } from './IngredientList';
import { getRecipeFromMistral } from './ai';
import { Header } from './Header';

export const Main = () => {
    
    const [ingredients, setingredients] = useState(['chiken', 'spices', 'oranges','floor','pasta']);
    const [recipe, setRecipe] = useState('');


    async function handleGetRecipe(){
        const aiRecipe = await getRecipeFromMistral(ingredients);
        setRecipe(aiRecipe);
    }

    const handleOnSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newIngredient = formData.get("ingredient");
        setingredients(prev => [...prev, newIngredient]);
    }

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")
        setingredients(prev => [...prev, newIngredient]);
    }

    return (
        <>
        <Header/>
        <main className='main-container'>
            <form className="add-ingredient-form" action={addIngredient}>
                <input 
                    aria-label="Add Ingredient" 
                    type="text" 
                    placeholder="e.g. Oregano"
                    name='ingredient'
                    />
                <button>Add ingredient</button>
            </form>
            
                { ingredients.length > 0 && 
                    <IngredientList ingredients={ingredients}/>                    
                }
                
                {
                    ingredients.length > 3 &&
                    <div className="get-recipe-container">
                        <div>
                            <h3>Ready for a recipe?</h3>    
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>        
                        <button onClick={handleGetRecipe}>Get a recipe</button>
                    </div>
                }

                {
                    recipe
                    ?<ClaudeRecipe recipe={recipe}/>
                    :null

                }
        </main>
    </>
    )
}

