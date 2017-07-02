import React from 'react'

export default class AddTransaction extends React.Component {
  constructor(props) {
    super(props)

    this.action = this.props.path + '/transactions'
  }

  render() {
    return (
      <section className="AddTransaction">
        <form action={this.action} method="POST">
          <input type="hidden" name={this.props.csrf.param} value={this.props.csrf.token}/>
          <input name="value"/>
          <button name="subtract" type="submit">-</button>
          <button name="add" type="submit">+</button>
        </form>
      </section>
    );
  }
}
