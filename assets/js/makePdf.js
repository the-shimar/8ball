window.onload = function () {
    document.getElementById("downloadPDF")
        .addEventListener("click", () => {
            // var invoice = this.document.getElementById("banner");
            // const invoice1 = this.document.getElementById("toPDF1");
            // invoice1.style.display = "flex";
            
            // invoice.appendChild(invoice1);

            const invoice = this.document.getElementById("wholecontent");

            const content = this.document.getElementById("toPDF1");
            content.style.display = "flex";

            
            // invoice = invoice.getElementById("removeinPDF").remove();             
            // var removeinPDF = this.document.getElementById("removeinPDF");
            console.log(invoice);

            // invoice.removeChild(removeinPDF);
            // console.log(invoice);

            console.log(window);
            var opt = {
                // margin: 1,
                margin: 0,
                filename: 'Recommended-Sessions.pdf',
                // image: { type: 'jpeg', quality: 0.98 },
                // html2canvas: { scale: 2 },
                // jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }

                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'a3', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
            
            setTimeout(reHideDiv, 5000);
            // reHideDiv();

            // Simulate a mouse click:
            // window.location.href = "/recommendation_page.html";
        })
}

function reHideDiv() {
    const hideDiv = document.getElementById("toPDF1");
    hideDiv.style.display = "none";
}