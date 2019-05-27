let HIDDEN_STYLE = [
  'position: absolute !important;',
  'top: 0 !important;',
  'left: 0 !important;',
  'visibility: hidden !important;',
  'z-index: -999999 !important;',
  'overflow: hidden !important;',
  'box-sizing: border-box !important;',
  'border-style: solid !important;',
  'border-color: #fff !important;',
];

let hiddenTextarea;

export default function (ref, minRow, maxRow) {
  if (!ref) return;
  const {
    lineHeight: rLineHeight,
    padding: rPadding,
    borderWidth: rBorder,
    width: rWidth,
    fontSize: rFontSize
  } = window.getComputedStyle(ref);
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    HIDDEN_STYLE.push(`width: ${rWidth} !important;`);
    HIDDEN_STYLE.push(`line-height: ${rLineHeight} !important;`);
    HIDDEN_STYLE.push(`font-size: ${rFontSize} !important;`);
    HIDDEN_STYLE.push(`padding: ${rPadding} !important;`);
    HIDDEN_STYLE.push(`border-width: ${rBorder} !important;`);
    hiddenTextarea.setAttribute('style', HIDDEN_STYLE.join(''));
    document.body.appendChild(hiddenTextarea);
  }
  hiddenTextarea.value = ref.value;
  const {
    lineHeight: hLineHeight,
    padding: hPadding
  } = window.getComputedStyle(hiddenTextarea);
  const hHeight = hiddenTextarea.scrollHeight;
  let rows = parseInt((hHeight - parseFloat(hPadding) * 2) / parseFloat(hLineHeight));
  minRow && (rows = Math.max(rows, minRow));
  maxRow && (rows = Math.min(rows, maxRow));
  let rHeight = rows * parseFloat(rLineHeight) + parseFloat(rPadding) * 2 + parseFloat(rBorder) * 2;
  return rHeight;
}