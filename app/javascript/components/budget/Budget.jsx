import React from 'react'

import { Spin } from 'antd'

import BudgetDisplay from './BudgetDisplay.jsx'
import TransactionList from './TransactionList.jsx'
import AddTransaction from './AddTransaction.jsx'

export default class Budget extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      budget: props.budget,
      loading: false
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
          this.setState({budget: budget, loading: false})
        }
      }
    )
  }

  setLoading(value) {
    this.setState({loading: value})
  }

  render() {
    return (
      <section className="Budget">
        <Spin spinning={this.state.loading} size="large">
          <BudgetDisplay budget={this.state.budget}/>

          <AddTransaction
            path={this.props.path}
            csrf={this.props.csrf}
            setLoading={this.setLoading.bind(this)}
            />

          <TransactionList
            transactions={this.state.budget.recent_transactions}
            />
        </Spin>
      </section>
    );
  }
}
