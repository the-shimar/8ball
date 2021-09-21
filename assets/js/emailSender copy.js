async function loader() {

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

  // let pdffile = html2pdf().from(invoice).set(opt).toPdf().output();
  let pdffile = null;
  await html2pdf().from(invoice).set(opt).toPdf().output('datauristring').then(function (pdfAsString) {
    // The PDF has been converted to a Data URI string and passed to this function.
    // Use pdfAsString however you like (send as email, etc)! For instance:
    console.log(pdfAsString);
    pdffile = pdfAsString;
  });

  
  // let pdffile = html2pdf().from(invoice).set(opt).toPdf().output();
  
  console.log("Pdf File" + typeof pdffile);
  // window.open(pdffile,"resizeable,scrollbar,_blank"); 
  // console.log(pdffile);
  // setInterval(() => { window.open(encodeURI(pdffile)); }, 5000);

  
  // var bin = atob(pdffile);
  // sendEmail(bin);

  sendEmail(pdffile);
  console.log("SendMail: "+pdffile);
  // setInterval(waiter(pdffile), 1000);

}

loader();

var is_mailedFlag = 0;


function waiter(pdffile) {
  console.log("waiter");
  if (pdffile != null) {
    console.log("waiter in"); 
    is_mailedFlag += 1;

    if(is_mailedFlag == 1)
      sendEmail(pdffile);
  }

}

function closeTab() {
window.close();
}

function sendEmail(pdffile) {
        console.log("Attach: "+pdffile);
        Email.send({
        Host: "smtp.gmail.com",
        Username: "dtforum4@kestoneglobal.biz",
        Password: "Kestone2021",
        To: 'shimar0607@gmail.com', //receiver mail
        From: "dtforum4@kestoneglobal.biz",
        Subject: "Dell Technologies Forum 2021 | Build Your Agenda",
        Body: String.raw`Dear Delegate,<br><br>Please find attached the suggested agenda. Kindly use the same while building your agenda on the Cvent page (add the cvent link here) by logging in with your registered email Id.<br><br>Warm regards,<br>Sneha`,
        Attachments: [
          {
            name: "Recommended-Sessions.pdf",
            // name: "File_Name_with_Extension",
            // path: "Full Path of the file"
            // contentType: 'application/pdf',
            data : pdffile
          }]
      })
        .then(function (message) {
          console.log("Mail has been sent successfully");
          // closeTab();
        });

      // setTimeout(closeTab, 5000);
      
    }

