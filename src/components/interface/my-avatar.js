import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
/**
 * `my-avatar` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class MyAvatar extends PolymerElement {
  static get properties() {
    return {
      src: {
        type: String,
        observer: '_asignImage'
      },
      alt: {
        type: String,
        value: ''
      },
      size: {
        type: Number,
        observer: '_asignSize'
      }
    }
  }

  static get template() {
    return html`
    <style>
      :host {
        display: inline-block;
      }
      div {
        display: inline-block;        
        width: var(--my-avatar-size, 50px);
        height: var(--my-avatar-size, 50px);
        border-radius: 25px;
        background-size: var(--my-avatar-size, 50px);
        background-repeat: no-repeat;
        background-position: center;
        background-color: #fff;
      }
    </style>
    
    <div
      id="img"
      role="img"
      aria-label$="[[alt]]"
    ></div>
    `;
  }

  _asignImage(src) {
    this.$.img.style.backgroundImage = `url(${src})`;
  }

  _asignSize(size) {
    if(size) {
      let style = this.$.img.style;
      style.backgroundSize = `${size}px`;
      style.width = `${size}px`;
      style.height = `${size}px`;
      style.borderRadius = `${size}px`;        
    } 
  }
}

customElements.define('my-avatar', MyAvatar);