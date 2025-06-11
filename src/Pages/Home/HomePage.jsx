import Carousel from "../../Components/Carousel";
import { Footer } from "../../Components/Footer"
import { HomeHeader } from "../../Components/HomeHeader"
import blogs from '../../Data/blogs.json';
import './homepage.css'
import {blogItems} from "./entries";
import { BlogCard } from "../../Components/BlogCard";

export const HomePage = () => {

    return (
        <>
            <HomeHeader/>
            <main>
                <h2>Últimos Artículos</h2>
                <div>
                    <Carousel items={blogItems} />
                </div>
                <h2>Blogs</h2>                
                <div className="homePage-blogs-container" id="blog">
                    {
                        blogs.map((b)=>(
                            <BlogCard key={b.id} blog={b}/>
                        ))
                    }
                </div>            
            </main>
            <Footer/>
        </>
    )
}