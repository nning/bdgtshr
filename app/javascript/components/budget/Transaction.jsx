import React from 'react'

function getSignClass(positive) {
  let className = 'Transaction--'
  className += positive ? 'positive' : 'negative'
  return className
}

export default class Transaction extends React.Component {
  constructor(props) {
    super(props)

    const value = props.value.toFixed(2)
    const positive = value >= 0

    this.state = {
      value: value,
      positive: positive,
      signClass: getSignClass(positive)
    }
  }

  render() {
    return (
      <li className={'Transaction ' + this.state.signClass}>
        <span className="Transaction--sign">
          {this.state.positive ? 'earning' : 'expense'}
        </span>
        &nbsp;

        <span className="Transaction--value">
          {this.state.value}
        </span>
      </li>
    )
  }
}
