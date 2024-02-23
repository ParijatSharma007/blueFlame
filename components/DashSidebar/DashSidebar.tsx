import assest from "@/json/assest";
import styles from "@/styles/components/dashsidebar.module.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface MuisidebarProps {
  onclick: () => any;
  collapse: boolean;
  collapseMenu: boolean;
  collapseButton: () => any;
}
const DashSidebar = (props: MuisidebarProps) => {
  const Router = useRouter();
  const { onclick, collapse, collapseMenu, collapseButton } = props;
  const sidelist: any[] = [
    {
      icon: assest.activityIcon,
      text: "Activities",
      link: "/activities",
      iconWidth: 15,
      iconHeight: 29,
    },
    {
      icon: assest.chatIcon,
      text: "Chat",
      link: "/chat",
      iconWidth: 19,
      iconHeight: 19,
    },
    {
      icon: assest.calenderIcon,
      text: "Calendar",
      link: "/calendar",
      iconWidth: 21,
      iconHeight: 21,
    },
    {
      icon: assest.playIcon,
      text: "Playground",
      link: "/playground",
      iconWidth: 24,
      iconHeight: 18,
    },
    {
      icon: assest.metadata,
      text: "Inferred Metadata",
      link: "/inferred",
      iconWidth: 24,
      iconHeight: 20,
    },
    {
      icon: assest.settingIcon,
      text: "Configuration",
      link: "/configuration",
      iconWidth: 24,
      iconHeight: 26,
    },
    {
      icon: assest.archive,
      text: "Archive",
      link: "/archive",

      iconWidth: 20,
      iconHeight: 21,
    },
    {
      icon: assest.profileIcon,
      text: "Profile",
      link: "/my-profile",

      iconWidth: 14,
      iconHeight: 21,
    }
  ];

  return (
    <Box className={styles.sidebar}>
      <Box
        className={`dark_side_inner ${collapse
          ? `${styles.sidebarinner_collpase} ${styles.sidebarinner}`
          : styles.sidebarinner
          }`}
      >
        <Button
          className={`${collapse
            ? `${styles.colopen_collapse} ${styles.colopen} `
            : styles.colopen
            }`}
          onClick={onclick}
        >
          <Image src={assest.collapseOpen} alt="img" width={18} height={20} />
        </Button>
        <Button className="cross_secn" onClick={collapseButton}><Image src={assest.closeIcon} width={20} height={20} alt="" /></Button>
        <List>
          {sidelist.map((item, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <ListItem key={index}>
                <Link href={item.link} className={`${Router.pathname === item.link ? `${styles.active_dash_link}` : null}`}>
                  <Box className={styles.box_img_wrap}>
                    <Image src={item.icon} alt="img" width={item.iconWidth} height={item.iconHeight} />
                  </Box>
                  <span className={`${collapse ? styles.text_name : null}`}>
                    {item.text}
                  </span>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default DashSidebar;
