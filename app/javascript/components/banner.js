import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Create Lists", "Make bookmarks"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
