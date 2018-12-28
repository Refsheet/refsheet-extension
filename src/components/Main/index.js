import React, {Component} from "react";
import Toolbar from "../Toolbar";
import Routes from "../Routes";
import Lightbox from '../Lightbox';
import getExtension from "../../extension";
import SessionService from '../../services/SessionService'
import {connect} from "react-redux";
import {setSession} from "../../actions";

class Main extends Component {
  componentDidMount() {
    this.setHtmlClass();
    this.setSession();
  }

  setHtmlClass() {
    const ext = getExtension();
    const htmlEl = document.documentElement;
    const className = ext.className();

    htmlEl.classList.add(className);
  }

  setSession() {
    SessionService
      .get()
      .then((session) => {
        console.log({session});
        this.props.setSession(session);
      })
      .catch(console.warn);
  }

  render() {
    return (
      <div className="App">
        <Toolbar />
        <Routes />
        <Lightbox />
      </div>
    );
  }
}

const connected = connect(null, {setSession})(Main);

export default connected;