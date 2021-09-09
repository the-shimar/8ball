const dc_sub = ["The Future of Data is Innovative",
                "The Future of Data is Innovative",
                "The Future of Data is Innovative",
                "The Future of Data is Innovative "];

const dc = ["#700 Create New Value by Innovating with Data",
            "#506 Reveal the Full Potential of Your Data with AI",
            "#925 Achieve Outcomes for any Workload, Anywhere with Dell EMC Storage",
            "#524 Discover Next-generation PowerEdge Servers Purpose-Build for AI and the Edge"];

const mit_sub = ["The Future of IT is Hybrid",
                "The Future of IT is Hybrid",
                "The Future of IT is Hybrid",
                "The Future of Data is Innovative"];

const mit = ["#703 The Data Perils of Operating Outside of the aaS Economy",
            "#100 APEX: The Ease & Agility of as-a-Service with the Power/Control of Leading Technology Infrastructure",
            "#927 Reimagine Outcomes with VxRail and PowerFlex",
            "#928 Performance Made Flexible"];

const hc_sub = ["The Future of IT is Hybrid",
                "The Future of IT is Hybrid",
                "The Future of Work is Intelligent",
                ""];

const hc = ["#200 APEX Cloud: Easily Manage and Secure Your Data",
            "#404 How to Securely Expand from the Private Cloud to the Edge",
            "#916 The Remote Work Era: What Every Unified Workspace Needs",
            ""];

const wt_sub = ["The Future of Work is Intelligent",
                "The Future of Work is Intelligent",
                "The Future of Work is Intelligent",
                "The Future of Work is Intelligent"];

const wt = ["#704 Work and Learn from Anywhere with a Digital Workplace",
            "#305 Break Down These Walls! Smart Offices and Workspaces of the Future",
            "#929 Keeping Workers Productive and Secure in a Hybrid Work Environment",
            "#924 Empowering Work from Anywhere through Frictionless and Connected Experiences"];

color_sets = []

console.log("LStorage"+localStorage.getItem("dc_ans")+localStorage.getItem("mit_ans")+
          localStorage.getItem("hc_ans")+localStorage.getItem("wt_ans"));

var priority_list = [localStorage.getItem("dc_ans"), localStorage.getItem("mit_ans"), localStorage.getItem("hc_ans"), localStorage.getItem("wt_ans")] //should be in this order
console.log("List: "+priority_list);
// let a =  [2,2,1,1];

function Priority(a) {
let b = 1;

let min = Math.min(...a);
let max = Math.max(...a);
let visited_index =[];
 visited_index.push(a.indexOf(1));
 a[a.indexOf(min)] = b;


let visited = (index) => {
	
	let check = visited_index.some(_v=> _v ===index);
	return check;
}

let changePriority = ()=>{
	for(let i = min;i<=max;i++){
		let _p = a.map((_v,_i)=>{
			if(!visited(_i)){
				if(i==_v){
					 visited_index.push(_i);
					 b = b+1;
                     a[_i] = b;
					
				}
			}
	    });
	}
	return a;
	
}
// console.log(changePriority());
return changePriority();
}

priority_listDone = Priority(priority_list);
console.log("PLD: "+priority_listDone);

for(let c=0; c<4; c++) {
    priority_list[c] -= 1; 
}
console.log("PLD corrected: "+priority_listDone);

h1 = document.getElementById("hh1");
h2 = document.getElementById("hh2");
h3 = document.getElementById("hh3");
h4 = document.getElementById("hh4");

s11 = document.getElementById("s11");
s12 = document.getElementById("s12");
s13 = document.getElementById("s13");
s14 = document.getElementById("s14");

b11 = document.getElementById("bp11");
b12 = document.getElementById("bp12");
b13 = document.getElementById("bp13");
b14 = document.getElementById("bp14");


s21 = document.getElementById("s21");
s22 = document.getElementById("s22");
s23 = document.getElementById("s23");
s24 = document.getElementById("s24");

b21 = document.getElementById("bp21");
b22 = document.getElementById("bp22");
b23 = document.getElementById("bp23");
b24 = document.getElementById("bp24");

s31 = document.getElementById("s31");
s32 = document.getElementById("s32");
s33 = document.getElementById("s33");
s34 = document.getElementById("s34");

b31 = document.getElementById("bp31");
b32 = document.getElementById("bp32");
b33 = document.getElementById("bp33");
b34 = document.getElementById("bp34");

s41 = document.getElementById("s41");
s42 = document.getElementById("s42");
s43 = document.getElementById("s43");
s44 = document.getElementById("s44");

b41 = document.getElementById("bp41");
b42 = document.getElementById("bp42");
b43 = document.getElementById("bp43");
b44 = document.getElementById("bp44");

//div Trasparent
btransparent1 = document.getElementById("b14");
btransparent2 = document.getElementById("b24");
btransparent3 = document.getElementById("b34");
btransparent4 = document.getElementById("b44");

let expression = null;
let current_array_sub = null;
let current_array = null;
let heading1234 = null;
//Priority
for (let i = 0; i < 4; i++) {
    console.log("Prior number: " +priority_listDone[i]);
    if (i == 0) {
        expression = priority_listDone[i];
        current_array_sub = dc_sub;
        current_array = dc;
        heading1234 = "Data Captial";
    }
    else if (i == 1) {
        expression = priority_listDone[i];
        current_array_sub = mit_sub;
        current_array = mit;
        heading1234 = "Modernized IT";
    }
    else if (i == 2) {
        expression = priority_listDone[i];
        current_array_sub = hc_sub;
        current_array = hc;
        heading1234 = "Hybrid Cloud";
    }
    else if (i == 3) {
        expression = priority_listDone[i];
        current_array_sub = wt_sub;
        current_array = wt;
        heading1234 = "Workforce Technology";
    }

    switch(expression) {
        case 1:
            console.log("c1");
            h1.innerHTML = heading1234;
            //subheading
            s11.innerHTML  = current_array_sub[0];
            s12.innerHTML  = current_array_sub[1];
            s13.innerHTML = current_array_sub[2];
            s14.innerHTML = current_array_sub[3];

            //heading
            b11.innerHTML = current_array[0];
            b12.innerHTML = current_array[1];
            b13.innerHTML = current_array[2];
            b14.innerHTML = current_array[3];

            if (current_array_sub[3] == ""){
                btransparent1.style.opacity ="0"; 
            }

        break;

        case 2:
            console.log("c2");
            h2.innerHTML = heading1234;
            //subheading
            s21.innerHTML = current_array_sub[0];
            s22.innerHTML = current_array_sub[1];
            s23.innerHTML = current_array_sub[2];
            s24.innerHTML = current_array_sub[3];

            //heading
            b21.innerHTML = current_array[0];
            b22.innerHTML = current_array[1];
            b23.innerHTML = current_array[2];
            b24.innerHTML = current_array[3];

            if (current_array_sub[3] == ""){
                btransparent2.style.opacity ="0";  
            }
        break;

        case 3:
            console.log("c3");
            h3.innerHTML = heading1234;
            //subheading
            s31.innerHTML = current_array_sub[0];
            s32.innerHTML = current_array_sub[1];
            s33.innerHTML = current_array_sub[2];
            s34.innerHTML = current_array_sub[3];

            //heading
            b31.innerHTML = current_array[0];
            b32.innerHTML = current_array[1];
            b33.innerHTML = current_array[2];
            b34.innerHTML = current_array[3];

            if (current_array_sub[3] == ""){
                btransparent3.style.opacity ="0"; 
            }
        break;

        case 4:
            console.log("c4");
            h4.innerHTML = heading1234;
            //subheading
            s41.innerHTML = current_array_sub[0];
            s42.innerHTML = current_array_sub[1];
            s43.innerHTML = current_array_sub[2];
            s44.innerHTML = current_array_sub[3];

            //heading
            b41.innerHTML = current_array[0];
            b42.innerHTML = current_array[1];
            b43.innerHTML = current_array[2];
            b44.innerHTML = current_array[3];

            if (current_array_sub[3] == ""){
                btransparent4.style.opacity ="0"; 
            }
        break;
    }

}