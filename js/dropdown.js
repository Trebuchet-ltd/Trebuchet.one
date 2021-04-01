function toggleDropDown() {
    document.getElementById("nav-dropdown-id").classList.toggle("show-nav-dropdown-content");
    if (document.getElementById("nav-dropdown-btn").innerText == "menu") {
        document.getElementById("nav-dropdown-btn").innerText = "close";
    } else {
        document.getElementById("nav-dropdown-btn").innerText = "menu";
    }
}
  
  // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.nav-dropdown-btn')) {
        document.getElementById("nav-dropdown-btn").innerText = "menu";
        var dropdowns = document.getElementsByClassName("hidden-nav-dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-nav-dropdown-content')) {
                openDropdown.classList.remove('show-nav-dropdown-content');
            }
        }
    }
}
