import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import '../interface/my-gravatar';

/**
 * `contacto-card` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ContactoCard extends PolymerElement {
  static get properties() {
    return {
      nombre: String,
      email: String,
      fecha: Number,
    }
  }

  static get template() {
    return html`      
      <style>
        .card {
          display: inline-block;
          background-color: #efe;
          box-shadow: 2px 2px 12px #9cf;
          padding: 15px;
          margin: 5px;
          border-radius: 5px;
        }
        p, h3 {
          margin: 0 0 5px;
        }
        .fecha {
          font-size: 0.8em;
        }
      </style>
      <div class="card">
          <h3>[[nombre]]</h3>
            <my-gravatar email="[[email]]"></my-gravatar>
            <p>[[email]]</p>
      </div>
    `;
  }

}

customElements.define('contacto-card', ContactoCard);