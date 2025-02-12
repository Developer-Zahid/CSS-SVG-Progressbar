class circleProgressbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg class="circle-progressbar"><circle cx="70" cy="70" r="70" class="circle-progressbar__path"></circle><circle cx="70" cy="70" r="70" class="circle-progressbar__percent"></circle></svg>`;
  }  
}
class lineProgressbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<svg class="line-progressbar"><line x1="10" y1="15" x2="390" y2="15" class="line-progressbar__path"></line><line x1="10" y1="15" x2="390" y2="15" class="line-progressbar__percent"></line></svg>`;
    }
}
customElements.define('circle-progressbar', circleProgressbar);
customElements.define('line-progressbar', lineProgressbar);