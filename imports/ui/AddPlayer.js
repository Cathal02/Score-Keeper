import React from 'react'
import {Players} from '../api/players'

export default class AddPlayer extends React.Component {

  handleSubmit = (e) => {
    let playerName = e.target.playername.value
    if (playerName) {
      e.target.playername.value = ''
      Players.insert({
        name: playerName,
        score: 0
      })
    }
    e.preventDefault()
  }

  render(){
    return (
      <div className="item">
      <form className="form" onSubmit={this.handleSubmit.bind(this)}>
        <input className="form__input" placeholder="Enter your name" name="playername"></input>
        <button className="button" type="submit">Add Player</button>
      </form>
    </div>
    )
  }
}
