import { lazy, useState } from "react";
const NavigationDesktop = lazy(() => import("./navigation/NavigationDesktop"));
const NavigationMobile = lazy(() => import("./navigation/NavigationMobile"));
import AppTheme from "./app-theme/AppTheme";

import "./HeaderPanel.scss";
import * as classes from "./Header.module.scss";

const HeaderPanel: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  return (
    <div className="header__container">
      {isMobile && <NavigationMobile />}
      <label className={classes.header__label}>{process.env.APP_NAME}</label>
      {!isMobile && <NavigationDesktop />}
      <AppTheme />
      <button onClick={() => setIsMobile((isMobile) => !isMobile)}>
        Toggle theme
      </button>
    </div>
  );
};

export default HeaderPanel;
