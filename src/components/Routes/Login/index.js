import Content from "../../Content";
import React, {Component} from "react";
import {withNamespaces} from "react-i18next";
import {setSearchQuery, setSession} from "../../../actions";
import {connect} from "react-redux";
import Spinner from "../../shared/Spinner";
import SessionService from "../../../services/SessionService";
import {push} from 'connected-react-router';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        password: "",
        remember: false
      },
      error: null,
      loading: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    this.props.setSearchQuery("");
  }

  handleInputChange(e) {
    e.preventDefault();
    const state = Object.assign({}, this.state.user);
    state[e.target.name] = e.target.value;
    this.setState({user: state});
  }

  handleLogin(e) {
    e.preventDefault();
    this.setState({loading: true});
    const variables = this.state.user;

    SessionService
      .login(variables.username, variables.password)
      .then((session) => {
        this.props.setSession(session);
        this.props.push('/account');
      })
      .catch((error) => {
        this.setState({error});
        console.warn({error});
      })
      .finally(() => {
        this.setState({loading: false});
      })
  }

  getErrorMessage(error = this.state.error) {
    if (error.error) {
      return this.getErrorMessage(error.error);
    } else if (error.message) {
      return error.message;
    } else {
      return error;
    }
  }

  render() {
    const {t} = this.props;

    return (
      <Content relax>
        <h1 className='bright'>{t('nav.login', 'Log In')}</h1>

        { !this.state.loading &&
          <form className='constrain-width' onSubmit={this.handleLogin}>
            { this.state.error &&
              <div className='error-well margin-bottom--large'>
                { this.getErrorMessage() }
              </div> }

            <div className='input-container with-icon'>
              <input id='username'
                     name='username'
                     type='text'
                     placeholder={t('session.username', 'Username')}
                     onChange={this.handleInputChange}
                     value={this.state.user.username}
              />

              <label htmlFor='username'>
                <i className='material-icons'>person_outline</i>
              </label>
            </div>

            <div className='input-container with-icon margin-top--small'>
              <input id='password'
                     name='password'
                     type='password'
                     placeholder={t('session.password', 'Password')}
                     onChange={this.handleInputChange}
                     value={this.state.user.password}
              />

              <label htmlFor='username'>
                <i className='material-icons'>lock</i>
              </label>
            </div>

            <button type='submit' className='right margin-top--medium'>
              {t('nav.login', 'Log In')}
            </button>

            <div className='clearfix' />
          </form>
        }

        { this.state.loading && <Spinner /> }
      </Content>
    )
  }
}

const connected = connect(null, {setSearchQuery, setSession, push})(Login);
const translated = withNamespaces('common')(connected);

export default translated;