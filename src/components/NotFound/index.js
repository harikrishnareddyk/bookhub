import {Link} from 'react-router-dom'

const NotFound = () => {
  const x = 1
  return (
    <div>
      <img
        src="https://res.cloudinary.com/doahpqitj/image/upload/v1700248726/Group_7484_bwwruf.png"
        alt="not found"
      />
      <h1>Page Not Found</h1>
      <p>we are sorry, the page you requested could not be found</p>
      <Link to="/">
        <button>Go Back to Home</button>
      </Link>
    </div>
  )
}
export default NotFound
