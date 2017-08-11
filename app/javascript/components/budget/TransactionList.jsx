import React from 'react'

import Section from '../Section.jsx'

import Transaction from './Transaction.jsx'

export default class TransactionList extends React.Component {
  render() {
    const transactions = this.props.transactions.map((transaction) => {
      return <Transaction {...transaction}/>
    })

    return (
      <Section name="TransactionList" title="Transactions">
        <ul>
          {transactions}
        </ul>
      </Section>
    )
  }
}
