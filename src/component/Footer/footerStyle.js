import {container, primaryColor, warningColor, socialButtons, white} from "../../resources/jss/material_kit_for_desisgnes";
import image9 from '../../resources/images/image9.jpg';

const footerStyle = {
    block: {
        color: "inherit",
        padding: "0.9375rem",
        fontWeight: "500",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "3px",
        textDecoration: "none",
        position: "relative",
        display: "block",
        fontFamily: "Helvetica"
    },
    left: {
        float: "left!important",
        display: "block"
    },
    right: {
        padding: "15px 0",
        margin: "0",
        float: "right!important",
        color: white

    },
    footer: {
        padding: "0.9375rem 0",
        textAlign: "center",
        textDecorationColor: "#fff",
        textDecoration: "Helvetica",
        display: "block",
        zIndex: "2",
        position: "relative",
        backgroundColor: "#1c2566",
    },
    a: {
        color: white,
        textDecoration: "none",
        backgroundColor: "transparent"
    },
    footerWhiteFont: {
        "&,&:hover,&:focus": {
            color: "#fff"
        }
    },
    container,
    list: {
        marginBottom: "0",
        padding: "0",
        marginTop: "0"
    },
    inlineBlock: {
        display: "inline-block",
        padding: "0px",
        width: "auto"
    },
    icon: {
        width: "18px",
        height: "18px",
        position: "relative",
        top: "3px"
    },
    linksVertical:{
        color: "#e3f2fd",
        fontSize: "15px",
        textAlign: "center"
    },
    footerHead:{
        color: white,
        fontSize: "20px",
        textAlign: "center",
    },
    followIcon: {
        width: "18px",
        height: "28px",
        marginLeft: "10px"
    }
};
export default footerStyle;
