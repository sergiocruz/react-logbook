import React, { Component } from 'react';
import Highlight from 'react-highlight';
import 'highlight.js/styles/monokai-sublime.css';
import Logbook from '../../Logbook';
import { data } from '../../../public/entries-example.json';

let sampleComponent = '';

export class InlineExample extends Component {
  render() {
    return (
      <div>
        <h2>Using local data</h2>
        <p>To use <code>react-logbook</code> with local data, simply import your data an pass it as a prop to your component:</p>

        <Highlight className="javascript">{sampleComponent}</Highlight>

        <h2>Working Example:</h2>

        <Logbook entries={data} />
      </div>
    );
  }
}

sampleComponent = `
import React, { Component } from 'react';
import Lobook from 'react-logbook';

let data = [{
  "id": "0b2d78c4",
  "when": "2015-02-10T18:30:00.927Z",
  "what": "Spoke at University JavaScript Meetup",
  "link": "http://www.meetup.com/University-Tech/events/225262781/",
  "video": "https://youtu.be/NmgPd2G3tRw?t=49m40s"
}, {
  "id": "b3df5aad",
  "when": "2015-04-05T01:13:08.927Z",
  "what": "Attended ng-conf 2015",
  "link": "https://www.ng-conf.org",
  "video": ""
}];

class InlineDemo extends Component {
  render() {
    return (
      <div>
        <Logbook entries={data} />
      </div>
    );
  }
}

`;
