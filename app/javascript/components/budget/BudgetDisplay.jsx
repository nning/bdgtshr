import React from 'react'

import BudgetDisplayInterval from './BudgetDisplayInterval.jsx'

export default class BudgetDisplay extends React.Component {
  render() {
    return (
      <section className="BudgetDisplay">
        <BudgetDisplayInterval
          interval="Monthly"
          budget={this.props.budget.monthly}
          income={this.props.budget.monthly_income}
          />

        <BudgetDisplayInterval
          interval="Weekly"
          budget={this.props.budget.weekly}
          income={this.props.budget.weekly_income}
          />

        <BudgetDisplayInterval
          interval="Daily"
          budget={this.props.budget.daily}
          income={this.props.budget.daily_income}
          />
      </section>
    );
  }
}
