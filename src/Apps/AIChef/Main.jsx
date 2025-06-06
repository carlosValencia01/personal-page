import { useEffect, useRef, useState } from 'react';
import './components.css';
import { ClaudeRecipe } from './ClaudeRecipe';
import { IngredientList } from './IngredientList';
import { getRecipeFromMistral } from './ai';
import { Header } from './Header';
import Loader from '../../Components/Loader';

export const Main = () => {
    //'chiken', 'spices', 'oranges','floor','pasta'
    const [ingredients, setingredients] = useState([]);
    const [recipe, setRecipe] = useState('');
    const [showLoading, setShowLoading] = useState(false);

    const recipeSection = useRef(null);

    useEffect(() => {
     if(recipe !== '' && recipeSection.current !== null){
        recipeSection.current.scrollIntoView({behavior:"smooth"});
        setShowLoading(false);
      }
    }, [recipe])
    

    async function handleGetRecipe(){
        if(recipe==='')setShowLoading(true);
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

        {
            showLoading 
            ?<Loader/>
            :null
        }

        <main className='iachefapp-main-container'>
            <form className="add-ingredient-form" action={addIngredient}>
                <input 
                    aria-label="Add Ingredient" 
                    type="text" 
                    placeholder="e.g. Oregano"
                    name='ingredient'
                    />
                <button>Add ingredient</button>
            </form>
            
                { ingredients.length > 0 
                    ?<IngredientList ingredients={ingredients}/>
                    :<h3 className='section-title'>Add at least 4 Ingredients</h3>
                }
                
                {
                    ingredients.length > 3 &&
                    <div className="get-recipe-container" ref={recipeSection}>
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

