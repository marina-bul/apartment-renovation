import { cn } from 'shared/libs';
import cls from './MainBanners.module.scss';
import { FC } from 'react';
import Banner1 from "shared/assets/img/banner1.png";
import Banner2 from "shared/assets/img/banner2.png";
import Banner3 from "shared/assets/img/banner3.png";
import Banner4 from "shared/assets/img/banner4.png";
import { Banner } from 'shared/ui/Banner/Banner';

interface MainBannersProps {
  className?: string;
}

const BANNERS_DATA: Banner[] = [
  {
    title: "Качественный ремонт<br>квартир в Москве и МО",
    image: Banner1,
    titleSize: 'L',
    descr: 'Бесплатный выезд замерщика в день обращения! <br>Начинаем ремонт в течении 3 дней!',
    buttonText: 'ЗАПИСАТЬСЯ НА ЗАМЕР',
    buttonIcon: 'measure'
  },
  { 
    title: "Предоставляем фиксированную <br>скидку на все отделочные работы",
    image: Banner2,
    buttonText: 'ПОДРОБНЕЕ',
    buttonIcon: 'percent',
    buttonVariant: 'white',
    percentsText: '- 30%',
    percentsColor: 'orange',
    textColor: 'white',
  },
  {
    title: "При заказе капитального ремонта",
    image: Banner3,
    descr: 'Дизайн проект в подарок',
    textColor: 'white',
  },
  {
    title: "Отделка <br>под ключ",
    image: Banner4,
    percentsText: '- 10%',
    percentsColor: 'blue',
    textAlign: 'right'
  },
]

export const MainBanners:FC<MainBannersProps> = ({className}) => {
  return (
    <div className={cn([cls.mainBanners, className])}>
      {BANNERS_DATA.map((banner, index) => {
        return <Banner banner={banner} className={cls[`banner${index + 1}`]} key={banner.title} />
      })}
    </div>
  );
};