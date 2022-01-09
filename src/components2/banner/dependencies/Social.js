import { useEffect, useState } from "react";
// material-ui core components
import { ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Button from "./Button";

import { getMenu } from "../../../services/components/lib/apiLayout";

import styles from "../headerLinksStyle";

const useStyles = makeStyles(styles);

const SocialMenu = () => {
  const [menu, setMenu] = useState([]);
  const classes = useStyles();

  const dataMenu = [
    {
      id: 1, 
      path: 'https://www.facebook.com/osaconsulting.gabon.italie/', 
      label: "Facebook"
    },
    {
      id: 2, 
      path: 'https://www.linkedin.com/company/osaconsultingafriqueitalie/', 
      label: "Linkedin"
    },
    {
      id: 3, 
      path: 'https://www.instagram.com/osaconsultinggabonitalie/', 
      label: "Instagram"
    }
  ];

  const showMenu = () => {
    setMenu(dataMenu);
  };

  useEffect(() => {
    showMenu();
  }, []);

  const socialIcon = (social) => {
    if (social === "Facebook") {
      return (<FacebookIcon style={{fontSize:"20px !important",marginRight: "4px",position: "relative",}} />);
    }
    if (social === "Linkedin") {
      return (<LinkedInIcon style={{fontSize:"20px !important",marginRight: "4px",position: "relative",}} />);
    }
    if (social === "Instagram") {
      return (<InstagramIcon style={{fontSize:"20px !important",marginRight: "4px",position: "relative",}} />);
    }
    if (social === "Email") {
      return (<MailOutlineIcon style={{fontSize:"20px !important",marginRight: "4px",position: "relative",}} />);
    }
    return "";
  };

  return (
    <>
      {menu.map((i) => (
        <ListItem key={i.id} className={classes.listItem}>
          <Tooltip
            id="instagram-twitter"
            title={i.label}
            placement={"top"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href={i.path}
              target="_blank"
              color="transparent"
              className={classes.navLink}
            >
              {socialIcon(i.label)}
            </Button>
          </Tooltip>
        </ListItem>
      ))}
    </>
  );
};

export default SocialMenu;
