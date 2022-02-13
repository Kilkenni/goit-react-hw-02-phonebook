import React from "react";

export default class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  }

  addContact = (event) => {
    event.preventDefault();
    this.setState((currentState) => {
      const newContact = { name: currentState.name };
      return { contacts: [...currentState.contacts, newContact] };
    });
  }

  onInputChange = (event) => {  
    const { name, value } = event.currentTarget;
    // const inputValue = event.currentTarget.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 20,
          // textTransform: 'uppercase',
          color: '#010101',

          paddingLeft: 50,
          paddingRight: 50,
        }}
      >
        <h1>Phonebook</h1>
        <form action="submit" onSubmit={this.addContact}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onInputChange}
          />

          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
        {this.state.contacts.length === 0 ?
          <p>No contacts so far...</p> :
          <ul>
            {this.state.contacts.map((contact) => {
              return <li key={contact.name}>
                <p>Name: { contact.name}</p>
              </li>;
            })}
          </ul>}
      </div>
    );
  }

  
};
