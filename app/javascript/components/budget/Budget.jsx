import React from 'react'

import BudgetDisplay from './BudgetDisplay.jsx'
import TransactionList from './TransactionList.jsx'
import AddTransaction from './AddTransaction.jsx'

export default class Budget extends React.Component {
  render() {
    return (
      <section className="Budget">
        <BudgetDisplay budget={this.props.budget}/>
        <TransactionList transactions={this.props.transactions}/>
        <AddTransaction path={this.props.path} csrf={this.props.csrf}/>
      </section>
    );
  }
}
