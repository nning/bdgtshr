import React from 'react'
// import ReactDOM from 'react-dom'

export default class AddTransaction extends React.Component {
  constructor(props) {
    super(props)

    this.action = this.props.path + '/transactions'
  }

  // componentDidMount() {
  //   const form = ReactDOM.findDOMNode(this).querySelector('form')
  //   form.addEventListener('ajax:success', (e, data, status, xhr) => {
  //     console.log(e, data, status, xhr)
  //   })
  // }

  render() {
    return (
      <section className="AddTransaction">
        <form action={this.action} method="POST" data-remote="true">
          <input type="hidden" name={this.props.csrf.param} value={this.props.csrf.token}/>
          <input name="value"/>
          <button name="subtract" type="submit">-</button>
          <button name="add" type="submit">+</button>
        </form>
      </section>
    );
  }
}
