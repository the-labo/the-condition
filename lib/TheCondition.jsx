'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import TheConditionStyle from './TheConditionStyle'
import { htmlAttributesFor, eventHandlersFor } from 'the-component-util'

/**
 * Conditional renderer for the-components
 */
class TheCondition extends React.Component {
  render () {
    const s = this
    const {props} = s
    const {
      children
    } = props
    if (!s.shouldRender()) {
      return null
    }
    return React.Children.only(children)
  }

  shouldRender () {
    const s = this
    const {props} = s

    const {if: if_, unless, someOf, allOf} = props
    if (if_ !== null) {
      if (!if_) {
        return false
      }
    }
    if (unless !== null) {
      if (unless) {
        return false
      }
    }
    if (someOf !== null) {
      const hasAny = someOf.some((bool) => bool)
      if (!hasAny) {
        return false
      }
    }
    if (allOf !== null) {
      const hasAll = !allOf.some((bool) => !bool)
      if (!hasAll) {
        return false
      }
    }
    return true
  }
}

TheCondition.Style = TheConditionStyle

TheCondition.propTypes = {
  if: PropTypes.bool,
  unless: PropTypes.bool,
  someOf: PropTypes.arrayOf(PropTypes.bool),
  allOf: PropTypes.arrayOf(PropTypes.bool)
}

TheCondition.defaultProps = {
  if: null,
  unless: null,
  someOf: null,
  allOf: null
}

TheCondition.displayName = 'TheCondition'

export default TheCondition
