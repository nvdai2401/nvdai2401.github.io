import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'
import { formatReadingTime } from '../utils/helpers'
import { formatDate } from '../utils/i18n'

import TagList from './TagList'

function PostAbbrev({ slug, title, date, timeToRead, spoiler, tags, base }) {
  let spoilerPart
  if (spoiler) {
    spoilerPart = (
      <p
        dangerouslySetInnerHTML={{
          __html: spoiler,
        }}
      />
    )
  }

  let tagsPart
  if (tags) {
    tagsPart = <TagList tags={tags} baseUrl={`${base}tags`} />
  }

  return (
    <article>
      <header>
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: rhythm(1),
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link style={{ boxShadow: 'none' }} to={slug} rel="bookmark">
            {title}
          </Link>
        </h3>

        <small>{`${formatDate(date)} • ${formatReadingTime(
          timeToRead
        )}`}</small>
        {tagsPart}
        {spoilerPart}
      </header>
    </article>
  )
}

PostAbbrev.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  spoiler: PropTypes.string,
  tags: PropTypes.array,
  base: PropTypes.string,
}

PostAbbrev.defaultProps = {
  title: null,
  spoiler: null,
  tags: null,
  base: '',
}

export default PostAbbrev
