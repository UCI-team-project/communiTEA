import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
// import Register from './pages/Register'
import Profile from './pages/Profile/profile'
import Signup from './pages/Signup'
import SingleStore from './pages/SingleStore/singleStore'

const httpLink = createHttpLink({
  uri: '/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('auth_token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Routes>
            <Route path='/home' element={<Home />} />
            {/*
             * TODO:
             * - redirect user to login page if they want to access the Dashboard or Profile routes
             * - if user is logged in, grant access to Dashboard route
             * {user ? <Dashboard/> : <Login/>}
             * */}
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/store' element={<SingleStore />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/logout' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
