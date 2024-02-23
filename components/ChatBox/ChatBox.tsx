/* eslint-disable react/no-unescaped-entities */
import assest from "@/json/assest";
import styles from "@/styles/components/chabox.module.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function ChatBox() {
    return (

        <Box className={styles.chat_wrap}>
            <Typography variant="h4">Chat Box</Typography>
            <Box className={styles.chat_inr}>
                <Box className={styles.chat_output}>
                    <Typography variant="body1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make.
                    </Typography>
                    <Box className={styles.dot}>
                        <Button>
                            <Image src={assest.dot} width={12} height={2} alt="" />
                        </Button>
                    </Box>
                </Box>
                <Box className={styles.chat_intput}>
                    <Typography variant="body1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make.
                    </Typography>
                    <Box className={styles.dot}>
                        <Button>
                            <Image src={assest.dot} width={12} height={2} alt="" />
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box className={styles.form_chat}>
                <TextField
                    id="outlined-basic"
                    multiline
                    minRows={1}
                    maxRows={3}
                    placeholder="Type a message...."
                    variant="outlined"
                    className={styles.form_control}
                />
                <Button className={styles.send_btn}><Image src={assest.send} alt="" width={13} height={13} /> </Button>
            </Box>

        </Box>

    );
}
