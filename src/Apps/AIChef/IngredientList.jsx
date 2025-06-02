import './components.css';

export const IngredientList = (props) => {
    return (
            <section className="ingredient-list-container">
                <h2>Ingredients on hand:</h2>
                <ul>
                {
                    props.ingredients.map((ingredient)=>{ 
                        return <li key={ingredient}>{ingredient}</li>
                    })
                }                
                </ul>
            </section>
    )
}