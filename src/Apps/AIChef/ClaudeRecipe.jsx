import Markdown from 'react-markdown'
import './components.css';

export const ClaudeRecipe = (props) => {
    return (
        <section className='suggested-recipe-container'>
            <Markdown >
                {props.recipe}
            </Markdown>
        </section>
    )
}