import { cn } from 'shared/libs';
import cls from './MainBanners.module.scss';
import { FC } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import RouletteIcon from 'shared/assets/icons/roulette.svg'
import PercentIcon from 'shared/assets/icons/percent.svg'
import Banner1 from "shared/assets/img/banner1.png";
import Banner2 from "shared/assets/img/banner2.png";
import Banner3 from "shared/assets/img/banner3.png";
import Banner4 from "shared/assets/img/banner4.png";

interface MainBannersProps {
  className?: string;
}

export const MainBanners:FC<MainBannersProps> = ({className}) => {
  const {t} = useTranslation('main')
  return (
    <div className={cn([cls.mainBanners, className])}>
      <div className={cls.banner1}>
        <img className={cls.image} src={Banner1} alt="banner" />
        <div className={cls.content}>
          <div className={cls.title} dangerouslySetInnerHTML={{__html: t('main-banners.banner1.title')}} />
          <div className={cls.descr} dangerouslySetInnerHTML={{__html:t('main-banners.banner1.descr')}} />
          <Button className={cls.btn}>{t('main-banners.banner1.button-text')}<RouletteIcon /></Button>
        </div>
      </div>
      <div className={cls.banner2}>
        <img className={cls.image} src={Banner2} alt="banner" />
        <div className={cls.content}>
          <div className={cls.title} dangerouslySetInnerHTML={{__html: t('main-banners.banner2.title')}} />
          <Button className={cls.btn} variant='white'>{t('main-banners.banner2.button-text')}<PercentIcon /></Button>
        </div>
      </div>
      <div className={cls.banner3}>
        <img className={cls.image} src={Banner3} alt="banner" />
        <div className={cls.content}>
          <div className={cls.title} dangerouslySetInnerHTML={{ __html: t('main-banners.banner3.title')}} />
          <div className={cls.descr} dangerouslySetInnerHTML={{__html: t('main-banners.banner3.descr')}} />
        </div>
      </div>
      <div className={cls.banner4}>
        <img className={cls.image} src={Banner4} alt="banner" />
        <div className={cls.content}>
          <h3 className={cls.title} dangerouslySetInnerHTML={{__html: t('main-banners.banner4.title')}} />
        </div>
      </div>
    </div>
  );
};