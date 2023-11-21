import {Component} from 'react'
import Slider from 'react-slick'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Header from '../Header'
import './index.css'

class Home extends Component {
  state = {books: []}

  componentDidMount() {
    this.getbooks()
  }

  getbooks = async () => {
    const url = 'https://apis.ccbp.in/book-hub/top-rated-books'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    this.setState({books: data.books})
    console.log(data.books)
  }

  render() {
    const settings = {
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
    }
    const {books} = this.state

    return (
      <div>
        <Header />
        <h1>Find Your Next Favorite Books?</h1>
        <p>You are in the right place.</p>
        <Link to="/Bookshelves">
          <button>Find Books</button>
        </Link>
        <div>
          <h1>Top Rated Books</h1>
          <div className="slider-container">
            <Slider {...settings}>
              {books.map(each => (
                <div>
                  <img
                    src={each.cover_pic}
                    className="image-books"
                    alt="title"
                  />
                  <h1>{each.title}</h1>
                  <p>{each.author_name}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div>
          <img src="https://res.cloudinary.com/doahpqitj/image/upload/v1700586374/Group_7395_j8ofqu.png" />
          <p>Contact Us</p>
        </div>
      </div>
    )
  }
}

export default Home
