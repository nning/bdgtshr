import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <header className="Header" role="banner">
        <h1>
          BDGTSHR
          <span className="Header--slug"> ({this.props.slug})</span>
        </h1>
      </header>
    )
  }
}
