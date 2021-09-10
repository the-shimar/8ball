var is_mobile = setInterval(redirectMobileView, 100);

function redirectMobileView() {
    var width = window.innerWidth;

    if (width > 750) 
    window.location.href = "/index.html";
}

