import ContactItem from "../ContactItem";
import propTypes from "prop-types";

const ContactList = ({ contacts, filter }) => {
    const lowCaseFilter = filter.toLowerCase();
    

    return (
        contacts.length === 0 ?
        <p>No contacts so far...</p> :           
        <ul>
            {contacts.map((contact) => {
                // console.log(`${contact.name.toLowerCase()} includes ${lowCaseFilter}: ${contact.name.toLowerCase().includes(lowCaseFilter)}`);
                return (contact.name.toLowerCase().includes(lowCaseFilter) &&
                    <li key={contact.id}>
                        <ContactItem
                            name={contact.name}
                            number={contact.number}                   
                        />
                    </li>);         
            })}
        </ul>        
    );
}

ContactList.propTypes = {
    contacts: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            number:propTypes.string.isRequired,
        })
    ).isRequired,
    filter: propTypes.string,
}

export default ContactList;