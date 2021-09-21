window.onload = function () {

            const invoice = this.document.getElementById("wholecontent");

            // const content = this.document.getElementById("toPDF1");
            // content.style.display = "flex";

            // console.log(invoice);

            // console.log(window);
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
            
            setTimeout(closeTab, 5000);
        
}

function closeTab() {
    window.close();
}