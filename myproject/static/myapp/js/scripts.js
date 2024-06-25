document.getElementById('playPauseButton').addEventListener('click', function() {
    const button = this;
    if (button.innerHTML === '▶') {
        button.innerHTML = '❚❚';
    } else {
        button.innerHTML = '▶';
    }
});

function changeColors(value) {
    const [bgColor, textColor] = value.split(',');
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
    const buttons = document.querySelectorAll('.control-button, .color-options select');
    buttons.forEach(function(button) {
        button.style.backgroundColor = textColor;
        button.style.color = bgColor;
    });
}
