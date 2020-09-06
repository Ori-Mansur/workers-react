import React, { useState } from 'react';
import Loading from "../components/Loading";
import SnackBar from './SnackBar.jsx'
import config from "../auth_config.json";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
const { apiOrigin = "http://localhost:5600" } = config;

const Contact = (props) => {
    console.log(props);
    const [state, setState] = useState({
        showResult: false,
        apiMessage: "",
        error: null,
    });
    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        getAccessTokenSilently,
        logout,
    } = useAuth0();


    const logoutWithRedirect = () =>
        logout({
            returnTo: window.location.origin,
        });
    const callApi = async () => {
        try {
            const token = await getAccessTokenSilently();
            const response = await fetch(`${apiOrigin}/api/external`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const responseData = await response.json();
            setState({
                ...state,
                showResult: true,
                apiMessage: responseData,
            });
        } catch (error) {
            setState({
                ...state,
                error: error.error,
            });
        }
    };
    return (
        <div className="container center">
            <h2>Contact</h2>
            <div>
                <img className="circle responsive-img" src={user.picture} alt="" />
                <button className="waves-effect waves-light btn" onClick={callApi}>
                    <i className="material-icons left">cloud</i>
                Ping API

        </button>
        <SnackBar/>
                <div >
                    {state.showResult && (
                        <div className="left-align white-text black lighten-2" data-testid="api-result">
                            <h6 className="muted">Result</h6>

                            <span>{JSON.stringify(state.apiMessage, null, 4)}</span>
                        </div>
                    )}
                </div>
            </div>
            <pre className="left-align white-text black lighten-2">

                {JSON.stringify(user, null, 4)}
            </pre>
        </div>
    )
}
export default withAuthenticationRequired(Contact, {
    onRedirecting: () => <Loading />,
});