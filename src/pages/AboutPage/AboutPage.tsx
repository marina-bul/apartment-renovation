import { useTranslation } from "react-i18next";

import cls from './AboutPage.module.scss';


const AboutPage = () => {
  const { t } = useTranslation('about');
  return (
    <div>
      <div className={cls.head}>
        <h1 className={cls.title}>
          {t('title')}
          <span className={cls.accentString}>{t('title-accent')}</span>
        </h1>
        <p>{t('description')}</p>
      </div>   
    </div>
  );
};

export default AboutPage;
