import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import * as React from "react";

// import { useAppDispatch } from "@/hooks/useAppDispatch";
// import { useAppSelector } from "@/hooks/redux/useAppSelector";
import assest from "@/json/assest";
// import { logout } from "@/reduxtoolkit/slices/userSlice";
import styles from "@/styles/layout/header.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";

const CustomButton = dynamic(() => import("@/ui/Buttons/CustomButton"));

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

const top100Films = [{ title: "abc" }, { title: "xyz" }];
const WebHeader = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const { userData, isLoggedIn } = useAppSelector((state) => state.userSlice);
  // const dispatch = useAppDispatch();
  // const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const handleLogout = () => {
  //   dispatch(logout());
  //   router.push("/login");
  // };
  const [search, setSearch] = React.useState(false);


  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        className={`${styles.headerContainer} ${styles.webHeaderContainer}`}
      >
        <Stack direction="row" className="container-fluid-inner">
          <Box className={styles.headermain}>
            <Link href="/" className={styles.logo_area}>
              <Image src={assest.logo} alt="img" width={130} height={49} />
            </Link>

            <Box
              className={styles.header_btn_area}
              sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
            >
              <FormControl
                sx={{ display: { md: "flex", sm: "none", xs: "none" } }}
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
              <Box
                className={styles.mobile_menu}
                sx={{ display: { md: "none", sm: "flex", xs: "flex" } }}
              >
                <Autocomplete
                  className={`${search
                    ? `${styles.searchBarMobileOpen} ${styles.searchBarMobileClose}`
                    : styles.searchBarMobileClose
                    }`}
                  freeSolo
                  id="free-solo-2-demo"
                  disableClearable
                  options={top100Films.map((option) => option.title)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Search here"
                      InputProps={{
                        ...params.InputProps,
                        type: "search"
                      }}
                    />
                  )}
                />
                <IconButton color="inherit" onClick={() => setSearch(!search)}>
                  <Image src={assest.search} alt="img" width={18} height={18} className="head_menu_icon" />
                </IconButton>

              </Box>
              <Box className={styles.menu_drop}>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className={styles.login_area}
                >
                  <Image
                    src={assest.avatar}
                    alt="img"
                    width={38}
                    height={38}
                    className={styles.avatar}
                  />
                  <span>Welcome John!</span>
                  <Image
                    src={assest.downArrow}
                    alt="img"
                    width={12}
                    height={12}
                    className={styles.blue_arr}
                  />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button"
                  }}
                  className={styles.profile_menu}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </Box>
            </Box>


          </Box>
        </Stack>
      </AppBar>

    </Box>
  );
};

export default WebHeader;
