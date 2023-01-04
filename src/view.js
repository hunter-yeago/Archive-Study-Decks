let mobilemenubutton = document.querySelector('.mobilemenubutton');

document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]')
    if(!isDropdownButton && e.target.closest('[data-dropdown') != null) {
        return;
    }

    let currentDropDown;
    if (isDropdownButton) {
        currentDropDown = document.querySelector('.dropdown-menu');
        currentDropDown.classList.toggle('active');
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropDown) return;
        dropdown.classList.remove('active');
    })
}, false);