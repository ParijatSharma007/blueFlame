import styles from "@/styles/pages/configuaration.module.scss";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

const Tuning = () => {
    const listloop = [
        {
            text: "Lorem ipsum dolor sit amet consectetur. Tristique augue quis scelerisque pulvinar id ac leo. Eu aenean nunc elit rhoncus vitae proin tincidunt convallis."
        },
        {
            text: "Accumsan sed amet eget nisi arcu semper sed. Egestas quam ornare turpis volutpat arcu velit id nec lorem. Facilisi in donec morbi euismod ac ante eu."
        },
        {
            text: "Volutpat est enim id facilisis lacus morbi congue. Nunc donec tempor mi proin tortor lectus viverra a fames. Turpis aliquam vestibulum ipsum quisque ac tortor molestie tellus eleifend."
        },
        {
            text: "Urna varius eget arcu dui imperdiet diam aenean hac. Ridiculus arcu in aenean at et egestas."
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur. Tristique augue quis scelerisque pulvinar id ac leo. Eu aenean nunc elit rhoncus vitae proin tincidunt convallis."
        },
        {
            text: "Accumsan sed amet eget nisi arcu semper sed. Egestas quam ornare turpis volutpat arcu velit id nec lorem. Facilisi in donec morbi euismod ac ante eu."
        },
        {
            text: "Volutpat est enim id facilisis lacus morbi congue. Nunc donec tempor mi proin tortor lectus viverra a fames. Turpis aliquam vestibulum ipsum quisque ac tortor molestie tellus eleifend."
        },
    ];
    return (
        <Box className={styles.tuning_sec}>
            <Box className={styles.vocabulary_sec}>
                <Typography variant="h5">Vocabulary</Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur. Tristique augue quis
                    scelerisque pulvinar id ac leo. Eu aenean nunc elit rhoncus vitae
                    proin tincidunt convallis. Accumsan sed amet eget nisi arcu semper
                    sed. Egestas quam ornare turpis volutpat arcu velit id nec lorem.
                    Facilisi in donec morbi euismod ac ante eu. Volutpat est enim id
                    facilisis lacus morbi congue. Nunc donec tempor mi proin tortor lectus
                    viverra a fames. Turpis aliquam vestibulum ipsum quisque ac tortor
                    molestie tellus eleifend. Urna varius eget arcu dui imperdiet diam
                    aenean hac. Ridiculus arcu in aenean at et egestas.
                </Typography>
            </Box>
            <List>
                {listloop.map((item, index) => {
                    return <ListItem key={index}>{item.text}</ListItem>;
                })}
            </List>
        </Box>
    );
};

export default Tuning;
