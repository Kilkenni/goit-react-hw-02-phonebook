import { nanoid } from "nanoid";
import React from "react";

const INIT_STATE = {
    name: "",
    number: "", //phone
}

export default class ContactForm extends React.Component {
    

    state = { ...INIT_STATE };

    onInputChange = (event) => {
        const { name, value } = event.currentTarget;
        // const inputValue = event.currentTarget.value;
        this.setState({ [name]: value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({ id: nanoid(), ...this.state });
        this.setState(INIT_STATE);
    };

    render() {
        return (
            <form action="submit" onSubmit={this.onFormSubmit}>
                <label>Name
                    <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.onInputChange}
                    value={this.state.name}
                    />
                </label>
                
                <label>Phone number
                    <input
                    type="telContactItem"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.onInputChange}
                    value={this.state.number}
                    />
                </label>
                
                <button type="submit">Add contact</button>
            </form>
        );
    };
}