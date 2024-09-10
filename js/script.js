let containerElement = document.querySelector('#container');

function contextMenuFunc(event) {
    event.preventDefault();
    containerElement.style.display = 'block';
    containerElement.style.left = event.pageX + 'px';
    containerElement.style.top = event.pageY + 'px';
};

function contextCloseEsc(event) {
    if(event.key == 'Escape') {
        containerElement.style.display = 'none';
    }
};

function contextCloseClick() {
    containerElement.style.display = 'none';
}

document.body.addEventListener('contextmenu', contextMenuFunc);
document.body.addEventListener('keydown', contextCloseEsc);
document.body.addEventListener('click', contextCloseClick);