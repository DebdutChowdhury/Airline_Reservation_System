import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import Logo from '../../Assets/logo.jpg'
import { makeStyles } from '@material-ui/core/styles';
import UserService from '../../Services/UserService'

const service = new UserService();

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}))
const Signup = () => {
    const [registerData, setRegisterData] = useState({
        fullname: '',
        phone: '',
        email: '',
        password: '',

    })
    const [fullnameError, setFullnameError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const [fullnameErrorMsg, setFullnameErrorMsg] = useState('')
    const [phoneErrorMsg, setPhoneErrorMsg] = useState('')
    const [emailErrorMsg, setEmailErrorMsg] = useState('')
    const [passwordErrorMsg, setPasswordErrorMsg] = useState('')

    const classes = useStyles();
    const paperStyle = {
        padding: 20,
        width: 300,
        margin: "0 auto"
    }
    const headerStyle = {
        margin: "0"
    }

    const validationCheck = () => {
        setFullnameError(false)
        setPhoneError(false)
        setEmailError(false)
        setPasswordError(false)

        setFullnameErrorMsg('')
        setPhoneErrorMsg('')
        setEmailErrorMsg('')
        setPasswordErrorMsg('')

        var valid = true;
        if (registerData.fullname.length === 0) {
            setFullnameError(true)
            setFullnameErrorMsg("Enter full name")
            valid = false;
        }
        if (registerData.phone.length === 0) {
            setPhoneError(true)
            setPhoneErrorMsg("Enter full name")
            valid = false;
        }
        let patter = "^[0-9a-zA-Z]+([.\\-_+][0-9a-zA-Z]+)*@[a-z0-9A-Z]+.[a-z]{2,4}([.][a-zA-Z]{2,})*$";
        let pattern = new RegExp(patter);
        if (!pattern.test(registerData.email) === 0) {
            setEmailError(true)
            setEmailErrorMsg("Enter full name")
            valid = false;
        }
        if (registerData.password.length === 0) {
            setPasswordError(true)
            setPasswordErrorMsg("Enter full name")
            valid = false;
        }
        return valid
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRegisterData({ ...registerData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('hello');
        if (validationCheck()) {
            console.log('hello');
            const data = {
                fullname: registerData.fullname,
                phone: registerData.phone,
                email: registerData.email,
                password: registerData.password
            }
            console.log(data);
            // localStorage.setItem('userData', data.email)
            service.userRegistration(data).then((result) => {
                console.log(result);
                window.location.reload()
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align="center">
                    <Avatar src={Logo} className={classes.large} />
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant="caption" gutterBottom>Please fill the form to create account !</Typography>
                </Grid>
                <form >
                    <TextField
                        label="Name"
                        name="fullname"
                        autoComplete='off'
                        value={registerData.fullname}
                        error={fullnameError}
                        helperText={fullnameErrorMsg}
                        fullWidth
                        placeholder="Enter the name"
                        onChange={(e) => handleChange(e)} />
                    <TextField
                        label="Phone Number"
                        name="phone"
                        autoComplete="off"
                        value={registerData.phone}
                        error={phoneError}
                        helperText={phoneErrorMsg}
                        fullWidth
                        placeholder="Enter the phone number"
                        onChange={(e) => handleChange(e)} />
                    <TextField
                        label="Email"
                        name="email" autoComplete='off'
                        value={registerData.email}
                        error={emailError}
                        helperText={emailErrorMsg}
                        fullWidth
                        placeholder="Enter the email"
                        onChange={(e) => handleChange(e)} />
                    <TextField
                        label="Password"
                        name="password"
                        autoComplete="off"
                        value={registerData.password}
                        error={passwordError}
                        helperText={passwordErrorMsg}
                        fullWidth
                        placeholder="Enter the password"
                        type="password"
                        onChange={(e) => handleChange(e)} />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type="submit" variant="contained" color="primary" onClick={(e) => handleSubmit(e)}>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup
