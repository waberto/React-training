import React, { Component } from 'react'
// CSS
import './App.css'

import Header from './components/Header'
import recettes from './recettes'
import Admin from './components/Admin'
import Card from './components/Card'

// Firebase
import base from './base'

class App extends Component {

  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  componentDidMount () {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: 'recettes'
    })
  }

  // componentDidUpdate () {
  //   const update = !this.state.update
  //   if (this.state.update === true) {
  //     this.setState({ update })
  //   }
  // }

  componentWillUnmount () {
    base.removeBinding(this.ref)
  }

  ajouterRecette = recette => {
    const recettes = { ...this.state.recettes }
    recettes[`recette-${Date.now()}`] = recette
    this.setState({ recettes })
  }

  majRecette = (key, newRecette) => {
    const recettes = { ...this.state.recettes }
    recettes[key] = newRecette  
    this.setState({ recettes })
  }

  supprimerRecette = Key => {
    const recettes = {...this.state.recettes }
    recettes[Key] = null
    this.setState({ recettes })
  }
  
  chargerExemple = () => this.setState({ recettes })

  render () {
    console.log('Render')
    const cards = Object.keys(this.state.recettes)
      .map(key => <Card key={key} details={this.state.recettes[key]} />)

    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo} />
        <div className='cards'>
         { cards }
        </div>
        <Admin
          pseudo={this.state.pseudo}
          recettes={this.state.recettes}
          ajouterRecette={this.ajouterRecette}
          majRecette={this.majRecette}
          supprimerRecette={this.supprimerRecette}
          chargerExemple={this.chargerExemple} />
      </div>
    )
  }
}

export default App
