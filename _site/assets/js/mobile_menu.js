// assets/js/mobile_menu.js

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-primary .menu-toggle');
    const asideToggle = document.querySelector('.menu-aside .aside-toggle');
    const mobileMenuContainer = document.querySelector('.mobile-menu-container');
    const mobileAsideContainer = document.querySelector('.mobile-aside-container');
    const submenuToggles = document.querySelectorAll('.mobile-nav .submenu-toggle');

    if (menuToggle && mobileMenuContainer) {
        menuToggle.addEventListener('click', function () {
            mobileMenuContainer.style.display = mobileMenuContainer.style.display === 'block' ? 'none' : 'block';
            if (mobileAsideContainer) {
                mobileAsideContainer.style.display = 'none'; // Close aside if open
            }
        });
    }

    if (asideToggle && mobileAsideContainer) {
        asideToggle.addEventListener('click', function () {
            mobileAsideContainer.style.display = mobileAsideContainer.style.display === 'block' ? 'none' : 'block';
            if (mobileMenuContainer) {
                mobileMenuContainer.style.display = 'none'; //Close main menu if open
            }
        });
    }

    // Handle Submenu Toggles
    submenuToggles.forEach(function (toggle) {
        toggle.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the link from navigating
            const parentLi = toggle.closest('li'); // Get the parent <li> element

            if (parentLi) {
                const subMenu = parentLi.querySelector('.sub-menu'); // Find the sub-menu within that <li>
                if (subMenu) {
                    subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
                }
            }
        });
    });
});