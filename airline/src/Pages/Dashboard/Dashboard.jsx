import './Dashboard.css'
import { Avatar, Button, Card, CardContent, FormControl, InputLabel, Select, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../Assets/logo.jpg'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FlightData from '../../components/Card/FlightData.json'
import Card1 from '../../components/Card/Card1';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
}))

const Dashboard = () => {
    const classes = useStyles();
    const [ticketData, setTicketData] = useState({
        from: '',
        to: '',
        date: ''
    });
    // const [finalNewData, setFinalNewData] = useState([])
    const [newData, setNewData] = useState([])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log([name], value);
        setTicketData({ ...ticketData, [name]: value })
    }


    const handleSearch = () => {
        let ldata = []
        FlightData.map((data, index) => {
            if (ticketData.from === data.from && ticketData.to === data.to && ticketData.date === data.date) {

                ldata[index] = {
                    "from": data.from,
                    "date": data.date,
                    "time": data.time,
                    "to": data.to
                }
                setNewData(ldata);
            }
            // console.log(newData, ldata);
            // setNewData(newData);
        });
        // setFinalNewData(newData);
        // console.log(newData);
    }
    // console.log(newData);
    // setNewData(newData);
    useEffect(() => {
        handleSearch()
        setNewData(newData);
    }, [newData])
    return (
        <div className="container app__container">
            <div className="row app__row">
                <div className="col-lg-12 ">
                    {/* <div className="home__icon">
                        <Avatar src={Logo} className={classes.large} />
                        <AccountCircleIcon className="home__accicon" />
                    </div> */}
                    {/* <div className="home__search"> */}
                    <form className="home__form">
                        <div className="home__search">
                            <label className="home__searchHeading">
                                From
                                <fieldset>
                                    {
                                        <FormControl className={classes.formControl}>
                                            <InputLabel htmlFor="age-native-simple">From</InputLabel>
                                            <Select
                                                native
                                                value={ticketData.from}
                                                onChange={(e) => handleChange(e)}
                                                inputProps={{
                                                    name: 'from',
                                                    // id: 'age-native-simple',
                                                }}
                                            >
                                                <option aria-label="None" value="" />
                                                <option value="Kolkata">Kolkata</option>
                                                <option value="Mumbai">Mumbai</option>
                                                <option value="Chennai">Chennai</option>
                                                <option value="Delhi">Delhi</option>
                                            </Select>
                                        </FormControl>

                                    }
                                </fieldset>
                            </label>
                            <label className="home__searchHeading">
                                To
                                <fieldset>
                                    {
                                        <FormControl className={classes.formControl}>
                                            <InputLabel htmlFor="age-native-simple">To</InputLabel>
                                            <Select
                                                native
                                                value={ticketData.to}
                                                onChange={(e) => handleChange(e)}
                                                inputProps={{
                                                    name: 'to',
                                                    // id: 'age-native-simple',
                                                }}
                                            >
                                                <option aria-label="None" value="" />
                                                <option value="Kolkata">Kolkata</option>
                                                <option value="Mumbai">Mumbai</option>
                                                <option value="Chennai">Chennai</option>
                                                <option value="Delhi">Delhi</option>
                                            </Select>
                                        </FormControl>

                                    }
                                </fieldset>
                            </label>
                            <label className="home__searchHeading">
                                Departure
                                <form className={classes.container} noValidate>
                                    <TextField
                                        id="date"
                                        label="Departure"
                                        type="date"
                                        name='date'
                                        defaultValue="2022-01-01"
                                        value={ticketData.date}
                                        onChange={(e) => handleChange(e)}
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </form>
                            </label>
                        </div>
                        <div className="search__btn">
                            <Button variant="contained" color="primary" className='home__btn' onClick={handleSearch}>Search</Button>
                        </div>
                    </form>
                    {/* </div> */}
                </div>

            </div>
            <div className="row">

                {
                    newData.length > 0 ? newData.map((data) => {
                        return (
                            <div className="col-md-6 mt-2" >
                                <Card1 data={data} />
                            </div>
                        )

                    }) : (
                        <div className="col-md-12 mt-2">
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="h2" >
                                        No Flight Found
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    )
                }

            </div>

        </div >
    )
}

export default Dashboard
