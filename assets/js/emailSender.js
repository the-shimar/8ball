async function loader() {

  const invoice = this.document.getElementById("wholecontent");

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

  let pdffile = null;
  await html2pdf().from(invoice).set(opt).toPdf().output('datauristring').then(function (pdfAsString) {
    // The PDF has been converted to a Data URI string and passed to this function.
    // Use pdfAsString however you like (send as email, etc)! For instance:
    // console.log(pdfAsString);
    pdffile = pdfAsString;
  });

  sendEmail(pdffile);

}

loader();

function closeTab() {
window.close();
}

function sendEmail(pdffile) {
        console.log("Attach: "+pdffile);
        Email.send({
        Host: "smtp.gmail.com",
        Username: "dtforum4@kestoneglobal.biz",
        Password: "Kestone2021",
        // To: 'shimar0607@gmail.com', //receiver mail
        To: localStorage.getItem("EmailField"), //receiver mail
        From: "dtforum4@kestoneglobal.biz",
        Subject: "Dell Technologies Forum 2021 | Build Your Agenda",
        Body: String.raw`Dear Delegate,<br><br>Please find attached the suggested agenda. Kindly use the same while building your agenda on the Cvent page (add the cvent link here) by logging in with your registered email Id.<br><br>Warm regards,<br>Sneha<br><br><br><p style="justify-content: center; width: 100%; text-align: center;">This email is sent by Kestone on behalf of Dell India. <a href="https://marcom.kestoneapps.in/2019/kestone/privacy/index-privacy.htm">Click Here</a> to view our Privacy Policy.</p>`,
        Attachments: [
          {
            name: "Recommended-Sessions.pdf",
            data : pdffile
          }]
      })
        .then(function (message) {
          // alert("Mail has been sent successfully");
          closeTab();
        });

      setTimeout(closeTab, 5000);
      
    }
