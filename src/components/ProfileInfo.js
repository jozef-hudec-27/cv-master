import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import EditableField from './EditableField'

export default class ProfileInfo extends Component {
  render() {
    return (
      <section id="profile-info">
        <h2>
          <FontAwesomeIcon icon={faPen} />
          Profile info
        </h2>

        <EditableField
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque nec nibh at ultrices. Nunc ut risus
          sit amet libero tincidunt accumsan nec eu est. Donec in velit in lacus fringilla pulvinar. Ut suscipit finibus
          imperdiet. Sed at condimentum sapien, nec condimentum sapien. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. In sed risus maximus, suscipit est sed, aliquam urna. Praesent sed
          risus leo. Morbi risus nisl, sollicitudin placerat orci vel, gravida dignissim lacus."
          label="Profile info"
          isTextarea
        />
      </section>
    )
  }
}
