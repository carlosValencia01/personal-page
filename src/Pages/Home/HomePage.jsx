import { Footer } from "../../Components/Footer"
import { Header } from "../../Components/Header"
import './homepage.css'

export const HomePage = () => {
    return (
        <>
            <Header/>
            <main>
                <h2>Home component</h2>
                <p>Content</p>
            </main>
            <Footer/>
        </>
    )
}