import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";

// import { useAppDispatch } from "@/hooks/useAppDispatch";
// import { useAppSelector } from "@/hooks/redux/useAppSelector";
import assest from "@/json/assest";
// import { logout } from "@/reduxtoolkit/slices/userSlice";
import styles from "@/styles/layout/header.module.scss";
import ClearIcon from "@mui/icons-material/Clear";
import Autocomplete from "@mui/material/Autocomplete";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
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
const navItems = [
  {
    name: "Product +",
    route: "/"
  },
  {
    name: "Use Cases +",
    route: "/"
  },
  {
    name: "How It Works",
    route: "/"
  },
  {
    name: "Integrations",
    route: "/"
  },
  {
    name: "Pricing",
    route: "/"
  },
  {
    name: "Blog",
    route: "/blog"
  }
];
const top100Films = [{ title: "abc" }, { title: "xyz" }];
export default function Header(props: Props) {
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
  const drawer = (
    <Box sx={{ textAlign: "center" }} className={styles.sidebar}>
      <Box className={styles.sidebar_logo}>
        <Link href="/">
          <Image src={assest.logo} alt="img" width={130} height={49} />
        </Link>
        <IconButton onClick={handleDrawerToggle}>
          <ClearIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        <ListItem>
          <Link href="/login/">
            <Image src={assest.userlogin} alt="img" width={20} height={20} />
            <span>Login</span>
          </Link>
        </ListItem>

        {navItems.map((item) => (
          <Link href={item?.route} key={item.name}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <CustomButton type="button">
        <Typography variant="button">Join the Waitlist</Typography>
      </CustomButton>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        className={styles.headerContainer}
      >
        <Container fixed>
          <Box className={styles.headermain}>
            <Link href="/" className={styles.logo_area}>
              <Image src={assest.logo} alt="img" width={130} height={49} />
            </Link>
            <Box
              className={styles.menu_item_sec}
              sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
            >
              <Box className={styles.menu_item}>
                <Box>
                  {navItems.map((item) => (
                    <Link href={item?.route} key={item.name}>
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </Box>
              </Box>
              <Box className={styles.header_btn_area}>
                <CustomButton type="button">
                  <Typography variant="button">Join the Waitlist</Typography>
                </CustomButton>
                <Link href="/login" className={styles.login_area}>
                  <Image
                    src={assest.userlogin}
                    alt="img"
                    width={20}
                    height={20}
                  />
                  <span>Login</span>
                </Link>
              </Box>
            </Box>

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
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <Image src={assest.menuIcon} alt="img" width={18} height={18} className="head_menu_icon" />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
          className={styles.header_drawer}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
