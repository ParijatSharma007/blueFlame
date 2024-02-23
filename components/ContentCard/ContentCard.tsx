import assest from "@/json/assest";
import styles from "@/styles/components/contentcard.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const ContentCard = () => {
  const carditem = [
    {
      title: "Card 1"
    },
    {
      title: "Card 2"
    },
    {
      title: "Card 3"
    },
    {
      title: "Card 4"
    },
    {
      title: "Card 5"
    }
  ];
  return (
    <Grid container spacing={2}>
      {carditem.map((item, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <Grid item md={2.4} key={index}>
            <Card className={styles.content_card}>
              <CardContent>
                <figure>
                  <Image
                    src={assest.folderOpen}
                    alt="img"
                    width={20}
                    height={18}
                  />
                </figure>
                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet lacinia at mauris ullamcorper{" "}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ContentCard;
