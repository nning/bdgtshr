import React from 'react'

export default class Transaction extends React.Component {
  render() {
    return <li className="Transaction">{this.props.value.toFixed(2)}</li>
  }
}
