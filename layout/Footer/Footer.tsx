import assest from "@/json/assest";
import styles from "@/styles/layout/_footer.module.scss";
import CustomButton from "@/ui/Buttons/CustomButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
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
  return (
    <Box className={styles.footer_main}>
      <footer className={styles.footer_sec}>
        <Container fixed>
          <Grid container spacing={{ xs: 4, sm: 4, md: 2 }}>
            <Grid item md={3.5} sm={12} xs={12}>
              <Box className={styles.first_grid}>
                <Link href="/">
                  <Image src={assest.logo} alt="img" width={130} height={49} />
                </Link>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  porttitor .
                </Typography>
                <CustomButton type="button">
                  <Typography variant="button">Join the Waitlist</Typography>
                </CustomButton>
              </Box>
            </Grid>
            <Grid item md={2.5} sm={6} xs={6}>
              <Box className={styles.second_grid}>
                <Typography variant="h5">Quick Links</Typography>
                <List>
                  <ListItem>
                    <Link href="/">Product</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/">Use Cases</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/">How It Works</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/">Integrations</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/">Pricing</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/">Blog</Link>
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item md={2.5} sm={6} xs={6}>
              <Box className={styles.second_grid}>
                <Typography variant="h5">Company</Typography>
                <List>
                  <ListItem>
                    <Link href="/">About Us</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/">Security</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/">Privacy Policy</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/">Terms and conditions</Link>
                  </ListItem>
                </List>
                <Box className={styles.social_icon}>
                  <Typography variant="h5">followers</Typography>
                  <Box className={styles.social_area}>
                    <Link href="/">
                      <Image
                        src={assest.facebook}
                        alt="img"
                        width={10.5}
                        height={18}
                        className="fb_icon"
                      />
                    </Link>
                    <Link href="/">
                      <TwitterIcon />
                    </Link>
                    <Link href="/">
                      <InstagramIcon />
                    </Link>
                    <Link href="/">
                      <YouTubeIcon />
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3.5} sm={12} xs={12}>
              <Box className={`${styles.second_grid} ${styles.third_grid}`}>
                <Typography variant="h5">Contact information</Typography>
                <List>
                  <ListItem>
                    <Link href="mailto:support@ApertureAI.ai">
                      <Image
                        src={assest.mailQ}
                        alt="img"
                        width={20}
                        height={20}
                      />
                      <span>support@ApertureAI.ai</span>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="tel:(+00) (0)36 - 003 00 40">
                      <Image
                        src={assest.telephone}
                        alt="img"
                        width={20}
                        height={20}
                      />
                      <span>(+00) (0)36 - 003 00 40</span>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Image
                      src={assest.location}
                      alt="img"
                      width={16}
                      height={20}
                    />
                    <span>
                      Lorem Ipsum is simply dummy text of the printing, 235630
                    </span>
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Container>

      </footer>
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

export default Footer;
