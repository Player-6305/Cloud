// Inner page
let inner_menu = document.getElementById('burger_menu')

function open_menu(){
    inner_menu.classList.toggle('open-menu')
}


// Burger-menu
let modal_window = document.getElementById('modal_window')

let header = document.querySelector('header')

function open_modal(){
    modal_window.classList.toggle('open-menu')
    document.body.classList.toggle('block-overflow')
    header.classList.toggle('boxShadow-none')
}

function close_modal(){
    modal_window.classList.remove('open-menu')
    header.classList.toggle('boxShadow-none')
}

modal_window.addEventListener('click', function(event) {
    if (event.target === modal_window) {
      close_modal();
    }
});



// Inner page in burger-menu
let mini_modal = document.getElementById('mini_modal')
let inner_page_icon = document.getElementById('inner_page_icon')
let changed_icon = document.getElementById('changed_icon')
function open_mini_modal(){
    mini_modal.classList.toggle('open-menu')
    inner_page_icon.classList.toggle('hidden_icon')
    changed_icon.classList.toggle('changed_icon')
}