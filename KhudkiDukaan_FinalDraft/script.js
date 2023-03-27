var currentYear = new Date().getFullYear();
var currentMonth = new Date().getMonth();
var currentDate = new Date().getDate();
var currentDay = new Date().getDay();
var currentHours = new Date().getHours();
var currentMinutes = new Date().getMinutes();
var currentSeconds = new Date().getSeconds();

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

