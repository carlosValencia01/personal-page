import {InferenceClient} from '@huggingface/inference';

const SYSTEM_PROMP = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they
could make with some or all of those ingredients. You do not need to use every ingredient the
mention in your recipe. The jrecipe can include additional ingredients they did not mention, but try
not to include too many extra ingredients. Format your response in markdown to make it easier to
render to a web page
`
const hf = new InferenceClient(import.meta.env.VITE_MY_TOKEN_HF);

export async function getRecipeFromMistral(ingredientsArr){
    const ingredientsString = ingredientsArr.join(", ");
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                {role :"system", content: SYSTEM_PROMP },
                {role :"user", content: `I have ${ingredientsString}. Please give me a recipe you would recomment I make!`}                
            ],
            max_tokens: 1024
        })
        return  response.choices[0].message.content;
    } catch (error) {
        console.log(error.message)
    }
}