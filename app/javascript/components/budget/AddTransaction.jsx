import React from 'react'
import ReactDOM from 'react-dom'

export default class AddTransaction extends React.Component {
  constructor(props) {
    super(props)

    this.action = this.props.path + '/transactions'
  }

  componentDidMount() {
    const form = ReactDOM.findDOMNode(this).querySelector('form')
    form.addEventListener('ajax:success', () => {
      const input = form.querySelector('input[name="value"]')
      input.value = ''
    })
  }

  render() {
    return (
      <section className="AddTransaction">
        <form action={this.action} method="POST" data-remote="true">
          <input type="hidden" name={this.props.csrf.param} value={this.props.csrf.token}/>
          <div className="columns is-mobile is-gapless">
            <div className="column">
              <input className="input" name="value"/>
            </div>

            <div className="column is-narrow">
              <button className="button" name="subtract" type="submit">-</button>
            </div>

            <div className="column is-narrow">
              <button className="button" type="submit">+</button>
            </div>
          </div>
        </form>
      </section>
    );
  }
}
