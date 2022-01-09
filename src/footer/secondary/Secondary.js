import { useEffect, useState } from "react";
// material-ui core components
import { List, ListItem, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//import { getMenu } from "../../services/components/lib/apiLayout";

import styles from "../footerStyle";

const useStyles = makeStyles(styles);

const Secondary = () => {
  const [menu, setMenu] = useState([]);
  const classes = useStyles();

  const dataMenu = [
    {
      id: 1, 
      //path: '#',
      label: "EMAIL: OSACONSULTING.CONTACT@GMAIL.COM"
    },
    {
      id: 2, 
      path: 'https://www.privacypolicies.com/live/84add762-1e82-4bf2-917d-62b1524e45a9', 
      label: "TERMS"
    },
    {
      id: 3, 
      path: 'https://www.privacypolicies.com/live/84add762-1e82-4bf2-917d-62b1524e45a9', 
      label: "PRIVACY POLICY"
    }
  ];

  const showMenu = () => {
    setMenu(dataMenu);
  };

  useEffect(() => {
    showMenu();
  }, []);

  return (
    <List className={classes.list}>
      {menu.map((i) => (
        <ListItem key={i.id} className={classes.inlineBlock}>
          <a
            href={i.path}
            className={classes.block}
            rel="noreferrer"
            target="_blank"
          >
            {i.label}
          </a>
        </ListItem>
      ))}
    </List>
  );
};

export default Secondary;
