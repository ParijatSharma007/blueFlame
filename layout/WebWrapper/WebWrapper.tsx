import DashSidebar from "@/components/DashSidebar/DashSidebar";
import useTheme from "@/hooks/general/useTheme";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import assest from "@/json/assest";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NextProgress from "next-progress";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";

const WebHeader = dynamic(() => import("../WebHeader/WebHeader"), {
  suspense: true
});
const WebFooter = dynamic(() => import("../WebFooter/WebFooter"), {
  suspense: true
});

interface webwrapperProps {
  children: JSX.Element | JSX.Element[];
}

const WebWrapper = (props: webwrapperProps) => {
  const { children } = props;
  const [collapse, setCollapse] = useState(false);
  const handleCollapseOpen = () => {
    setCollapse(!collapse);
  };
  // const [scrollTop, setScrollTop] = React.useState(false);
  // React.useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.pageYOffset > 340) {
  //       setScrollTop(true);
  //     } else {
  //       setScrollTop(false);
  //     }
  //   });
  // }, []);
  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const [menu, menuUpdate] = React.useState(false);
  const buttonActive = () => {
    menuUpdate(!menu);
  }
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

      <WebHeader />

      <Box className="container-fluid-inner">
        <Box className={menu ? "mobile_actives page_wrap cmn_gap" : "page_wrap cmn_gap"}>


          <Box
            className={collapse ? "page-warp-left-collapse" : "page-warp-left"}
          >
            <DashSidebar
              collapse={collapse}
              collapseMenu={menu}
              collapseButton={buttonActive}
              onclick={() => handleCollapseOpen()}
            />
          </Box>

          <Box
            className={
              collapse ? "page-warp-right-collapse" : "page-warp-right"
            }
          >
            {" "}
            <Box className="mobile_menu_sec">
              <Button onClick={buttonActive}><i><Image src={assest.menu_toggle_mbl} width={18} height={13} alt="" /></i> Menu</Button>
            </Box>
            <Box className="page-warp-right-inner">
              {children}
            </Box>
          </Box>
          <Box className={menu ? "mobile-overlay active" : "mobile-overlay"} onClick={buttonActive} />

        </Box>
      </Box>


      <WebFooter />

      <Button onClick={handleDarkMode} className="bot_btn bot_btn2">
        <Box className="bot_btn_inner_eye">
          <Image src={assest.modeBtn} alt="img" width={16} height={16} />
        </Box>
      </Button>

    </>
  );
};

export default WebWrapper;
