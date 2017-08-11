import React from 'react'

import Header from './Header.jsx'

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Header {...this.props}/>

        <main role="main">
          {this.props.children}
        </main>
      </div>
    )
  }
}
