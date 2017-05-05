import React from "react"
import { Link } from "react-router"
import { prefixLink } from "gatsby-helpers"
import Helmet from "react-helmet"
import { config } from "config"
import { rhythm } from "../utils/typography"

module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.any,
    }
  },
  render() {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />
        <div
          style={{
            background: `rebeccapurple`,
            marginBottom: rhythm(1),
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            }}
          >
            <h1 style={{ margin: 0 }}>
              <a
                href="https://github.com/frontend-belarus/js-firms"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Frontend Belarus
              </a>
            </h1>
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  },
})
