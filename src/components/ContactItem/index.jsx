import { Component } from 'react';

export class ContactItem extends Component {
  render() {
    const {
      contact: { id, name, number },
      onDeleteContact,
    } = this.props;
    return (
      <li>
        {name}: {number}
        <button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    );
  }
}
