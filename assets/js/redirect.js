var is_mobile = setInterval(redirectMobileView, 3000);

function redirectMobileView() {
    var width = window.innerWidth;

    if (width < 750) 
    window.location.href = "/m_index.html";
}

