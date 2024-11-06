import { cn } from 'shared/libs';
import cls from './Banner.module.scss';
import PercentIcon from 'shared/assets/icons/percent.svg'
import RouletteIcon from 'shared/assets/icons/roulette.svg'
import { FC } from 'react';
import { Button, Variant } from '../Button/Button';

export interface Banner {
  title: string;
  image: string;
  titleSize?: 'L' | 'S'
  descr?: string;
  buttonText?: string;
  buttonIcon?: 'measure' | 'percent';
  buttonVariant?: Variant;
  percentsText?: string;
  percentsColor?: string;
  textAlign?: 'left' | 'right';
  textColor?: 'white' | 'black'
}

interface BannerProps {
  className?: string;
  banner: Banner
}

export const Banner:FC<BannerProps> = (props) => {
  const {className, banner} = props
  const {
    title, 
    titleSize = 'S',
    descr, 
    image, 
    buttonText, 
    buttonIcon, 
    buttonVariant, 
    percentsText, 
    percentsColor,
    textAlign = 'left',
    textColor = 'black'
  } = banner
  return (
    <div className={cn([cls.banner, className])}>
      <img className={cls.image} src={image} alt="banner" />
      <div 
        className={cn([cls.content], 
          {
            [cls.alignRight]: textAlign === 'right', 
            [cls.whiteText]: textColor === 'white'
          })}
      >
        <div className={cn([cls.title],
          {[cls.sizeL]: titleSize === 'L', [cls.sizeS]: titleSize === 'S'})} 
        dangerouslySetInnerHTML={{__html: title}} 
        />
        {descr && <div className={cls.descr} dangerouslySetInnerHTML={{__html: descr}} />}
        <div className={cls.additional}>
          {buttonText && <Button className={cls.btn} variant={buttonVariant}>
            {buttonText}
            {buttonIcon && buttonIcon === 'measure' ? <RouletteIcon /> : <PercentIcon />}
          </Button>}
          {percentsText && 
          <span className={cn([cls.additionalText], 
            {[cls.blueText]: percentsColor ==='blue', 
              [cls.orangeText]: percentsColor ==='orange'}
          )}>
            {percentsText}
          </span>}
        </div>
      </div>
    </div>
  );
};