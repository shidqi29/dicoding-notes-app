import { useEffect } from "react";
import { PiMoonBold, PiSunDimBold } from "react-icons/pi";
import { themeChange } from "theme-change";

const Header = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <header className="sticky top-0 z-10 mb-2 w-full bg-base-300 py-2 shadow-sm shadow-current">
      <nav className="container navbar mx-auto max-w-6xl">
        <div className="flex-1">
          <h1 className="text-xl font-bold">
            <a href="/">Notes App</a>
          </h1>
        </div>
        <div className="flex-none">
          <label className="swap swap-rotate">
            <input type="checkbox" />
            <div
              className="swap-on w-7 fill-current"
              data-set-theme="light"
              title="Light Mode"
            >
              <PiMoonBold size={28} />
            </div>
            <div
              className="swap-off w-7 fill-current"
              data-set-theme="dark"
              title="Dark Mode"
            >
              <PiSunDimBold size={28} />
            </div>
          </label>
        </div>
      </nav>
    </header>
  );
};

export default Header;
