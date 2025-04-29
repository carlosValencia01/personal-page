import { useTranslation } from 'react-i18next';
import '../../i18n';

export const AboutMe = () => {
    const { t, i18n } = useTranslation();

    return (
        <div style={{ padding: '2rem' }}>
            <h1>{t('welcome')}</h1>
            <nav>
                <button onClick={() => i18n.changeLanguage('en')}>English</button>
                <button onClick={() => i18n.changeLanguage('es')}>Español</button>
            </nav>
            <p>{t('about')}</p>
            <p>{t('contact')}</p>
        </div>
    )
}