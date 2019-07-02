import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `my-nav` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class MyNav extends PolymerElement {
  static get properties() {
    return {
      opened: {
        type: Boolean,
        value: false
      },
      icon: {
        type: String,
        computed: 'getIcon(opened)'
      }
    }
  }

  static get template() {
    return html`
      <style>
      :host {
        display: block;
        padding: 10px 18px 10px 14px;
        background-color: var(--primary-color, #888);
        color: #fff;
      }
      section {
        display: flex;
      }
      div {
        flex-grow: 1;
        margin-top: 2px;
      }
      .more {
        margin: 10px 0 0;
        font-size: 0.9em;
        color: #ffd;
      }
      mwc-icon{
        cursor: pointer;
      }
      </style>
      <section>
        <div>
          <slot></slot>
        </div>
        <mwc-icon on-click="toggle">[[icon]]</mwc-icon>
      </section>
      <div class="more" hidden="[[!opened]]">
        Esta es una información extra para el navegador...
      </div>
      `;
  }

  getIcon(opened) {
    if(opened) {
      return 'arrow_drop_up';
    }
    return 'arrow_drop_down';
  }
  
  toggle() {
    this.opened = !this.opened;
  }
}

customElements.define('my-nav', MyNav);