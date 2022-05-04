
function set_clicked(object) {
    object.classList.add('clicked');
    object.onclick = function() { unset_clicked(object); };
}

function unset_clicked(object) {
    object.classList.remove('clicked');
    object.onclick = function() { set_clicked(object); };
}

const like_buttons = document.querySelectorAll('button.like');
like_buttons.forEach((button) => {
    button.onclick = function(){ set_clicked(button); };
});
