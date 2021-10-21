// v-onlyCopy
export default {
  bind(el) {
    const target = el instanceof HTMLInputElement ? el : el.querySelector('input') || el.querySelector('textarea');
    target.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.keyCode === 86) {
        // ctrl + v
      } else if (e.keyCode === 8 || e.keyCode === 46) {
        // delete or backspace
        e.target.value = '';
        e.target.dispatchEvent(new Event('input'));
      } else {
        e.returnValue = false;
        return false;
      }
    });

    // compositionstart compositionupdate compositionend 检测中文输入状态
    // 使用输入法结束时删除输入的内容
    target.addEventListener('compositionend', (event) => {
      event.target.value = event.target.value.substr(0, event.target.value.length - event.data.length);
      event.target.dispatchEvent(new Event('input'));
    });
  },
};
