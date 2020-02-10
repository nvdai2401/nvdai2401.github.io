import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import './Tag.css'

function Tag({ url, text, count, ...restProps }) {
  let countPart
  if (count != null) {
    countPart = `  (${count})`
  }
  return (
    <div className="tag" {...restProps}>
      <Link to={url} style={{ textDecoration: 'none' }}>
        <span className="text">
          {text}
          {countPart}
        </span>
      </Link>
    </div>
  )
}

Tag.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  count: PropTypes.number,
}

Tag.defaultProps = {
  count: null,
}

export default Tag
