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

  return html2pdf().from(invoice).set(opt);

}

function closeTab() {
window.close();
}

function sendEmail() {
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
            name: "File_Name_with_Extension",
            // path: "Full Path of the file"
             data : opt
          }]
      })
        .then(function (message) {
          alert("Mail has been sent successfully");
          closeTab();
        });

      setTimeout(closeTab, 5000);
      
    }

sendEmail();
