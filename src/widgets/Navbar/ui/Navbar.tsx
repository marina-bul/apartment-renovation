import { cn } from "shared/libs/classnames/classnames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import Logo from "shared/assets/logo.svg";
import Phone from "shared/assets/icons/phone.svg";
import ToggleThemeIcon from "shared/assets/icons/toggleThemeIcon.png";
import Profile from "shared/assets/icons/profile.svg";
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
  toggleTheme: () => void;
}

export const Navbar = ({ className, toggleTheme }: NavbarProps) => {
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <nav className={cn([cls.navbar, className])}>
      <AppLink className={cls.logo} to="/">
        <Logo />
      </AppLink>
      <div className={cls.links}>
        <AppLink to="/price" theme={AppLinkTheme.PRIMARY}>
          {t('nav-links.prices')}
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.PRIMARY}>
          {t('nav-links.about')}
        </AppLink>
      </div>
      <div className={cls.actions}>
        <div className={cls.contacts}>
          <Phone />
          <span>{t('phone-number')}</span>
        </div>
        <Button variant="blue" className={cls.toggleLang} onClick={toggleLang}>
          {t("change-lang")}
        </Button>
        <Button
          className={cls.toggleTheme}
          shape="circle"
          variant="white"
          onClick={toggleTheme}
        >
          <img src={ToggleThemeIcon} className={cls.toggleThemeIcon} />
        </Button>
        <Button variant="blue" shape="circle" className={cls.profile}>
          <Profile />
        </Button>
      </div>
    </nav>
  );
};
