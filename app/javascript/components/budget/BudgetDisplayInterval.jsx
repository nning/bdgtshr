import React from 'react'

import Section from '../Section.jsx'

export default class BudgetDisplayInterval extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      negative: props.budget < 0
    }
  }

  render() {
    return (
      <Section name="BudgetDisplayInterval" marginBottom={false}>
        <span className="label">
          {this.props.interval}:
        </span>
        &nbsp;

        <span className={'value ' + (this.state.negative ? 'negative' : '')}>
          {this.props.budget.toFixed(2)}
        </span>
        &nbsp;

        <span className="income">
          (of {this.props.income.toFixed(2)})
        </span>
      </Section>
    );
  }
}
