import React from 'react'
import profilePic from '../assets/profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1),
        }}
      >
        <img
          src={profilePic}
          alt={`Michael`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          Blog cá nhân của{' '}
          <a href="https://mobile.twitter.com/nvdai2401">Michael</a> 🤴.
          <br />
          Học hỏi, trải nghiệm và chia sẻ 😄.
        </p>
      </div>
    )
  }
}

export default Bio
