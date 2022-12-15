export default ({ changedTouches, clientX, clientY, target }) => {
  const x = changedTouches ? changedTouches[0].clientX : clientX;
  const y = changedTouches ? changedTouches[0].clientY : clientY;

  return {
    x: x,
    y: y,
    target: target,
  };
};
