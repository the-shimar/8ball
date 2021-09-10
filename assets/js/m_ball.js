// document.getElementById("ballObj").style.marginLeft = "70%";

var animDiv = document.getElementById("animDiv");

function seeRec() {    

      //getting radio values
      var ele = null;
      for (let r = 0; r < 4; r++) {
          if (r == 0)
          ele = document.getElementsByName('dc');
          else if (r == 1)
          ele = document.getElementsByName('mt');
          else if (r == 2)
          ele = document.getElementsByName('hc');
          else if (r == 3)
          ele = document.getElementsByName('wt');
              
            for(let i = 0; i < ele.length; i++) {
                if(ele[i].checked){
                  if (r == 0)
                  localStorage.setItem("dc_ans", ele[i].value);
                  else if (r == 1)
                  localStorage.setItem("mit_ans", ele[i].value);
                  else if (r == 2)
                  localStorage.setItem("hc_ans", ele[i].value);
                  else if (r == 3)
                  localStorage.setItem("wt_ans", ele[i].value);
                }
            }
          }

          console.log("LStorage"+localStorage.getItem("dc_ans")+localStorage.getItem("mit_ans")+
          localStorage.getItem("hc_ans")+localStorage.getItem("wt_ans"));

    //Getting and setting Div height
    var ballMarginTop = this.document.getElementById("LeftPane");
    ballMarginTop = ballMarginTop.offsetHeight;
    document.getElementById("ballObjCurrent").style.marginTop = ballMarginTop+"px";
    window.location.href = "#ballObjCurrent"; 

    //Div of Left pane
    document.getElementById("LeftPane").remove();
    document.getElementById("RightPane").className = "col-12 d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center";

    const modelViewer = document.querySelector("model-viewer");

    modelViewer.play();


    let ball = document.getElementById("ballObjCurrent");
  
      var myVar = setInterval(spostaDiv, 20);
      var margin = ballMarginTop;
  
      let l = window.screen.width;
      let w = 20;
  
      function spostaDiv() {
        console.log(w);
        if (margin == w) {
          margin = 0 + "px";

          // Simulate a mouse click:
          // window.location.href = "/recommendation_page.html#toPDF";
          HideAndOpen();
          DataJs();
        } else {
          ball.style.marginTop = margin + "px";
        }
        // margin -= .25 ;
        margin -= 1 ;
      }
}

function HideAndOpen() {
  document.getElementById("RightPane").remove();
  document.getElementById("actualDiv").style.display = "none";
  document.getElementById("PriorityDiv").style.display = "flex";

  //Texts in banner
  document.getElementById("parg1").innerHTML = "Recommended Sessions<br>";
  document.getElementById("pargSub").innerHTML = "(interest areas displayed as per order of preference)<br>";
}