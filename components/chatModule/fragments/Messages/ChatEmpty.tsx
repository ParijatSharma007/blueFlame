/* eslint-disable import/no-extraneous-dependencies */

import styles from "@/styles/components/chatdetails.module.scss";
import messages from "@/json/lottie/8604-message-loading.json";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic"

const Lottie = dynamic(() => import("lottie-react"));

export default function ChatEmpty() {


  return (
    <Box className={styles.chat_details}>



      <Box className={styles.no_chat_find}>
        <Box className={styles.no_chat_lottie}>
          <Lottie
            animationData={messages}
            loop

          />
        </Box>
        <Typography variant="h4">Engaging in conversation with someone is truly delightful.</Typography>
        <Typography variant="body1">
          Select a captivating individual from the left menu and embark on an invigorating conversation.
        </Typography>
      </Box>


    </Box>
  );
}
