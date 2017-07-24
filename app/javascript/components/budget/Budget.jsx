import React from 'react'

import BudgetDisplay from './BudgetDisplay.jsx'
import TransactionList from './TransactionList.jsx'
import AddTransaction from './AddTransaction.jsx'

export default class Budget extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      budget: props.budget
    }
  }

  componentDidMount() {
    this.subscribeCable()
  }

  subscribeCable() {
    if (!cable) {
      return
    }

    cable.subscriptions.create(
      {
        channel: 'BudgetUpdatesChannel',
        slug: this.props.budget.slug
      },
      {
        received: (budget) => {
          this.setState({budget: budget})
        }
      }
    )
  }

  render() {
    return (
      <section className="Budget">
        <BudgetDisplay budget={this.state.budget}/>
        <AddTransaction path={this.props.path} csrf={this.props.csrf}/>
        <TransactionList transactions={this.state.budget.transactions}/>
      </section>
    );
  }
}
