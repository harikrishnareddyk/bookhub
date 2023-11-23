import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const logout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="books">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/doahpqitj/image/upload/v1700243104/Group_7731_purnjz.png"
          alt="website logo"
        />
      </Link>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Bookshelves">
          <li>Bookshelves</li>
        </Link>
      </ul>
      <button onClick={logout}>Logout</button>
    </nav>
  )
}

export default withRouter(Header)
