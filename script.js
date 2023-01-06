function toggleMobileNavigationMenu() {
  const sidebar = document.getElementById("nav-mobile-sidebar");
  if (!sidebar) {
    return;
  }

  const openClass = "open";
  sidebar.classList.toggle(openClass);

  const backdrop = document.getElementById("nav-mobile-sidebar-backdrop");
  if (!backdrop) {
    return;
  }

  backdrop.classList.toggle(openClass);
}

function onNavListMobileClick(event) {
  if (!event.target.matches("a")) {
    return;
  }

  toggleMobileNavigationMenu();
}
