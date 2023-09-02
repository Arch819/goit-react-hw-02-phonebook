import { Component } from 'react';
import { FormAddContact } from './FormAddContact';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = async data => {
    const identicalContactName = this.state.contacts.some(
      ({ name }) => data.name === name
    );
    // const identicalContactNumber = this.state.contacts.some(
    //   ({ number }) => data.number === number
    // );
    if (identicalContactName) {
      return Report.warning(
        'WARNING',
        `${data.name} is already in contacts`,
        'ok'
      );
    }
    // if (identicalContactNumber) {
    //   Confirm.show(
    //     'Confirmation',
    //     'This number is already in your contact book.Add anyway?',
    //     'Yes',
    //     'No',
    //     await function okCb() {}
    //   );
    // }
    const contact = {
      ...data,
      id: nanoid(),
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value.trim() });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <section>
        <h2>Phonebook</h2>
        <FormAddContact addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </section>
    );
  }
}
