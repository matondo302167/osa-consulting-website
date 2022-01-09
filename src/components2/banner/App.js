import classNames from "classnames";
// react components for routing our app without refresh
import Head from "next/head";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "./Header";
import HeaderLinks from "./HeaderLink";
import HeaderHome from "../components/Header";

const App =(props) =>{
    let brand = "";
    const { ...rest } = props;
    return(
        <div>
            <Header
                brand="Osa Consulting"
                rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                height: 400,
                color: "white"
                }}
                {...rest}
            />
            <HeaderHome/>
        </div>

    );
}
export default App;