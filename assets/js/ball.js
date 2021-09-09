// document.getElementById("ballObj").style.marginLeft = "70%";

var animDiv = document.getElementById("animDiv");

function seeRec() {
    //show div
    // animDiv.style.display = 'block';  
    //hideupper priority div
    // document.getElementById("actualDiv").style.display = 'none';  

    // animDiv.innerHTML = String.raw`"<div class="d-xl-flex align-items-xl-center" id=ballContainer>
    //         <model-viewer id= "ballObj"  src="assets/untitled.glb" alt="8 Ball" ar ar-modes="webxr scene-viewer quick-look" 
    //         loading="eager" environment-image="neutral" shadow-intensity=".1" 
    //         camera-orbit="180deg 90deg 100%" autoplay animation-name="pSphere1|CINEMA_4D_Main|Layer0.001">
    //         </model-viewer>
    //         </div>"`
    
    

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

          // Simulate a mouse click:
            // window.location.href = "/animation.html#animDiv";

    
    //Div of Left pane
    document.getElementById("LeftPane").remove();
    document.getElementById("RightPane").className = "col d-xl-flex align-items-xl-center";
    document.getElementById("ballObjCurrent").style.marginLeft = "310%";
    // document.getElementById("ballObjCurrent").style.marginLeft = "20%";

    const modelViewer = document.querySelector("model-viewer");

    // setTimeout(AnimP, 1000);

    // function AnimP() {
    // modelViewer.play();
    // }

    modelViewer.play();


    let ball = document.getElementById("ballObjCurrent");
  
      var myVar = setInterval(spostaDiv, 20);
      var margin = 310;
  
      let l = window.screen.width;
      let w = 20;
  
      function spostaDiv() {
        console.log(w);
        if (margin == w) {
          margin = 20 + "%";

          // Simulate a mouse click:
          window.location.href = "/recommendation_page.html#toPDF";
        } else {
          ball.style.marginLeft = margin + "%";
        }
        // margin -= .25 ;
        margin -= 1 ;
      }
}

