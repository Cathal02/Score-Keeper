import React from 'react'
import Player from './Player'
import PropTypes from 'prop-types'
import FlipMove from 'react-flip-move';

export default class PlayerList extends React.Component {
 renderPlayers = () => {
   if(this.props.players.length == 0) return (
   <div  className="item">
     <p className="item__message">Enter your first player!</p>
   </div>
 )
    return this.props.players.map(function (player) {
       return <p key={player._id}><Player player={player}/></p>
    })
  }

  render(){
    return(
      <div>
        <FlipMove duration={500} easing="ease-out" maintainContainerHeight={true}>
        {this.renderPlayers()}
        </FlipMove>
      </div>
    )
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}
