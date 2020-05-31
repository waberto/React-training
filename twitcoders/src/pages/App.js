import React from 'react'
import '../styles/App.css'
import Header from './../components/Header';
import Message from './../components/Message';
import CreateMessage from './../components/CreateMessage';


import firebase, { FirebaseContext } from './../firebase';
import useAuth from './../hooks/useAuth';

const App = () => {
  const user = useAuth()
  console.log(user);
  return (
    <FirebaseContext.Provider value={{ user, firebase }}>
      <div className='app'>
        <Header />
        <CreateMessage />
        <Message />
        <Message />
        <Message />
      </div>
    </FirebaseContext.Provider>
  )
}

export default App
