import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default class WorkExperienceEntry extends Component {
  render() {
    const { from, to, company, title } = this.props

    return (
      <div className="work-experience-entry">
        <div className="header">
          <FontAwesomeIcon icon={faChevronRight} />

          <div>
            <h3>{title}</h3>
            <p>{company}</p>
          </div>

          <p>{`${from} - ${to}`}</p>
        </div>

        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nibh mi. Maecenas pretium pellentesque
          velit eget fermentum. Sed lacinia egestas sagittis. Ut congue neque nec tortor sagittis ullamcorper. Proin
          lorem nibh, placerat eu sem et, interdum finibus sem. In consectetur tincidunt tortor, ac bibendum urna
          interdum eget. Sed urna nunc, tincidunt sit amet faucibus ac, rhoncus eu sapien. Mauris quis mi eu est
          ultrices blandit. Nam aliquam purus nec turpis consectetur, pretium sollicitudin erat semper.
        </p>
      </div>
    )
  }
}
