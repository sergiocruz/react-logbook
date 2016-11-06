import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { Entry } from './Entry';
import { getStyles } from './styles';
import { formatEntries } from './lib/entry-formatter';

class EntryList extends Component {

  static propTypes = {
    entries: PropTypes.array.isRequired,
    styleOptions: PropTypes.object.isRequired,
    styles: PropTypes.object.isRequired,

    // Allow multiple entries to be collapsed at the same time?
    showOneEntryOnly: PropTypes.bool.isRequired,

    // Sort entries in ascending or descending order?
    sortAsc: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    showOneEntryOnly: true,
    sortAsc: false,
    styles: {},
    styleOptions: {
      styleSideBarColor: '#ed1c40',
    },
  }

  constructor(props) {
    super(props);

    this.state = {
      showedEntries: new Set()
    };

    this.onShowEntry = this.onShowEntry.bind(this);
  }

  componentWillMount() {
    this.updateStyles(this.props);
  }

  componentWillReceiveProps(props) {
    this.updateStyles(props);
  }

  updateStyles({ styles, styleOptions }) {
    this.setState({
      styles: {
        ...getStyles(styleOptions),
        ...styles,
      }
    });
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
    const { showedEntries, styles } = this.state;
    const formattedEntries = formatEntries(entries, sortAsc);

    return (
      <ul style={styles.ul}>
        {formattedEntries.map(({year, entries = []}, yearIndex) =>
          <li key={year} style={[
            styles.li,
            styles.li[yearIndex > 0 ? 'spaced' : '']
          ]}>
            <span style={styles.year}>{year}</span>
            <ul style={styles.entriesList}>
              {entries.map((entry, entryIndex) =>
                <Entry
                  key={entryIndex}
                  entry={entry}
                  styles={styles}
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

const StyledComponent = Radium(EntryList);

export {
  StyledComponent as EntryList
}
