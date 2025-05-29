import { Footer } from "../../Components/Footer"
import { Header } from "../../Components/Header"
import blogs from '../../Data/blogs.json';
import './homepage.css'

export const HomePage = () => {
    return (
        <>
            <Header/>
            <main>
                {
                    blogs.map((b)=>(
                        <div key={b.id} className="card-container">
                            <h3>{b.title}</h3>
                            <button className="link-button"><a href={`/blog/${b.slug}`}>Ir a</a></button>
                        </div>
                    ))
                }                
            </main>
            <Footer/>
        </>
    )
}