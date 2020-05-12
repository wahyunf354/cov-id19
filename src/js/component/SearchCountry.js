class SearchCountry extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
          .search-country {
            padding: 0 3rem;
            display: flex;
            justify-content: center;
          }
          
          .countryCode {
            width: 80%;
            box-sizing: border-box;
            background-color: #222b45;
            border-radius: 16px;
            padding: 16px;
            color: #ffffff;
            margin-bottom: 8px;
            border: none;
            outline: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            appearance: none;
            font-size: 1.7rem;
            cursor: pointer;
          }
          @media screen and (max-width: 560px) {
            .countryCode {
              width: 100%;
            }
            .search-country {
              padding: 0;
              display: flex;
              justify-content: center;
            }
          }
        </style>
        <div class="search-country">
            <select name="countryCode" id="countryCode" class="countryCode">
            </select>
        </div>
        `;
  }
}

customElements.define("search-country", SearchCountry);
