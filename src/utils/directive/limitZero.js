export default {
  bind(el) {
    const target = el instanceof HTMLInputElement ? el : el.querySelector('input');
    target.addEventListener('keyup', (e) => {
      if (/^0+[\d]/.test(e.target.value)) {
        e.target.value = e.target.value.replace(/^0/, '');
        e.target.dispatchEvent(new Event('input'));
      }
    });
  },
};
