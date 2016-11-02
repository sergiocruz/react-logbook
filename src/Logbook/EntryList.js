import React, { Component, PropTypes } from 'react';
import { Entry } from './Entry';
import { formatEntries } from './lib/entry-formatter';

export class EntryList extends Component {

  static propTypes = {
    entries: PropTypes.array.isRequired,

    // Allow multiple entries to be collapsed at the same time?
    showOneEntryOnly: PropTypes.bool.isRequired,

    // Sort entries in ascending or descending order?
    sortAsc: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    showOneEntryOnly: true,
    sortAsc: false,
  }

  constructor() {
    super();

    this.state = {
      showedEntries: new Set()
    };

    this.onShowEntry = this.onShowEntry.bind(this);
  }

  onShowEntry(entry) {
    const { showedEntries } = this.state;
    const { showOneEntryOnly } = this.props;

    if (showedEntries.has(entry)) {
      showedEntries.delete(entry)
    } else {
      showOneEntryOnly && showedEntries.clear();
      showedEntries.add(entry);
    }

    this.setState({ showedEntries });
  }

  render() {
    const { entries, sortAsc } = this.props;
    const { showedEntries } = this.state;
    const formattedEntries = formatEntries(entries, sortAsc);

    return (
      <ul className="logbook__entrieslist">
        {formattedEntries.map(({year, entries = []}) =>
          <li key={year}>
            <span className="logbook__entrieslist__year">
              {year}
            </span>
            <ul className="logbook__entrieslist__entries">
              {entries.map((entry, index) =>
                <Entry
                  key={index}
                  entry={entry}
                  isShowing={showedEntries.has(entry)}
                  onShowEntry={this.onShowEntry} />
              )}
            </ul>
          </li>
        )}
      </ul>
    );
  }

}
