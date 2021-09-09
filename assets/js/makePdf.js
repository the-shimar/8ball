window.onload = function () {
    document.getElementById("downloadPDF")
        .addEventListener("click", () => {

            window.open("/savePdf.html", '_blank');
        })
}

function reHideDiv() {
    const hideDiv = document.getElementById("toPDF1");
    hideDiv.style.display = "none";
}