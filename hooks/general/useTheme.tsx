import { setCookieClient } from "@/lib/functions/storage.lib";
import { checkWindow } from "@/lib/functions/_helpers.lib";
import { themeType } from "@/reduxtoolkit/interfaces/interfaces";
import { setGlobalThemeMode } from "@/reduxtoolkit/slices/global.slice";
import { parseCookies } from "nookies";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/useAppDispatch";
import { useAppSelector } from "../redux/useAppSelector";


export const modes = [
  {
    name: "light-mode",
    color: "#fff",
    text: "Light Mode",
    border: "#ccc",
  },
  {
    name: "dark-mode",
    color: "#000",
    text: "Dark Mode",
    border: "#000",
  },


];
const useTheme = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.globalSlice);
  const cookies = parseCookies();

  const cookieTheme =
    cookies?.theme !== "undefined" ? cookies?.theme : "dark-mode";
  const toogleDarkMode = (mode: themeType) => {
    if (checkWindow()) {
      // const isLightMode = document.body.classList.contains("light-mode");

      // if (isLightMode) {
      //   document.body.classList.remove("light-mode");
      //   document.body.classList.add("dark-mode");
      //   setCookieClient("theme", "dark-mode");
      //   dispatch(setGlobalThemeMode("dark-mode"));
      // } else {
      //   document.body.classList.add("light-mode");
      //   document.body.classList.remove("dark-mode");
      //   setCookieClient("theme", "light-mode");
      //   dispatch(setGlobalThemeMode("light-mode"));
      // }

      // document.body.classList.remove("light-mode");

      modes?.forEach((m) => {
        if (m.name !== mode) {
          document.body.classList.remove(m?.name);
        }
      });

      console.log(document, 'document')

      document.body.classList.add(mode);
      setCookieClient("theme", mode);
      dispatch(setGlobalThemeMode(mode));
    }
  };



  useEffect(() => {
    if (checkWindow()) {
      modes?.forEach((m) => {
        if (m.name !== cookieTheme) {
          document.body.classList.remove(m?.name);
        }
      });

      document.body.classList.add(cookieTheme);
      setCookieClient("theme", cookieTheme);
      dispatch(setGlobalThemeMode(cookieTheme));
    }
  }, [cookieTheme]);

  return { toogleDarkMode, theme, cookieTheme };
};

export default useTheme;
