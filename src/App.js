import React from 'react'
import Home from './pages/Home'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>

  )
}

export default App