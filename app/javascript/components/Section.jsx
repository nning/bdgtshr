import React from 'react'

export default class Section extends React.Component {
  constructor(props) {
    super(props)

    let marginBottom = props.marginBottom
    if (props.marginBottom === undefined) {
      marginBottom = true
    }

    let classes = this.props.name
    if (marginBottom) {
      classes += ' margin-bottom'
    }

    this.state = {
      marginBottom: marginBottom,
      classes: classes
    }
  }

  render() {
    return (
      <section className={this.state.classes}>
        {this.props.children}
      </section>
    )
  }
}
