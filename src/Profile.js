import React from 'react'

function Profile(props) {
    console.log(props);
    return (
        <form onSubmit ={props.addProfile}>
            <label>
                First Name:
                <input
                    name="firstName"
                    placeholder="First name"
                    
                /> <br />
                Last Name:
                <input
                    name="lastName"
                    placeholder="Last name"
                    
                /> <br />
                Role:
                <input
                    name="role"
                    placeholder = "role"
                    
                /> <br />
                Id:                       <input
                    name="id"
                    placeholder="id"
                     
                /> <br />
                <button type="submit">
                    Submit
                </button>
            </label>
        </form>
    )
}


export default Profile
