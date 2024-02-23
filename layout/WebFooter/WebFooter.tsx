import assest from "@/json/assest";
import styles from "@/styles/layout/_footer.module.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const WebFooter = () => {
  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <Box className={styles.footer_main}>
      <Box className={styles.teams_foot}>
        <Typography variant="body2">
          Copyright 2023 Aperture AI | All Rights Reserved.
        </Typography>
      </Box>
      <Button className="bot_btn" onClick={bottomToTop}>
        <Box className="bot_btn_inner">
          <Image src={assest.upArrow} alt="img" width={16} height={16} />
        </Box>
      </Button>
    </Box>
  );
};

export default WebFooter;
