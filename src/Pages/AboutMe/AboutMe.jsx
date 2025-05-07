import { useTranslation } from 'react-i18next';
import '../../i18n';
import './styles.css'
import { useEffect, useState } from 'react';
import { ProjectComponent } from './ProjectComponent';
import { projectsEs } from './projectInfoEs'
import { projectsEn } from './projectInfoEn'

export const AboutMe = () => {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language || 'en');
    const [projects, setProjects] = useState(projectsEn);
        
    

    const toggleLanguage = () => {
        const newLang = lang === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
        setLang(newLang);
      };
    
      useEffect(() => {
        setLang(i18n.language);
        lang === 'es' ? setProjects(projectsEs) : setProjects(projectsEn);
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
                    <h1 className='section-title'>{t('section-about')}</h1>
                    <div className='about__container'>
                        <img className='profile__picture' src="./profile.png" alt="Profile picture" />
                        <p className='content__about'>{t('content-about')}</p>
                    </div>
                </div>

                <div id='skills'>
                    <h2 className='section-title'>{t('section-skills')}</h2>
                    <div className='skills__container'>                    
                        <div className='skills__item'>
                            <span className='sub-title'>{t('technologies-skills')}</span>                            
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <td>.NET</td>
                                        <td>⭐⭐⭐⭐</td>
                                        <td>x {t('years')}</td>
                                    </tr>
                                    <tr>
                                        <td>SQL</td>
                                        <td>⭐⭐⭐⭐</td>
                                        <td>x {t('years')}</td>
                                    </tr>
                                    <tr>
                                        <td>React</td>
                                        <td>⭐⭐⭐⭐</td>
                                        <td>x {t('years')}</td>
                                    </tr>
                                    <tr>
                                        <td>Vue</td>
                                        <td>⭐⭐⭐⭐</td>
                                        <td>x {t('years')}</td>
                                    </tr>
                                    <tr>
                                        <td>Angular</td>
                                        <td>⭐⭐⭐⭐</td>
                                        <td>x {t('years')}</td>
                                    </tr>
                                    <tr>
                                        <td>JavaScript</td>
                                        <td>⭐⭐⭐⭐</td>
                                        <td>x {t('years')}</td>
                                    </tr>
                                    <tr>
                                        <td>C#</td>
                                        <td>⭐⭐⭐⭐</td>
                                        <td>x {t('years')}</td>
                                    </tr>
                                    <tr>
                                        <td>HTML</td>
                                        <td>⭐⭐⭐⭐</td>
                                        <td>x {t('years')}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='skills__item'>
                            <span className='sub-title'>{t('languages-skills')}</span>
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <td>{t('languages-spanish')}</td>
                                        <td>{t('languages-spanish-grade')}</td>
                                        <td><img src=".\mx.svg" alt="mx" className='country-flag'/></td>
                                    </tr>
                                    <tr>
                                        <td>{t('languages-english')}</td>
                                        <td>C2</td>
                                        <td><img src=".\us.svg" alt="us" className='country-flag'/></td>
                                    </tr>
                                    <tr>
                                        <td>{t('languages-italian')}</td>
                                        <td>B1</td>
                                        <td><img src=".\it.svg" alt="it" className='country-flag'/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div id='projects'>
                    <h2 className='section-title'>{t('section-projects')}</h2>
                    {
                        projects.map(project => 
                            <ProjectComponent key={project.id} project={project} />                            
                        )
                    }                    
                </div>
                <div id='education'>
                    <h2 className='section-title'>{t('section-education')}</h2>
                    <div className="educacion-item">
                        <h3>Ingeniería en Sistemas Computacionales</h3>
                        <p>Instituto Tecnológico de Tepic, Nayarit, Mexico</p>
                        <span>2014 - 2019</span>
                        <p>Formación sólida en estructuras de datos, algoritmos, bases de datos y desarrollo de software. Participación en proyectos académicos orientados al desarrollo web full stack.</p>
                    </div>
                </div>
                <div id='lifestyle'>
                    <h2 className='section-title'>{t('section-lifestyle')}</h2>
                    <p>{t('content-lifestyle')}</p>
                </div>

                <div id='contact'>
                    <h2 className='section-title'>{t('section-contact')}</h2>
                    <div>
                        <p>
                            {t('contact-subtitle')}                            
                        </p>

                        <table className='table'>
                            <tbody>
                                <tr>
                                    <td>Email:</td>
                                    <td>
                                        <a href="mailto:carlosvalencia.dev@gmail.com">
                                            <svg className='icon-color' height="25px" width="25px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fillRule="evenodd"></path> </g></svg>
                                        </a>
                                    </td>
                                    <td><a href="mailto:carlosvalencia.dev@gmail.com">carlosvalencia.dev@gmail.com</a></td>
                                </tr>
                                <tr>
                                    <td>LinkedIn:</td>
                                    <td>
                                        <a href="https://linkedin.com/in/carlos-valencia-valenzuela-534b0419a" target="_blank">
                                            <svg className='icon-color' height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z"></path> </g></svg>
                                        </a>
                                    </td>
                                    <td><a href="https://linkedin.com/in/carlos-valencia-valenzuela-534b0419a" target="_blank">linkedin.com/in/carlos-valencia-valenzuela-534b0419a</a></td>
                                </tr>
                                <tr>
                                    <td>GitHub:</td>
                                    <td>
                                        <a href="https://github.com/carlosValencia01" target="_blank">
                                            <svg className='icon-color' height="25px" width="25px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" className='icon-color' > <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
                                        </a>
                                    </td>
                                    <td><a href="https://github.com/carlosValencia01" target="_blank">github.com/carlosValencia01</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            <footer className="footer">
                <div className="footer-container">                    
                    <div className="footer-brand">
                        <h3>Carlos Valencia</h3>
                        <p>© {new Date().getFullYear()} - {t('footer-rights')}</p>
                    </div>
                                        
                    <div className="footer-social">
                        <a href="https://github.com/carlosValencia01" target="_blank">
                        <svg viewBox="0 0 20 20" height="25px" width="25px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className='icon-white'><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" className='icon-white'> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
                        </a>
                        <a href="https://linkedin.com/in/carlos-valencia-valenzuela-534b0419a" target="_blank">
                            <svg className='icon-white' height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z"></path> </g></svg>
                        </a>
                        <a href="mailto:carlosvalencia.dev@gmail.com">
                            <svg className='icon-white' height="25px" width="25px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fillRule="evenodd"></path> </g></svg>
                        </a>
                    </div>
                    
                </div>
            </footer>


        </div>
    )
}