import React from 'react'

import Transaction from './Transaction.jsx'

export default class TransactionList extends React.Component {
  render() {
    const transactions = this.props.transactions.map((transaction) => {
      return <Transaction {...transaction}/>
    })

    return (
      <section className="TransactionList">
        <ul>
          {transactions}
        </ul>
      </section>
    )
  }
}
