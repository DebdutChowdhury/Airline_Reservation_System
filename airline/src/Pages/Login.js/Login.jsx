import React from 'react'
import './Login.css'
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@material-ui/core'
import Logo from '../../Assets/logo.jpg'
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useHistory, useLocation, withRouter } from 'react-router-dom';
import UserService from '../../Services/UserService';


const service = new UserService();

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}))

const Login = ({ handleChange }, props) => {

    const history = useHistory();
    const location = useLocation();

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })

    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const [emailErrorMsg, setEmailErrorMsg] = useState('')
    const [passwordErrorMsg, setPasswordErrorMsg] = useState('')

    const validationCheck = () => {
        setEmailError(false)
        setPasswordError(false)
        setEmailErrorMsg('')
        setPasswordErrorMsg('')

        var valid = true;

        let patter = "^[0-9a-zA-Z]+([.\\-_+][0-9a-zA-Z]+)*@[a-z0-9A-Z]+.[a-z]{2,4}([.][a-zA-Z]{2,})*$";
        let pattern = new RegExp(patter);
        if (!pattern.test(loginData.email) === 0) {
            setEmailError(true)
            setEmailErrorMsg("Enter email proper format")
            valid = false;
        }
        if (loginData.password.length === 0) {
            setPasswordError(true)
            setPasswordErrorMsg("Enter password properly")
            valid = false;
        }
        return valid
    }

    const handleChangee = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLoginData({ ...loginData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('hello');
        if (validationCheck()) {
            console.log('hello');
            const data = {
                email: loginData.email,
                password: loginData.password
            }
            console.log(data);
            // let userData = localStorage.getItem('userData')
            // console.log(userData);
            // if (userData === data.email) {
            //     history.push("/dashboard")
            // }
            service.userLogin(data).then((result) => {
                localStorage.setItem('Token', result.data.token)
                history.push("/dashboard")
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    const classes = useStyles();

    const paperStyle = {
        padding: 20,
        // height: '38vh',
        width: 300,
        margin: '0 auto',
    }
    const avatarStyle = {
        backgroundColor: '#1bbd7e'
    }

    const btnStyle = {
        margin: '8px 0'
    }
    const headerStyle = {
        margin: "0"
    }

    return (

        <Grid>
            <Paper style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle} src={Logo} className={classes.large} />
                    <h2 style={headerStyle}>Sign In</h2>
                </Grid>
                <TextField
                    label="Email"
                    placeholder="Enter Email"
                    name="email"
                    value={loginData.email}
                    onChange={(e) => handleChangee(e)}
                    error={emailError}
                    helperText={emailErrorMsg}
                    fullWidth
                    required />
                <TextField
                    label="Password"
                    placeholder="Enter Password"
                    name="password"
                    value={loginData.password}
                    onChange={(e) => handleChangee(e)}
                    error={passwordError}
                    helperText={passwordErrorMsg}
                    type="password"
                    fullWidth
                    required />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type="submit" color="primary" variant="contained" style={btnStyle} onClick={(e) => handleSubmit(e)} fullWidth>Sign in</Button>
                <Typography> Do you have an account ?
                    <Link href='#' onClick={() => handleChange("event", 1)}>Sign Up</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default withRouter(Login)
