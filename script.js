document.querySelectorAll('.paper').forEach(paper => {
  paper.addEventListener('mousedown', onMouseDown);

  function onMouseDown(event) {
    const paper = event.currentTarget;
    paper.style.cursor = 'grabbing';
    const shiftX = event.clientX - paper.getBoundingClientRect().left;
    const shiftY = event.clientY - paper.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
      paper.style.left = pageX - shiftX + 'px';
      paper.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    paper.addEventListener('mouseup', function () {
      document.removeEventListener('mousemove', onMouseMove);
      paper.style.cursor = 'grab';
    }, { once: true });
  }

  paper.ondragstart = function () {
    return false;
  };
});
