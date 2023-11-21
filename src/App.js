import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/login'
import Home from './components/Home'
import Bookshelves from './components/Bookshelves'
import NotFound from './components/NotFound'

// use the below bookshelvesList for rendering read status of book items in Bookshelves Route

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/Bookshelves" component={Bookshelves} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </>
)
export default App
