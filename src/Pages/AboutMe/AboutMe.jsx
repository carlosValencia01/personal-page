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
        <div className='about__body'>
            {/* Navbar */}
            <header className="navbar">
                <div className="container">
                    <div className="logo">Home</div>
                    <nav>
                        <ul className="nav-links">
                        <li><a href="#home">{t('navbar-home')}</a></li>
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
                </div>
            </header>

            <main className='main__container'>
                <div id='about'>
                    <h1>{t('section-about')}</h1>
                    <div className='about__container'>
                        <img className='profile__picture' src="public\profile.png" alt="Profile picture" />
                        <p className='content__about'>{t('content-about')}</p>
                    </div>
                </div>
                <div id='skills'>
                    <h2>{t('section-skills')}</h2>

                </div>
                <div id='projects'>
                    <h2>{t('section-projects')}</h2>
                </div>
                <div id='education'>
                    <h2>{t('section-education')}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi qui, voluptates fuga provident minima, suscipit quam perspiciatis id repellendus deleniti quis sunt perferendis mollitia. Exercitationem in, voluptate culpa aut reiciendis rem officia? Dicta eius corporis minus ut, consequatur fugiat commodi esse, sit ipsum, est in magnam? Accusantium temporibus blanditiis sequi fugiat, sint ipsam mollitia doloremque minus velit architecto non. Enim, ut dolorem doloremque nulla assumenda architecto distinctio quaerat et nihil accusantium rerum illum? Id reprehenderit expedita sapiente, enim animi debitis. Fugit ducimus laudantium rerum ullam quibusdam voluptatum molestias, repudiandae placeat illo a voluptas veniam, commodi assumenda ipsam. Repudiandae, qui.</p>
                </div>
                <div id='lifestyle'>
                    <h2>{t('section-lifestyle')}</h2>
                </div>
                <div id='contact'>
                    <h2>{t('section-contact')}</h2>
                </div>
            </main>
        </div>
    )
}