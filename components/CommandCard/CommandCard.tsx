import assest from "@/json/assest";
import styles from "@/styles/pages/configuaration.module.scss";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const CommandCard = () => {
    return (
        <Card className={styles.card_command}>
            <CardContent>
                <Box className={styles.card_head}>
                    <figure>
                        <Image src={assest.folderOpen} alt="img" width={21} height={18} />
                    </figure>
                    <Typography variant="h5">Card 1</Typography>
                </Box>
                <List>
                    <ListItem>
                        <Typography variant="h6">Provider</Typography>
                        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur. Ultrices dignissim feugiat risus aliquet. Urna euismod phare.</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="h6">Command</Typography>
                        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur. Ultrices dignissim feugiat risus aliquet. Urna euismod phare.</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="h6">Parameters</Typography>
                        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur. Ultrices dignissim feugiat risus aliquet. Urna euismod phare.</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="h6">Description</Typography>
                        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur. Lectus in erat libero adipiscing lacus tellus. Eleifend sit at risus montes posuere. Nunc elit egestas dignissim elementum.</Typography>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    )
}

export default CommandCard;