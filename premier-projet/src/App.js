import React, { Component, Fragment } from 'react'
import './App.css'
import Membre from './components/Membre'
import Button from './components/Button'

const famille = {
  membre1: {
    nom: 'Wab',
    age: 32
  },
  membre2: {
    nom: 'Houssein',
    age: 72
  },
  membre3: {
    nom: 'Galib',
    age: 32
  },
  membre4: {
    nom: 'Bisad',
    age: 2
  }
}

class App extends Component {
  state = {
    famille,
    isShow: false
  }

  handleClick = num => {
    const famille = { ... this.state.famille }
    famille.membre1.age += num
    famille.membre2.age += num
    famille.membre3.age += num
    famille.membre4.age += num
    this.setState({ famille })
  }

  handleChange = (event, id) => {
    const famille = { ... this.state.famille }
    const nom = event.target.value
    console.log(nom)
    famille[id].nom = nom 
    this.setState({ famille })
  }

  cacherNom = id => {
    const famille = { ... this.state.famille }
    const carac = 'X'
    famille[id].nom = carac
    this.setState({ famille })
  }

  handleChangeAge = (event, id) => {
    const famille = { ... this.state.famille }
    const age = event.target.value
    console.log(age)
    famille[id].age = age 
    this.setState({ famille })
  }

  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState({ isShow })
  }
  render() {
    const { titre } = this.props
    const { famille, isShow } = this.state

    let description = null

    if (isShow) {
      description = <strong>Je suis un chat.</strong>
    }

    
  const liste = Object.keys(famille)
  .map(membre => (
    <Membre
      handleChange={event => this.handleChange(event, membre)}
      handleChangeAge={event => this.handleChangeAge(event, membre)}
      key={membre}
      cacherNom={() => this.cacherNom(membre)}
      age={famille[membre].age}
      nom={famille[membre].nom} />
  ))
  console.log(liste)

    return (
      <Fragment>
        <div className='App'>
          <h1>{titre}</h1>
          {/* <input value={famille.membre1.nom} onChange=
          {this.handleChange} type='text' />
          <input value={famille.membre1.age} onChange=
          {this.handleChangeAge} type='text' /> */}
        
          { liste }
          {/* <Membre
            age={famille.membre4.age}
            nom={famille.membre4.nom} >
              { description }
            <button onClick={this.handleShowDescription}>
              { isShow ? 'Montrer' : 'Cacher' }
            </button>
          </Membre> */}
          <Button
            vieillir={() => this.handleClick(2)} />
        </div>
      </Fragment>

    )
  }
}

export default App