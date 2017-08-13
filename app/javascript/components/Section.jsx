import React from 'react'
import PropTypes from 'prop-types';

function getClasses(props, gap) {
  let classes = props.name + ' Section'

  if (props.classes) {
    classes += ' ' + props.classes
  }

  if (gap) {
    classes += ' Section--gaps'
  }

  return classes;
}

function getGap(props) {
  let gap = props.gap

  if (props.gap === undefined) {
    gap = true
  }

  return gap
}

export default class Section extends React.Component {
  constructor(props) {
    super(props)

    let gap = getGap(this.props)
    let classes = getClasses(this.props, gap)

    this.state = {
      gap: gap,
      classes: classes
    }
  }

  render() {
    let title = null
    if (this.props.title) {
      title = <h2 className="Section--title">{this.props.title}</h2>
    }

    return (
      <section className={this.state.classes}>
        {title}
        {this.props.children}
      </section>
    )
  }
}

Section.propTypes = {
  classes: PropTypes.string,
  gap: PropTypes.bool,
  name: PropTypes.string.isRequired,
  title: PropTypes.string
};
