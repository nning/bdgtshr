import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <header class="header" role="banner">
        <h1>
          BDGTSHR
          <span class="header--slug">({this.props.slug})</span>
        </h1>
      </header>
    )
  }
}
