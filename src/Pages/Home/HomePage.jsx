import Carousel from "../../Components/Carousel";
import { Footer } from "../../Components/Footer"
import { HomeHeader } from "../../Components/HomeHeader"
import blogs from '../../Data/blogs.json';
import './homepage.css'
import {blogItems} from "./entries";

export const HomePage = () => {

    return (
        <>
            <HomeHeader/>
            <main>
                <div>
                    <h1>Últimos Artículos</h1>
                    <Carousel items={blogItems} />
                </div>
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