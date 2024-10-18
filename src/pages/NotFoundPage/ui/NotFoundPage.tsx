import { useTranslation } from 'react-i18next';
import Label from '../404label.svg'
import ArrowCirle from 'shared/assets/icons/arrow-circle.svg'
import cls from './NotFoundPage.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';


export const NotFoundPage = () => {
  const {t} = useTranslation()
  return (
    <div className={cls.notFoundPage}>
      <Label />
      <h3 className={cls.title}>
        {t('404-page')}
      </h3>
      <AppLink to={"/"}>
        <Button className={cls.goToMainBtn}>
          {t('back-to-main')}
          <ArrowCirle />
        </Button>
      </AppLink>

    </div>
  );
};