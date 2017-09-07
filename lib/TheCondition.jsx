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

    const {if: if_, unless, some, all} = props
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
    if (some !== null) {
      const hasAny = some.some((bool) => bool)
      if (!hasAny) {
        return false
      }
    }
    if (all !== null) {
      const hasAll = !all.some((bool) => !bool)
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
  some: PropTypes.arrayOf(PropTypes.bool),
  all: PropTypes.arrayOf(PropTypes.bool)
}

TheCondition.defaultProps = {
  if: null,
  unless: null,
  some: null,
  all: null
}

TheCondition.displayName = 'TheCondition'

export default TheCondition
