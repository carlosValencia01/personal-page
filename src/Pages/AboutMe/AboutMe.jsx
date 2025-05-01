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


    return (
        <div className='about__body'>
            {/* Navbar */}
            <header className="navbar">
                <div className="container">
                    {/* <div className="logo">Home</div> */}
                    <nav>
                        <ul className="nav-links">
                        {/* <li><a href="#home">{t('navbar-home')}</a></li> */}
                        <li><a href="#about">{t('navbar-about')}</a></li>
                        <li><a href="#projects">{t('navbar-proyects')}</a></li>
                        <li><a href="#contact">{t('navbar-contact')}</a></li>
                        </ul>
                    </nav>
                    <div className="lang-switch" onClick={toggleLanguage}>
                        <div className={`slider ${lang === 'es' ? 'right' : ''}`}></div>
                        <span className="label left">EN</span>
                        <span className="label right">ES</span>
                    </div>
                    {/* TODO - Add button to download CV */}
                </div>
            </header>

            <main className='main__container'>
                <div id='about'>
                    <h1>{t('section-about')}</h1>
                    <div className='about__container'>
                        <img className='profile__picture' src="../../../public/profile.png" alt="Profile picture" />
                        <p className='content__about'>{t('content-about')}</p>
                    </div>
                </div>

                <div id='skills'>
                    <h2>{t('section-skills')}</h2>
                    <div className='skills__container'>                    
                        <div className='skills__item'>
                            <span className='sub-title'>{t('technologies-skills')}</span>
                            <table className='table'>
                                <td>
                                    <tr><p>.NET</p></tr>
                                    <tr><p>SQL</p></tr>
                                    <tr><p>React</p></tr>
                                    <tr><p>Vue</p></tr>
                                    <tr><p>Angular</p></tr>
                                    <tr><p>JavaScript</p></tr>
                                    <tr><p>C#</p></tr>
                                    <tr><p>HTML</p></tr>
                                </td>
                                <td>
                                    <tr><p>⭐⭐⭐⭐</p></tr>
                                    <tr><p>⭐⭐⭐⭐</p></tr>
                                    <tr><p>⭐⭐⭐⭐</p></tr>
                                    <tr><p>⭐⭐⭐⭐</p></tr>
                                    <tr><p>⭐⭐</p></tr>
                                    <tr><p>⭐⭐⭐⭐</p></tr>
                                    <tr><p>⭐⭐⭐</p></tr>
                                    <tr><p>⭐⭐⭐⭐⭐</p></tr>
                                </td>
                                <td>
                                    <tr><p>x {t('years')}</p></tr>
                                    <tr><p>x {t('years')}</p></tr>
                                    <tr><p>x {t('years')}</p></tr>
                                    <tr><p>x {t('years')}</p></tr>
                                    <tr><p>x {t('years')}</p></tr>
                                    <tr><p>x {t('years')}</p></tr>
                                    <tr><p>x {t('years')}</p></tr>
                                    <tr><p>x {t('years')}</p></tr>
                                </td>
                            </table>
                        </div>
                        <div className='skills__item'>
                            <span className='sub-title'>{t('languages-skills')}</span>
                            <table className='table'>
                                <td>
                                    <tr><p>{t('languages-spanish')}</p></tr>
                                    <tr><p>{t('languages-english')}</p></tr>
                                    <tr><p>{t('languages-italian')}</p></tr>
                                </td>
                                <td>
                                    <tr><p>{t('languages-spanish-grade')}</p></tr>
                                    <tr><p>C2</p></tr>
                                    <tr><p>B1</p></tr>
                                </td>
                                <td>
                                    <tr><img src="public\mx.svg" alt="mx" className='country-flag'/></tr>
                                    <tr><img src="public\us.svg" alt="us" className='country-flag'/></tr>
                                    <tr><img src="public\it.svg" alt="it" className='country-flag'/></tr>
                                </td>
                            </table>                                                                        
                        </div>
                    </div>
                </div>
                <div id='projects'>
                    <h2>{t('section-projects')}</h2>
                </div>
                <div id='education'>
                    <h2>{t('section-education')}</h2>
                    <div class="educacion-item">
                        <h3>Ingeniería en Sistemas / Licenciatura en Informática</h3>
                        <p>Universidad Nacional de [Nombre], [Ciudad, País]</p>
                        <span>2019 - 2023</span>
                        <p>Formación sólida en estructuras de datos, algoritmos, bases de datos y desarrollo de software. Participación en proyectos académicos orientados al desarrollo web full stack.</p>
                    </div>
                </div>
                <div id='lifestyle'>
                    <h2>{t('section-lifestyle')}</h2>
                    <p>{t('content-lifestyle')}</p>
                </div>

                <div id='contact'>
                    <h2>{t('section-contact')}</h2>
                    <div>
                        <p>
                            ¿Te interesa colaborar conmigo o quieres saber más sobre mis proyectos? Estoy siempre abierto a nuevas oportunidades y desafíos. Puedes contactarme a través del siguiente formulario o en mis redes profesionales.
                        </p>

                        <ul>
                            <li>Email: <a href="mailto:carlosvalencia.dev@gmail.com">carlosvalencia.dev@gmail.com</a></li>
                            <li>LinkedIn: <a href="https://linkedin.com/in/carlos-valencia-valenzuela-534b0419a" target="_blank">linkedin.com/in/carlos-valencia-valenzuela-534b0419a</a></li>
                            <li>GitHub: <a href="https://github.com/carlosValencia01" target="_blank">github.com/carlosValencia01</a></li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}