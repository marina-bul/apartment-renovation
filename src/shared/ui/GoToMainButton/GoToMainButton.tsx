import { FC } from 'react';
import { Button, ButtonProps } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import ArrowCirle from 'shared/assets/icons/arrow-circle.svg'
import { AppLink } from 'shared/ui/AppLink/AppLink';

interface GoToMainButtonProps extends ButtonProps {
  className?: string;
}

export const GoToMainButton:FC<GoToMainButtonProps> = ({className}) => {
  const {t} = useTranslation()
  return (
    <AppLink to={"/"}>
      <Button className={className}>      
        {t('back-to-main')}
        <ArrowCirle />    
      </Button>
    </AppLink> 
  );
};