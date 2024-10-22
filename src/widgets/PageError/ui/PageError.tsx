import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';
import { GoToMainButton } from 'shared/ui/GoToMainButton/GoToMainButton';

export const PageError = () => {
  const {t} = useTranslation()
  return (
    <div className={cls.pageError}>
      <h1>{t("something-went-wrong.title")}</h1>
      <p>{t("something-went-wrong.descr")}</p>
      <GoToMainButton />
    </div>
  );
};