import { useTranslation } from "react-i18next";


const AboutPage = () => {
  const { t } = useTranslation('about');
  return (
    <div>
      <h1>
        {t('title')}
        <span>{t('title-accent')}</span>
      </h1>
      <p>{t('description')}</p>
    </div>
  );
};

export default AboutPage;
