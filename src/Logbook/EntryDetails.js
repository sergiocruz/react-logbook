import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class EntryDetails extends Component {

  static propTypes = {
    entry: PropTypes.object.isRequired,
    isShowing: PropTypes.bool.isRequired,
  }

  render() {
    const { entry, isShowing, styles } = this.props;

    return (
      <div style={[
        styles.entryDetails,
        styles.entryDetails[isShowing ? 'isShowing' : ''],
      ]}>
        <h3>{entry.what}</h3>
        <p>
          {!entry.link ? null :
            <a href={entry.link}
              style={styles.btn}
              target="_blank">
              Learn More
            </a>
          }

          {!entry.video ? null :
            <a href={entry.video}
              style={[styles.btn, styles.btn.spaced]}
              target="_blank">
              Watch Video
            </a>
          }
        </p>
      </div>
    );
  }

}

const StyledComponent = Radium(EntryDetails);

export {
  StyledComponent as EntryDetails
}
