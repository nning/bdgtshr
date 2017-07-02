import React from 'react'

export default class Budget extends React.Component {
  render() {
    return (
      <section className="budget">
        <span className="label">Weekly budget: </span>
        <span className="value">{this.props.budget.balance}</span>
      </section>
    );
  }
}
