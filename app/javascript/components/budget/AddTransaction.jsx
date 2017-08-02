import React from 'react'
import ReactDOM from 'react-dom'

import { Button } from 'antd'

export default class AddTransaction extends React.Component {
  constructor(props) {
    super(props)

    this.action = this.props.path + '/transactions'
  }

  componentDidMount() {
    const form = ReactDOM.findDOMNode(this).querySelector('form')

    form.addEventListener('ajax:send', () => {
      console.log('ajax:send')
      this.props.setLoading(true)
    })

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
          <input name="value"/>
          <Button name="subtract" htmlType="submit">-</Button>
          <Button htmlType="submit">+</Button>
        </form>
      </section>
    );
  }
}
