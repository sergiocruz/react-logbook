import React, { Component, PropTypes } from 'react';
import { EntryList } from './EntryList';
import './Logbook.css';

export class Logbook extends Component {

  static propTypes = {
    entries: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div className="logbook">
        <EntryList entries={this.props.entries} />
      </div>
    );
  }

}
