import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="dcowen"
      meta={[
        { name: 'description', content: 'homepage' },
        { name: 'keywords', content: 'dcowen homepage' },
      ]}
    />
      {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
