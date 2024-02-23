import useTheme from "@/hooks/general/useTheme";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import assest from "@/json/assest";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NextProgress from "next-progress";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

const Header = dynamic(() => import("../Header/Header"), { suspense: true });
const Footer = dynamic(() => import("../Footer/Footer"), { suspense: true });

interface wrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = (props: wrapperProps) => {
  const { children } = props;

 
  const [scrollTop, setScrollTop] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 340) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);
  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const { theme } = useAppSelector((state) => state.globalSlice);
  const { toogleDarkMode } = useTheme()

  const handleDarkMode = () => {
    if (theme === 'dark-mode') {
      toogleDarkMode('light-mode')
    } else {
      toogleDarkMode('dark-mode')
    }
  }
  return (
    <>
      <NextProgress height={8} color="#31C6FE" />
      
        <Header />
   

      {children}

     
        <Footer />
      
      <Button className="bot_btn" onClick={bottomToTop}>
        <Box className="bot_btn_inner">
          <Image src={assest.upArrow} alt="img" width={16} height={16} />
        </Box>
      </Button>
      <Button onClick={handleDarkMode} className="bot_btn bot_btn2">
        <Box className="bot_btn_inner_eye">
          <Image src={assest.modeBtn} alt="img" width={16} height={16} />
        </Box>
      </Button>
    </>
  );
};

export default Wrapper;
