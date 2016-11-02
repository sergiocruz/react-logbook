import React, { Component } from 'react';
import Firebase from 'firebase';
import Highlight from 'react-highlight';
import 'highlight.js/styles/monokai-sublime.css';
import { Logbook } from '../../Logbook';

let sampleComponent;
let timer;

export class FirebaseExample extends Component {

  constructor() {
    super();

    this.state = {
      loading: true,
      entries: [],
    }
  }

  componentWillMount() {

    // Firebase DB reference
    this.db = Firebase.database().ref('entries');

    // Firebase query
    this.db.startAt().on('value', (data) => {
      timer = setTimeout(() =>
        this.setState({
          loading: false,
          entries: data.val()
        })
      , 3000)
    });
  }

  componentWillUnmount() {
    clearTimeout(timer);
    this.db.off();
  }

  render() {
    return (
      <div>

        <h2>Using Firebase</h2>
        <p>Be sure to always send an array to <code>react-logbook</code>. So it is better to only render it when your data is ready per our example below.</p>
        <p>For this sample code, we used the <a href="https://firebase.google.com/docs/web/setup" target="_blank">Firebase Web SDK</a> to query for our records. For a more complete solution, we would highly recommend you check out the <a href="https://github.com/tylermcginnis/re-base" target="_blank">re-base</a> project.</p>

        <Highlight>{sampleComponent}</Highlight>

        <h2>Working Example</h2>

        {this.state.loading
           ? <p><em>Loading entries...</em></p>
           : <Logbook entries={this.state.entries} />}
      </div>
    );
  }
}

// Init Firebase
Firebase.initializeApp({
  apiKey: "AIzaSyBDQn0OyRCS-MUFXKWcUzNUOtQjrWIdXgY",
  authDomain: "react-logbook-demo.firebaseapp.com",
  databaseURL: "https://react-logbook-demo.firebaseio.com",
  storageBucket: "react-logbook-demo.appspot.com",
  messagingSenderId: "674509671027"
});

sampleComponent = `
import React, { Component } from 'react';
import Firebase from 'firebase';
import Logbook from 'react-logbook';

Firebase.initializeApp({ /* your config */ });

class FirebaseExample extends Component {

  constructor() {
    super();

    this.state = {
      loading: true,
      entries: [],
    }
  }

  componentWillMount() {

    // Firebase DB reference
    this.db = Firebase.database().ref('entries');

    // Firebase query
    this.db.startAt().on('value', (data) => {
      timer = setTimeout(() =>
        this.setState({
          loading: false,
          entries: data.val()
        })
      , 3000)
    });
  }

  componentWillUnmount() {
    clearTimeout(timer);
    this.db.off();
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

`;
