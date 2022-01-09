import { useEffect, useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
// material-ui core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import CustomDropdown from "./CustomDropdown";
// @material-ui/icons
import { Apps } from "@material-ui/icons";
import styles from "../headerLinksStyle";

const useStyles = makeStyles(styles);

const dataMenu = [
  {
    id: 1, 
    path: 'villes', 
    nome: 'Villes'
  },
  {
    id: 2, 
    path: 'services', 
    nome: 'services'
  },
  {
    id: 3, 
    path: 'prices', 
    nome: 'Prix'
  },

  {
    id: 4, 
    path: 'contact', 
    nome: 'Contact'
  },
  
];
const Main = () => {
  const [menu, setMenu] = useState([]);
  const classes = useStyles();

  const showMenu = () => {
      setMenu(dataMenu);
  };

  const handleClick = () => {
    const view = document.getElementById("__next");
    view.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    showMenu();
  }, []);

  return (
    <CustomDropdown
      noLiPadding
      navDropdown
      buttonText="Menu"
      buttonProps={{
        className: classes.navLink,
        color: "transparent"
      }}
      buttonIcon={Apps}
      dropdownList={menu.map((i) => (
        <ScrollLink key={i.id} to={i.path} smooth={true} >
          <a className={classes.dropdownLink}>{i.nome}</a>
        </ScrollLink>
      ))}
    />
  );
};

export default Main;

// ((
//   <Link href="">
//     <a className={classes.dropdownLink}>Book Now</a>
//   </Link>
// ),
// menu.map((i) => (
//   <Link key={i.id} href={i.path}>
//     <a className={classes.dropdownLink}>{i.label}</a>
//   </Link>
// )))
