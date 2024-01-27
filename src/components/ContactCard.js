import React from "react";
import user from "../images/user.jpg";

//this is a reusable contact component to display the contacts on UI

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="containerInsideFixed">
            <div className="item" style={{ display: "flex", gap: "10px" }}>
                <img className="ui avatar image" src={user} alt="user" />
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>

                {/* trash icon */}

            </div>
            <i
                className="trash alternate outline icon"
                style={{ color: "red", marginTop: "-32px" }}
                onClick={() => props.clickHandler(id)}
            ></i>
        </div>
    );
};

export default ContactCard;