import { Component } from 'react';

export class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onChange} />
      </label>
    );
  }
}
