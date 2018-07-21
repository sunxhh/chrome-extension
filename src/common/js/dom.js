export function toTop(target, parent) {
  let top = 0;

  while (target && target != parent) {
    top += target.offsetTop;
    target = target.offsetParent;
  }
  return top;
}
