import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'

const bookshelvesList = [
  {
    id: '22526c8e-680e-4419-a041-b05cc239ece4',
    value: 'ALL',
    label: 'All',
  },
  {
    id: '37e09397-fab2-46f4-9b9a-66b2324b2e22',
    value: 'READ',
    label: 'Read',
  },
  {
    id: '2ab42512-3d05-4fba-8191-5122175b154e',
    value: 'CURRENTLY_READING',
    label: 'Currently Reading',
  },
  {
    id: '361d5fd4-9ea1-4e0c-bd47-da2682a5b7c8',
    value: 'WANT_TO_READ',
    label: 'Want to Read',
  },
]

class Bookshelves extends Component {
  state = {bookshelfName: 'read', searchText: 'Luke'}

  componentDidMount() {
    this.getbooks1()
  }

  getbooks1 = async () => {
    const {searchText, bookshelfName} = this.state
    const url = `https://apis.ccbp.in/book-hub/books?shelf=${bookshelfName}&search=${searchText}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response1 = await fetch(url, options)
    const data1 = await response1.json()
    console.log(data1)
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Bookshelves</h1>
        <div>
          <img src="https://res.cloudinary.com/doahpqitj/image/upload/v1700586374/Group_7395_j8ofqu.png" />
          <p>Contact Us</p>
        </div>
      </div>
    )
  }
}

export default Bookshelves
