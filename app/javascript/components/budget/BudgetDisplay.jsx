import React from 'react'

export default class BudgetDisplay extends React.Component {
  render() {
    return (
      <section className="BudgetDisplay">
        <div className="monthly">
          <span className="label">Monthly: </span>
          <span className="value">{this.props.budget.monthly.toFixed(2)} </span>
          <span className="income">
            (of {this.props.budget.monthly_income.toFixed(2)})
          </span>
        </div>

        <div className="weekly">
          <span className="label">Weekly: </span>
          <span className="value">{this.props.budget.weekly.toFixed(2)} </span>
          <span className="income">
            (of {this.props.budget.weekly_income.toFixed(2)})
          </span>
        </div>

        <div className="daily">
          <span className="label">Daily: </span>
          <span className="value">{this.props.budget.daily.toFixed(2)} </span>
          <span className="income">
            (of {this.props.budget.daily_income.toFixed(2)})
          </span>
        </div>
      </section>
    );
  }
}
