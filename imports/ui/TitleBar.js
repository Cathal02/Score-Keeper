import React from 'react'
import PropTypes from 'prop-types'
export default class TitleBar extends React.Component {
  renderSubtitle(){
    if(this.props.subtitle){
      return <h1 className="title-bar__sub-title">{this.props.subtitle}</h1>

    }
  }
  render(){
    return (
    <div className="title-bar">
      <div className="wrapper">
        <h1 className="title-bar__title">{this.props.title}</h1>
        {this.renderSubtitle()}
      </div>

    </div>
    )
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired
}
