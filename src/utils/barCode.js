import JsBarcode from 'jsbarcode';
import QRCode from 'qrcodejs2';

export function textToBase64Barcode(text, w, h) {
  const img = document.createElement('img');
  img.width = w;
  img.height = h;
  JsBarcode(img, text, {
    displayValue: false, // 是否在条形码下方显示文字
    height: h,
  });
  return img.outerHTML;
}

export function textToBase64Qrcode(text, w, h) {
  const div = document.createElement('div');
  new QRCode(div, {
    text: text, // 需要转换为二维码的内容
    width: w,
    height: w || h,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
  });
  const canvas = div.children[0];
  return canvas && canvas.toDataURL('image/jpeg', 1);
}
