import React from 'react'

import Transaction from './Transaction.jsx'

export default class TransactionList extends React.Component {
  render() {
    const transactions = this.props.transactions.map((transaction) => {
      return <Transaction {...transaction}/>
    })

    return <ul className="TransactionList">{transactions}</ul>
  }
}
