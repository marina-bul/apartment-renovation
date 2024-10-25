import { useTranslation } from "react-i18next";
import { MainBanners } from "widgets/MainBanners";

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
    <div>
      <MainBanners />
      <h1>{t('projects-title')}</h1>
    </div>
  );
};

export default MainPage;
