import { useTranslation } from 'react-i18next';
import '../../i18n';
import './styles.css'
import { useEffect, useState } from 'react';

export const AboutMe = () => {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language || 'en');

    const toggleLanguage = () => {
        const newLang = lang === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
        setLang(newLang);
      };
    
      useEffect(() => {
        setLang(i18n.language);
      }, [i18n.language]);


    {/* <h1>{t('welcome')}</h1> 
        <button onClick={() => i18n.changeLanguage('en')}>English</button>
                <button onClick={() => i18n.changeLanguage('es')}>Español</button>
        */}

    return (
        <div>
            {/* Navbar */}
            <header className="navbar">
                <div className="container">
                    <div className="logo">Home</div>
                    <nav>
                        <ul className="nav-links">
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#proyectos">Proyectos</a></li>
                        <li><a href="#about">Sobre mí</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                        </ul>
                    </nav>
                    <div className="lang-switch" onClick={toggleLanguage}>
                        <div className={`slider ${lang === 'es' ? 'right' : ''}`}></div>
                        <span className="label left">EN</span>
                        <span className="label right">ES</span>
                    </div>
                </div>
            </header>

            <main>
                <section id="inicio">Inicio</section>
                <section id="proyectos">Proyectos</section>
                <section id="about">Sobre mí</section>
                <section id="contacto">Contacto</section>
            </main>
        </div>
    )
}