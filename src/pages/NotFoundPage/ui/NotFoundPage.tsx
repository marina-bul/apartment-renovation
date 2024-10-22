import { useTranslation } from 'react-i18next';
import NotFoundLabel from '../404label.svg'
import cls from './NotFoundPage.module.scss';
import { GoToMainButton } from 'shared/ui/GoToMainButton/GoToMainButton';


export const NotFoundPage = () => {
  const {t} = useTranslation()
  return (
    <div className={cls.notFoundPage}>
      <NotFoundLabel />
      <h3 className={cls.title}>
        {t('404-page')}
      </h3>
      <GoToMainButton />
    </div>
  );
};