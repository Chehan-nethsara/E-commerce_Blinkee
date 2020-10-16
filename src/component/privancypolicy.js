import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Navbar from "./navbar";
import Footer from "./Footer/footer";
import privi2 from "../resources/images/priv2.jpeg"

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };

}
function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <p>{str}</p>);
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 10,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 400,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        color: "white",
        backgroundColor: "darkblue"

    },
    tavheder: {
        textAlign: "left",
        color: "green",
    },
    img: {
        margin: "revert",
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        width: 1700,
        height: 250,
    },
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Navbar/>
            <img className={classes.img} alt="complex" src={privi2} />
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Table of Contents" {...a11yProps(0)} />
                <Tab label="Definitions" {...a11yProps(1)} />
                <Tab label="Data Protection Principles" {...a11yProps(2)} />
                <Tab label="Data Subject’s rights" {...a11yProps(3)} />
                <Tab label="Data we gather" {...a11yProps(4)} />
            </Tabs>
            <TabPanel value={value} index={0} >
                <h6 className={classes.tavheder} >
                <NewlineText  text={'a. Definitions used in this Policy\n' +
                'b. Data protection principles we follow\n' +
                'c. What rights do you have regarding your Personal Data\n' +
                'd. What Personal Data we gather about you\n' +
                'e. How we use your Personal Data\n' +
                'f. Who else has access to your Personal Data\n' +
                'g. How we secure your data\n' +
                'h. Information about cookies\n' +
                'i. Contact information'} />
                </h6>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <h6 className={classes.tavheder} >
                    <NewlineText  text={'Personal Data – any information relating to an identified or identifiable natural person.\n' +
                    'Processing – any operation or set of operations which is performed on Personal Data or on sets of Personal Data.\n' +
                    'Data subject – a natural person whose Personal Data is being Processed.\n' +
                    'Child – a natural person under 16 years of age.\n' +
                    'We/us (either capitalized or not)'} />
                </h6>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <h6 className={classes.tavheder} >
                    <NewlineText  text={'Processing is lawful, fair, transparent. Our Processing activities have lawful grounds. We always consider your rights before Processing Personal Data. We will provide you information regarding Processing upon request.\n' +
                    'Processing is limited to the purpose. Our Processing activities fit the purpose for which Personal Data was gathered.\n' +
                    'Processing is done with minimal data. We only gather and Process the minimal amount of Personal Data required for any purpose.\n' +
                    'Processing is limited with a time period. We will not store your personal data for longer than needed.\n' +
                    'We will do our best to ensure the accuracy of data.\n' +
                    'We will do our best to ensure the integrity and confidentiality of data.'} />
                </h6>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <h6 className={classes.tavheder} >
                <NewlineText  text={'Right to information – meaning you have to right to know whether your Personal Data is being processed; what data is gathered, from where it is obtained and why and by whom it is processed.\n' +
                'Right to access – meaning you have the right to access the data collected from/about you. This includes your right to request and obtain a copy of your Personal Data gathered.\n' +
                'Right to rectification – meaning you have the right to request rectification or erasure of your Personal Data that is inaccurate or incomplete.\n' +
                'Right to erasure – meaning in certain circumstances you can request for your Personal Data to be erased from our records.\n' +
                'Right to restrict processing – meaning where certain conditions apply, you have the right to restrict the Processing of your Personal Data.\n' +
                'Right to object to processing – meaning in certain cases you have the right to object to Processing of your Personal Data, for example in the case of direct marketing.\n' +
                'Right to object to automated Processing – meaning you have the right to object to automated Processing, including profiling; and not to be subject to a decision based solely on automated Processing. This right you can exercise whenever there is an outcome of the profiling that produces legal effects concerning or significantly affecting you.\n' +
                'Right to data portability – you have the right to obtain your Personal Data in a machine-readable format or if it is feasible, as a direct transfer from one Processor to another.\n' +
                'Right to lodge a complaint – in the event that we refuse your request under the Rights of Access, we will provide you with a reason as to why. If you are not satisfied with the way your request has been handled please contact us.\n' +
                'Right for the help of supervisory authority – meaning you have the right for the help of a supervisory authority and the right for other legal remedies such as claiming damages.\n' +
                'Right to withdraw consent – you have the right withdraw any given consent for Processing of your Personal Data.\n' +
                'Please use our Privacy Tools page to control or review your data'} />
                </h6>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <h6 className={classes.tavheder} >
                    <NewlineText  text={' Information you have provided us with\n' +
                    'This might be your e-mail address, name, billing address, home address etc \n– mainly information that is necessary for delivering you a product/service or to enhance your customer experience with us. \nWe save the information you provide us with in order for you to comment or perform other activities on the website. \nhis information includes, for example, your name and e-mail address.'} />
                </h6>
            </TabPanel>
        </div>
            <Footer/>
        </div>
    );
}