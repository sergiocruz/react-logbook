import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import moment from 'moment';
import { EntryDetails } from './EntryDetails';

class Entry extends Component {

  static propTypes = {
    entry: PropTypes.object.isRequired,
    isShowing: PropTypes.bool.isRequired,
    styles: PropTypes.object.isRequired,
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
    const { entry, styles } = this.props;
    const when = moment(entry.when);
    const month = when.format('MMM DD');

    return (
      <li style={styles.li}>
        <a href="#" style={styles.a} onClick={this.showEntry}>
          {month} - {entry.what}
        </a>

        <EntryDetails
          {...this.props} />
      </li>
    );
  }

}

const StyledComponent = Radium(Entry);

export {
  StyledComponent as Entry
}
