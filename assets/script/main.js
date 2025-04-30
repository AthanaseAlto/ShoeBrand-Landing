document.addEventListener('DOMContentLoaded', () => {
  const openMenuButton = document.getElementById('openMenu');
  const bossNav = document.getElementById('sideMenu');
  const closeMenu = document.getElementById('closeMenu');

  let isOpen = false; // track menu state

  function updateButtonIcon() {
    if (isOpen) {
      openMenuButton.innerHTML = `
          <svg class="w-10 h-10 text-white cursor-pointer active:scale-95 transition-transform" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        `;
    } else {
      openMenuButton.innerHTML = `
          <svg class="w-10 h-10 text-white cursor-pointer active:scale-95 transition-transform" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
          </svg>
        `;
    }
  }

  openMenuButton.addEventListener('click', () => {
    isOpen = !isOpen;

    bossNav.classList.toggle('translate-x-full', !isOpen); // if closed, add translate-x-full
    updateButtonIcon();
  });

  closeMenu.addEventListener('click', () => {
    isOpen = false;
    bossNav.classList.add('translate-x-full');
    updateButtonIcon();
  });
});
