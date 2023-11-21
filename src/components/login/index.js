import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {username: '', password: ''}

  Username = event => {
    this.setState({username: event.target.value})
  }

  password = event => {
    this.setState({password: event.target.value})
  }

  Submitresponse = async event => {
    event.preventDefault()
    const url = ' https://apis.ccbp.in/login'
    const {username, password} = this.state
    const details = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(details),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const {history} = this.props
    console.log(response)
    if (response.ok === true) {
      Cookies.set('jwt_token', data.jwt_token)
      history.replace('/')
      console.log(data)
    }
  }

  render() {
    return (
      <Link to="/login">
        <div className="login">
          <img
            src="https://res.cloudinary.com/doahpqitj/image/upload/v1700242494/Rectangle_1467_muyral.png"
            className="image"
            alt="website login"
          />
          <div className="inputEl">
            <div className="input-section">
              <form>
                <img
                  className="image2"
                  src="https://res.cloudinary.com/doahpqitj/image/upload/v1700243104/Group_7731_purnjz.png"
                  alt="login website logo"
                />
                <div>
                  <label htmlFor="username">Username*</label>
                  <input id="username" type="text" onChange={this.Username} />
                </div>
                <div>
                  <label htmlFor="password">Password*</label>
                  <input
                    id="password"
                    type="password"
                    onChange={this.password}
                  />
                </div>
                <button type="submit" onClick={this.Submitresponse}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default Login
