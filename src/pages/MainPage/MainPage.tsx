import { useTranslation } from "react-i18next";
import cls from './MainPage.module.scss';
import { MainBanners } from "widgets/MainBanners";

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
    <div className={cls.page}>
      <MainBanners />
      <h1>{t('projects-title')}</h1>
    </div>
  );
};

export default MainPage;
