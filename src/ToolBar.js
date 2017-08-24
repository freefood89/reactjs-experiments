import React, { PureComponent, PropTyoes } from 'react';
import {MDCToolbar, MDCToolbarFoundation} from '@material/toolbar/dist/mdc.toolbar';
import '@material/toolbar/dist/mdc.toolbar.css';

export default class ToolBar extends PureComponent {
  static propTypes = {

  }

  static defaultProps = {

  }

  render() {
    return (
      <header className="mdc-toolbar mdc-toolbar--fixed">
      <div className="mdc-toolbar__row">
        <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
          <span className="mdc-toolbar__title catalog-title">Permanent Drawer Below Toolbar</span>
        </section>
      </div>
    </header>
    )
  }
}