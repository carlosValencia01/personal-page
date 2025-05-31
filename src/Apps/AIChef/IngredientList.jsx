export const IngredientList = (props) => {
    return (
            <section>
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