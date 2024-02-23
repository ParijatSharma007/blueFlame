import assest from "@/json/assest";
import WebWrapper from "@/layout/WebWrapper/WebWrapper";
import styles from "@/styles/pages/integration.module.scss";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const index = () => {
    return (
        <WebWrapper>
            <Typography variant="h3" id="monthAndYear" className="sub_heading">
                Integration
            </Typography>
            <Paper className={styles.box_paper_integration}>
                <figure>
                    <Image src={assest.folderOpen} alt="img" width={38} height={33} />
                </figure>
                <Box className={styles.text_sec}>
                    <Typography variant="h5">Integrated party 1</Typography>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet consectetur. Tristique augue quis
                        scelerisque pulvinar id ac leo. Eu aenean nunc elit rhoncus vitae
                        proin tincidunt convallis. Accumsan sed amet eget nisi arcu semper
                        sed. Egestas quam ornare turpis volutpat arcu velit id nec lorem.
                        Facilisi in donec morbi euismod ac ante eu. Volutpat est enim id
                        facilisis lacus morbi congue. Nunc donec tempor mi proin tortor
                        lectus viverra a fames. Turpis aliquam vestibulum ipsum quisque ac
                        tortor molestie tellus eleifend. Urna varius eget arcu dui imperdiet
                        diam aenean hac. Vulputate justo accumsan nunc diam luctus sit enim.
                        Vitae quam enim aliquam felis sit.
                    </Typography>
                    <Typography variant="body1">
                        Ut dolor ornare massa aliquet dui faucibus in tincidunt quis. Aenean
                        eu velit tristique purus suscipit dui. Imperdiet sit ultricies eget
                        sollicitudin auctor cursus. Vestibulum amet justo elementum eget.
                        Felis at ac est duis et fringilla urna ut. Mollis feugiat porta
                        risus fringilla nec vehicula adipiscing quis quam. Sit aliquam
                        pellentesque arcu sed sagittis aliquet interdum. Ridiculus arcu in
                        aenean at et egestas.
                    </Typography>
                </Box>
            </Paper>
        </WebWrapper>
    );
};

export default index;
