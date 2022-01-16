import './SignUpContainer.css'
import { Box, Paper, Tab, Tabs, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import Login from '../Login.js/Login'
import Signup from '../Signup.js/Signup';

const SignUpContainer = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const paperStyle = {
        width: 340,
        margin: "20px auto",
    }
    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
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
    return (
        <div className="container__body">
            <Paper elevation={20} style={paperStyle}>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab label="Login" />
                    <Tab label="SignUp" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Login />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Signup />
                </TabPanel>
            </Paper>
        </div>
    )
}

export default SignUpContainer
