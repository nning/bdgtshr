import React from 'react'

export default class BudgetDisplay extends React.Component {
  render() {
    return (
      <section className="BudgetDisplay">
        <span className="label">Weekly budget: </span>
        <span className="value">{this.props.budget.balance.toFixed(2)}</span>
      </section>
    );
  }
}
