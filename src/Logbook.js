import React, { Component, PropTypes } from 'react';
import Radium, { Style } from 'radium';
import { EntryList } from './EntryList';

class Logbook extends Component {

  static propTypes = {
    entries: PropTypes.array.isRequired,
    styles: PropTypes.object.isRequired,
    styleOptions: PropTypes.object.isRequired,
  }

  static defaultProps = {
    styles: {},
    styleOptions: {},
  }

  render() {
    return (
      <div className="logbook">
        <Style
          scopeSelector=".logbook *"
          rules={{ boxSizing: 'border-box', }} />

        <EntryList {...this.props} />
      </div>
    );
  }

}

const StyledComponent = Radium(Logbook);

export {
  StyledComponent as Logbook
}
