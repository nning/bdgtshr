import React from 'react'

import BudgetDisplay from './BudgetDisplay.jsx'
import LastTransactions from './LastTransactions.jsx'
import AddTransaction from './AddTransaction.jsx'

export default class Budget extends React.Component {
  render() {
    return (
      <section className="Budget">
        <BudgetDisplay budget={this.props.budget}/>
        <LastTransactions/>
        <AddTransaction path={this.props.path} csrf={this.props.csrf}/>
      </section>
    );
  }
}
