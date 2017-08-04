import React from 'react'
import ReactDOM from 'react-dom'

import { Button, Input } from 'antd'

export default class AddTransaction extends React.Component {
  constructor(props) {
    super(props)

    this.action = this.props.path + '/transactions'
  }

  componentDidMount() {
    const form = ReactDOM.findDOMNode(this).querySelector('form')

    form.addEventListener('ajax:send', () => {
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
          <input type="hidden"
            name={this.props.csrf.param}
            value={this.props.csrf.token}
            />

          <Input
            name="value"
            size="large"
            prefix="€"
            />

          <Button
            name="subtract"
            htmlType="submit"
            type="primary"
            size="large">
            -
          </Button>

          <Button
            htmlType="submit"
            size="large">
            +
          </Button>
        </form>
      </section>
    );
  }
}
