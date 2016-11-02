import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export class EntryDetails extends Component {

  static propTypes = {
    entry: PropTypes.object.isRequired,
    isShowing: PropTypes.bool.isRequired,
  }

  render() {
    const { entry, isShowing } = this.props;

    const entryDetailsClass = classNames({
      'logbook__entry__details': true,
      'logbook__entry__details--isShowing': isShowing,
    });

    return (
      <div className={entryDetailsClass}>
        <h3>{entry.what}</h3>
        <p>
          {!entry.link ? null :
            <a href={entry.link}
              className="logbook__entry__btn"
              target="_blank">
              Learn More
            </a>
          }

          {!entry.video ? null :
            <a href={entry.video}
              className="logbook__entry__btn"
              target="_blank">
              Watch Video
            </a>
          }
        </p>
      </div>
    );
  }

}
