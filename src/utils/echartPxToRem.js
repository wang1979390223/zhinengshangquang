export function fontChart(res) {
  let docEl = document.documentElement,
    clientWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
  if (!clientWidth) return;
  // 此处的3840 为设计稿的宽度，记得修改！
  let fontSize = clientWidth / 1920;
  return res * fontSize;
}
