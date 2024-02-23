
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import styles from "@/styles/components/Guidecard.module.scss";
import InfoIcon from "@mui/icons-material/Info";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import { useState } from "react";

interface CardPropItem {
  lottie1: any;
  text: string;
  lottie2: any;
}

interface cardprop {
  item?: CardPropItem;
  onClick: () => void;
  isActive: boolean;
}

const Lottie = dynamic(() => import("lottie-react"));
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const GuideCard = (props: cardprop) => {
  const { item } = props;

  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = (e: any) => {
    e.stopPropagation();
    setOpen(true);
  };
  const { theme } = useAppSelector((state) => state.globalSlice);


  return (
    <Box className={styles.checkGuide}>
      <Box className={styles.Card}>
        <Card>
          <Checkbox {...label} />
          <CardContent>
            <Tooltip
              title="Meetings with existing clients about commercial terms."
              className={styles.tool}
              arrow
              classes={{ popper: styles.toolBg }}
              // PopperProps={{
              //   disablePortal: true
              // }}
              onClose={handleTooltipClose}
              open={open}
            >
              <IconButton
                onMouseDown={handleTooltipOpen}
                onMouseEnter={handleTooltipOpen}
                onClick={handleTooltipOpen}
              >
                <InfoIcon />
              </IconButton>
            </Tooltip>
            <Lottie
              animationData={theme === 'dark-mode' ? item?.lottie2 : item?.lottie1}
              loop
              style={{
                height: 136,
                width: 136,
                margin: "0 auto"
              }}
              height={136}
              width={136}
              className={styles.lottie_img}
            />
            <Typography variant="body1">{item?.text}</Typography>
          </CardContent>
        </Card>
      </Box>
      {/* <Tooltip
        PopperProps={{
          disablePortal: true
        }}
        onClose={handleTooltipClose}
        open={open}
        title="Add"
      >
        <IconButton
          onMouseDown={handleTooltipOpen}
          onMouseEnter={handleTooltipOpen}
          onClick={handleTooltipOpen}
        >
          Click
        </Button>
      </Tooltip> */}
    </Box>
  );
};

export default GuideCard;
