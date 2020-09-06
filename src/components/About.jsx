// import 'date-fns';
import React, { Fragment, useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import DateFnsUtils from '@date-io/date-fns';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import MomentUtils from '@date-io/moment';
import TextField from '@material-ui/core/TextField';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
var interval = null;
const About = () => {
    const [state, setState] = useState({
        time: new Date().toLocaleTimeString('en-GB'),
        date: new Date(new Date().setHours(0, 0, 0, 0)),
        isShiftStart: false
    });
    const [isStart, setIsStart] = useState(false);
    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        getAccessTokenSilently,
        logout,
    } = useAuth0();
    const initial = () => {
        console.log(state);
        setState({
            ...state,
            time: new Date().toLocaleTimeString('en-GB'),
        });
    }
   
    useEffect(() => {
        // Update the document title using the browser API
        function handleStatusChange(status) {

        }
        
        return () => {
            console.log('i got here',this);
            clearInterval(interval)
            interval = null;
        };
    }, []);


    const startShift =async () => {
        // const date = .toISOString()
        setIsStart(true);
        console.log(state);
        interval = setInterval(() => { initial() }, 1000)

    }

    const handleChange = date => {
        console.log(date._d);
        setState({
            ...state,
            date: date._d
        });
    };

    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>

            <div className="container center">
                <h2>About</h2>
                <button >
                    <i className="material-icons left">cloud</i>
                Ping API
            </button>
                {isStart ?
                    <div>
                        {state.date.toLocaleString()}
                        {state.time}
                        {JSON.stringify(user, null, 4)}
                    </div>
                    : <div>
                        <button onClick={startShift}>

                            <i className="material-icons">play</i>
                        </button>
                    </div>
                }
                <Fragment >
                    <div>

                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="DD/MM/yyyy"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={state.date}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <TextField
                            id="time"
                            label="Alarm clock"
                            type="time"
                            defaultValue={state.time}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                        />
                    </div>
                </Fragment>




            </div>
        </MuiPickersUtilsProvider>
    )
}
export default About;