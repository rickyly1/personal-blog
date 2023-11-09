document.addEventListener('DOMContentLoaded', function() {
    const allButtons = document.querySelectorAll('.searchBtn');
    const searchBar = document.querySelector('.searchBar');
    const searchInput = document.getElementById('searchInput');
    const searchClose = document.getElementById('searchClose');

    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', function() {
            searchBar.style.visibility = 'visible';
            searchBar.classList.add('open');
            this.setAttribute('aria-expanded', 'true');
            searchInput.focus();
        })
    }

    searchClose.addEventListener('click', function() {
        searchBar.style.visibility = 'hidden';
        searchBar.classList.remove('remove');
        this.setAttribute('aria-expanded', 'false');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var loggedIn = getCookie('loggedIn');

    const logoutButtons = document.querySelectorAll('.logout');
    const loginButtons = document.querySelectorAll('.login');
    const dashboardButtons = document.querySelectorAll('.dashboardNav');

    if (loggedIn === 'true') {
        for (var i = 0; i < logoutButtons.length; i++) {
            logoutButtons[i].style.display = "block";
        }

        for (var i = 0; i < loginButtons.length; i++) {
            loginButtons[i].style.display = "none";
        }

        for (var i = 0; i < dashboardButtons.length; i++) {
            dashboardButtons[i].style.display = "block";
        }

    } else {
        for (var i = 0; i < logoutButtons.length; i++) {
            logoutButtons[i].style.display = "none";
        }

        for (var i = 0; i < loginButtons.length; i++) {
            loginButtons[i].style.display = "block";
        }

        for (var i = 0; i < dashboardButtons.length; i++) {
            dashboardButtons[i].style.display = "none";
        }
    }
  
    function getCookie(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length == 2) return parts.pop().split(";").shift();
    }
});

  