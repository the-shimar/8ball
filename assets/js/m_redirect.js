redirectMobileView();

var dum_width = window.innerWidth;
document.getElementById("ft_index").innerHTML = dum_width;
console.log("d width test: "+dum_width);
if (399 < dum_width) {
    if (dum_width < 450) {
    console.log("d width: "+dum_width);
    document.getElementById("number_div").className = "col-6 d-xl-flex justify-content-xl-end align-items-xl-center";
    }
}



var is_mobile = setInterval(redirectMobileView, 3000);

function redirectMobileView() {
    var width = window.innerWidth;

    if (width > 750) 
    window.location.href = "/index.html";
}

