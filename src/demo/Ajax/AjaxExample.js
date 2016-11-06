import React, { Component } from 'react';
import axios from 'axios';
import Highlight from 'react-highlight';
import 'highlight.js/styles/monokai-sublime.css';
import Logbook from '../../Logbook';

let sampleComponent;
let timer;

export class AjaxExample extends Component {

  constructor() {
    super();

    this.state = {
      loading: true,
      entries: [],
    }
  }

  componentWillMount() {
    axios.get('entries-example.json')
      .then((response) => {
        // added a timeout so visitors can see the loading message
        // since ajax response might be too fast otherwise
        timer = setTimeout(() =>
          this.setState({
            loading: false,
            entries: response.data.data
          })
        , 3000)
      })
  }

  componentWillUnmount() {
    clearTimeout(timer);
  }

  render() {
    return (
      <div>
        <h2>Using Ajax</h2>
        <p>Be sure to always send an array to <code>react-logbook</code>. So it is better to only render it when your data is ready per our example below.</p>
        <p>For this sample code we are using a library called <a href="https://github.com/mzabriskie/axios" target="_blank">axios</a>.</p>

        <Highlight>{sampleComponent}</Highlight>

        <h2>Working Example</h2>

        {this.state.loading
           ? <p><em>Loading entries...</em></p>
           : <Logbook entries={this.state.entries} />}


      </div>
    );
  }
}

sampleComponent = `
import React, { Component } from 'react';
import axios from 'axios';
import Logbook from 'react-logbook';

class AjaxExample extends Component {

  constructor() {
    super();

    this.state = {
      loading: true,
      entries: [],
    }
  }

  componentWillMount() {
    axios.get('/entries-example.json')
      .then((response) =>
        this.setState({
          loading: false,
          entries: response.data.data
        })
      );
  }

  render() {
    return (
      <div>
        {this.state.loading
           ? <p><em>Loading entries...</em></p>
           : <Logbook entries={this.state.entries} />}
      </div>
    );
  }
}
`
