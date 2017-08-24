import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import '@material/drawer/dist/mdc.drawer.css'

export default class PermanentDrawer extends PureComponent {
  static propTypes = {

  }

  static defaultProps = {

  }
  
  render() {
    return (
      <nav className="mdc-permanent-drawer mdc-typography">
        <div className="mdc-list-group">
          <nav className="mdc-list">
            <a className="mdc-list-item mdc-permanent-drawer--selected" href="#">
              <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">inbox</i>Inbox
            </a>
            <a className="mdc-list-item" href="#">
              <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">star</i>Star
            </a>
            <a className="mdc-list-item" href="#">
              <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">send</i>Sent Mail
            </a>
            <a className="mdc-list-item" href="#">
              <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">drafts</i>Drafts
            </a>
          </nav>

          <hr className="mdc-list-divider"/>

          <nav className="mdc-list">
            <a className="mdc-list-item" href="#">
              <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">email</i>All Mail
            </a>
            <a className="mdc-list-item" href="#">
              <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">delete</i>Trash
            </a>
            <a className="mdc-list-item" href="#">
              <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">report</i>Spam
            </a>
          </nav>
        </div>
      </nav>
    )
  }
}