

let mobilemenubutton = document.querySelector('.mobilemenubutton');

document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]')
    if(!isDropdownButton && e.target.closest('[data-dropdown') != null) {
        console.log('not firing');
        return;
    }

    let currentDropDown;
    if (isDropdownButton) {
        console.log('firing');
        currentDropDown = document.querySelector('.dropdown-menu');
        currentDropDown.classList.toggle('active');
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropDown) return;
        console.log('removing active');
        dropdown.classList.remove('active');
    })
}, true)