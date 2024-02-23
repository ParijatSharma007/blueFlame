import assest from "@/json/assest";
import WebWrapper from "@/layout/WebWrapper/WebWrapper";
import styles from "@/styles/pages/calender.module.scss";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";

import Image from "next/image";

const CustomFullCalender = dynamic(
  () => import("@/components/CustomFullCalenderModule/CustomFullCalender"),
  { ssr: false }
);

const calender = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <WebWrapper>
      <Box className={styles.calender_head}>
        <Typography variant="h3" id="monthAndYear" className="sub_heading">
          Calendar
        </Typography>
        <Box className={styles.search_right}>
          <FormControl
            sx={{ m: 1, width: "25ch" }}
            variant="outlined"
            className={styles.webSearch}
          >
            <OutlinedInput
              id="outlined-adornment-weight"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight"
              }}
              placeholder="Search"
            />
          </FormControl>
          <Button className={styles.filter_btn}>
            <Image src={assest.filterIcon} alt="img" width={25} height={17} />
          </Button>
          <Button className={styles.add_btn}>
            <Box>
              <AddCircleOutlineIcon />
              Add new
            </Box>

          </Button>
        </Box>
      </Box>
      <Grid container spacing={4}>
        <Grid item md={5.5} xs={12}>
          <CustomFullCalender view="month" />
          {/* <CustomFullCalender view="week" /> */}
        </Grid>

        <Grid item md={6.5} xs={12}>
          <Paper className={styles.paper_right}>
            <Box className={styles.call_head}>
              <Typography variant="h6">Friday 9th April, 2023</Typography>
              <FormControlLabel label="Join call" control={<Switch />} />
            </Box>
            <Box className={styles.body_sec}>
              <Box className={styles.gmeet}>
                <Box className={styles.left_gmeet}>
                  <Image
                    src={assest.meetIcon}
                    alt="img"
                    width={55}
                    height={55}
                  />
                  <Box className={styles.text_sec}>
                    <Typography variant="h5">
                      Meeting With Design Team
                    </Typography>
                    <Typography variant="body1">
                      Type of Meeting Name
                    </Typography>
                    <Box className={`${styles.time_sec} ${styles.mbl}`}>
                      <AccessTimeOutlinedIcon /> 09:00-10:00 A.M.
                    </Box>
                  </Box>
                </Box>
                <Box className={`${styles.time_sec} ${styles.dsktp}`}>
                  <AccessTimeOutlinedIcon /> 09:00-10:00 A.M.
                </Box>
              </Box>
              <Box className={styles.call_summary}>
                <Typography variant="h5" className={styles.sub_head}>
                  Call Summary:
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur. Porta odio lorem quis
                  lacus in sit urna. Viverra mattis ligula dictum morbi semper
                  arcu iaculis nunc.
                </Typography>
              </Box>
              <Box className={styles.attendees}>
                <Box>
                  <Typography variant="h5" className={styles.sub_head}>
                    Attendees:
                  </Typography>
                  <Box className={styles.img_sec}>
                    <Image
                      src={assest.avatarImg}
                      alt="img"
                      width={25}
                      height={25}
                    />
                    <Image
                      src={assest.avatarImg2}
                      alt="img"
                      width={25}
                      height={25}
                    />
                    <Image
                      src={assest.avatarImg}
                      alt="img"
                      width={25}
                      height={25}
                    />
                    <Image
                      src={assest.avatarImg2}
                      alt="img"
                      width={25}
                      height={25}
                    />
                    <Button className={styles.countimg}>+4</Button>
                  </Box>
                </Box>
                <Button className={styles.add_atn}>
                  <AddCircleOutlineIcon />
                  Add attendees
                </Button>
              </Box>
              <Box className={styles.transcript}>
                <Typography variant="h5" className={styles.sub_head}>
                  Link To Transcript:
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum.dolor sit amet.com
                </Typography>
              </Box>
              <Box className={styles.length}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Typography variant="h5" className={styles.sub_head}>
                      Call Length
                    </Typography>
                    <Typography variant="body1">40 min</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="h5" className={styles.sub_head}>
                      Further Insights:
                    </Typography>
                    <Typography variant="body1">00 min</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box className={styles.activities}>
                <Button>
                  <Image
                    src={assest.checkbook}
                    alt="img"
                    width={15}
                    height={20}
                  />
                  <span>View Related Activities</span>
                  <Image src={assest.btnArr} alt="img" width={15} height={15} className="side_arrow_calender" />
                </Button>
                <Button className={styles.plus_btn}>
                  <Image
                    src={assest.addIcon}
                    alt="img"
                    width={15}
                    height={15}
                  />
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </WebWrapper>
  );
};

export default calender;
