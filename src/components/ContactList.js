import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);

    //delete handler for deleting a contact
    const deleteConactHandler = (id) => {
        props.getContactId(id);
    };


    const renderContactList = props.contacts.map((contact) => {
        return (
            // passing the props to the contactcard component for displaying it on UI
            // here we are passing the contact , clickHandler for deleting the contact , key for identfying the 
            // contact

            <ContactCard
                contact={contact}
                clickHandler={deleteConactHandler}
                key={contact.id}
            />

        );
    });
    return <div className="fixedHeightContainer">{renderContactList}</div>;
};

export default ContactList;