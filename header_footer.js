class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <style>
        nav {
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          background-color: rgba(134, 134, 134, 0.2);
          overflow: hidden;
        }

        a {
          font-size: 17px;
          padding: 15px;
          margin: 0px;
          color: black;
          text-decoration: none;
          transition: 0.6s ease;
        }

        a:hover {
          color: #606060;
          transition: 0.6s ease;
        }
      </style>
      <header>
        <nav>
          <a href="index.html">HOME</a>
          <a href="about_me.html" >ABOUT</a>
          <a href="contact.html">CONTACT</a>
          <a href="portfolio.html" >PORTFOLIO</a>
        </nav>
      </header>
    `;
  }
}
customElements.define('header-component', Header);

class HeaderIndex extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <style>
        nav {
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          background-color: rgba(134, 134, 134, 0.4);
          overflow: hidden;
        }

        a {
          font-size: 17px;
          padding: 15px;
\          color: #FFFFF0;
          text-decoration: none;
          transition: 0.6s ease;
        }

        a:hover {
          color: #E6E3CA;
          transition: 0.6s ease;
        }
      </style>
      <header>
        <nav>
          <a href="index.html">HOME</a>
          <a href="about_me.html" >ABOUT</a>
          <a href="contact.html">CONTACT</a>
          <a href="portfolio.html" >PORTFOLIO</a>
        </nav>
      </header>
    `;
  }
}
customElements.define('header-component-index', HeaderIndex);

class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <footer>
      <div
        style="
          position: absolute;
          margin-left: 50%;
          transform: translate(-50%, 0%);
          border-bottom: 10px;
        "
      >
        <button onclick="topFunction()" id="top-btn" title="Go to top">
          Back to top
        </button>
      </div>
      <br />
      <div class="wrapper">
        <!-- Trigger/Open The Modal -->
        <button onclick="modalFunction()" class="modal-button" href="#daten_modal">
          Datenschutzerklärung
        </button>
        <!-- Trigger/Open The Modal -->
        <button onclick="modalFunction()" class="modal-button" href="#imp_modal">Impressum</button>
      </div>

      <!-- The Modal -->
      <div id="daten_modal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <div class="modal-header">
            <span onclick="closeFunction()" class="close" data-target="#daten_modal">&times;</span>
            <h2>Datenschutzerklärung</h2>
          </div>
          <div class="modal-body">
            <p>Some text in the Modal Body</p>
            <p>Some other text...</p>
          </div>
          <div class="modal-footer">
            <h3>Modal Footer</h3>
          </div>
          <p>Some text in the datenschutz..</p>
        </div>
      </div>
      <!-- The Modal -->
      <div id="imp_modal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <div class="modal-header">
            <span onclick="closeFunction()" class="close" data-target="#imp_modal">&times;</span>
            <h2>Impressum</h2>
          </div>
          <div class="modal-body">
            <p>Some text in the Modal Body</p>
            <p>Some other text...</p>
          </div>
          <div class="modal-footer">
            <h3>Modal Footer</h3>
          </div>
          <p>Some text in the Impressum..</p>
        </div>
      </div>
      <p
        style="
          position: absolute;
          margin-left: 50%;
          transform: translate(-50%, 0%);
          padding-top: 70px;
          font-family: Work Sans, sans-serif;
        "
      >
        Johann Mai Fotografie | 74223 Flein | johannmai@icloud.com
      </p>
    </footer>
    `;
  }
}
customElements.define('footer-component', Footer);