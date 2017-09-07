'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import TheStyle from 'the-style'
import { asStyleData } from 'the-component-util'

/** Style for TheCondition */
const TheConditionStyle = ({id, className, options}) => (
  <TheStyle {...{id}}
            className={c('the-condition-style', className)}
            styles={TheConditionStyle.data(options)}
  />
)

TheConditionStyle.displayName = 'TheConditionStyle'
TheConditionStyle.propTypes = {
  /** Style options */
  options: PropTypes.object
}

TheConditionStyle.defaultProps = {
  options: {}
}

TheConditionStyle.data = (options) => {
  const {ThemeValues} = TheStyle
  const {
    dominantColor = ThemeValues.dominantColor
  } = options
  return asStyleData('.the-condition', {
    '&': {}
  })
}

export default TheConditionStyle
