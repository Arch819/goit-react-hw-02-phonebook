import { ContactItem } from 'components/ContactItem';
import { Component } from 'react';

export class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ul>
        {contacts.map(contact => {
          return (
            <ContactItem
              key={contact.id}
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
      </ul>
    );
  }
}
