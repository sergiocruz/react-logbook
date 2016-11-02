import React, { Component, PropTypes } from 'react';
import { EntryDetails } from './EntryDetails';
import moment from 'moment';

export class Entry extends Component {

  static propTypes = {
    entry: PropTypes.object.isRequired,
    isShowing: PropTypes.bool.isRequired,
  }

  constructor() {
    super();
    this.showEntry = this.showEntry.bind(this);
  }

  showEntry(evt) {
    evt.preventDefault();
    this.props.onShowEntry(this.props.entry);
  }

  render() {
    const { entry } = this.props;
    const when = moment(entry.when);
    const month = when.format('MMM DD');

    return (
      <li className="logbook__entry">
        <a href="#" onClick={this.showEntry}>{month} - {entry.what}</a>
        <EntryDetails
          {...this.props} />
      </li>
    );
  }

}
