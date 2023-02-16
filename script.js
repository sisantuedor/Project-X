function toggleSidebar() {
    let sidebar = document.getElementById("sideBar");
    let menuIcon = document.getElementById("menu-icon");
  
    sidebar.classList.toggle("open");
    menuIcon.classList.toggle("open");
  }