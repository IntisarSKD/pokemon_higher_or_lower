import { useState } from "react";

const LogInForm = ({loggedInPlayer}) => {

    const [newPlayer, setNewPlayer] = useState(
        (loggedInPlayer ? { 
            name: "",
            password: loggedInPlayer.password
        } : 
        {
            name : "",
            email: "",
            password: "password"
        }))

    return ( 
        <>
        <h3>LogInForm</h3>
        </>
     );
}
 
export default LogInForm;