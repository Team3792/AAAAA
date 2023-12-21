let x = localStorage.getItem("unlocked");
let unlocked = true;
let pinTyped = "";
const queTime = 10; //Number of seconds between each submit
let que = [];
let departments = ["programming.png", "cad.png", "fabrication.png", ""];

if(!navigator.onLine)
{
  offLine();
}
setInterval(releaseQue, queTime * 1000);
document.getElementById("department").style.height = '0px';
if(x == undefined){
unlocked = false;
}
if(unlocked){
  document.getElementById("name").innerHTML = "";
}

window.addEventListener("offline", () => offLine());
window.addEventListener("online", () => onLine());
//this will keep track of when the admin pasword has been put in

function offLine(){
  console.log("offLine");
  document.getElementById("logo").src = "offLine.png";
}

function onLine(){
  console.log("onlien");
  document.getElementById("logo").src = "Army Ants Logo - White Circle.png";
}

addEventListener("keydown", (event) => {

  if(!unlocked){
    document.getElementById("department").style.height = '0px';
    console.log(event.key);

    if(event.key == "Enter" && pinTyped==271828){
    //  submit();
    unlocked = true;
    localStorage.setItem("unlocked", true);
      document.getElementById("pin").innerHTML = "";
      document.getElementById("name").innerHTML = "";
      document.getElementById("logo").style.width = '500px';
        document.getElementById("logo").style.height = '375px';
        pinTyped = "";

    }else if(event.key == "Backspace"){
      document.getElementById("pin").innerHTML = document.getElementById("pin").innerHTML.slice(0, -1);
      pinTyped = pinTyped.slice(0, -1);

      document.getElementById("name").innerHTML = "Admin";
      if(document.getElementById("pin").innerHTML == ""){
          document.getElementById("name").innerHTML = "Admin Password";
        document.getElementById("logo").style.width = '500px';
          document.getElementById("logo").style.height = '375px';
      }
    }else{
      let key = parseInt(event.key);
      if(key>=0){
        if(document.getElementById("pin").innerHTML.length<6){
      document.getElementById("pin").innerHTML += "*";
      pinTyped+= key

      document.getElementById("name").innerHTML = "Admin";
      document.getElementById("logo").style.width = '0px';
        document.getElementById("logo").style.height = '0px';
      }
    }
    }





  }else if(navigator.onLine){
  console.log(event.key);

  if(event.key == "Enter" && findName(pinTyped) != "Not Valid"){
    que.push(pinTyped);
    document.getElementById("department").style.height = '0px';
    document.getElementById("pin").innerHTML = "";
    pinTyped="";
    document.getElementById("name").innerHTML = "";
    document.getElementById("logo").style.width = '500px';
      document.getElementById("logo").style.height = '375px';
      document.getElementById("clockDirection").innerHTML="";


  }else if(event.key == "Backspace"){
    document.getElementById("department").style.height = '0px';
    document.getElementById("pin").innerHTML = document.getElementById("pin").innerHTML.slice(0, -1);
    pinTyped=pinTyped.slice(0, -1);
    let name = findName(pinTyped.innerHTML);
    document.getElementById("name").innerHTML = (name=="Not Valid")?"":name;
    if(document.getElementById("pin").innerHTML == ""){
      document.getElementById("name").innerHTML = "";
    document.getElementById("logo").style.width = '500px';
      document.getElementById("logo").style.height = '375px';
      document.getElementById("clockDirection").innerHTML="";
  }
  // }else if(event.key=="+" || event.key=="-"){
  //   console.log("signalling clock direction")
  //   document.getElementById("clockDirection").innerHTML = (event.key=="-")? "In":"Out"
  //   document.getElementById("logo").style.width = '0px';
  //     document.getElementById("logo").style.height = '0px';

  }else{


    let key = parseInt(event.key);
    // if(key>=0 && document.getElementById("clockDirection").innerHTML.length !="0"){
     if(key>=0){
      if(document.getElementById("pin").innerHTML.length<4){
    document.getElementById("pin").innerHTML += "*";
    pinTyped+= key;
    let name = findName(pinTyped);
    let dep = findDep(pinTyped);
    if(name != "Not Valid"){
      console.log(dep);
      document.getElementById("department").src = departments[dep];
      //console.log(name);
      //console.log("Showing department");
      document.getElementById("department").style.height = '100px';
      document.getElementById("name").innerHTML = name;
    } else{
      document.getElementById("department").style.height = '0px';
      document.getElementById("name").innerHTML = "";
    }

    document.getElementById("logo").style.width = '0px';
      document.getElementById("logo").style.height = '0px';

    }
  }
}
}

})

function submit(pin){1
  fetch("https://docs.google.com/forms/d/e/1FAIpQLSdWdMnapSuoJuENKVPyx0qksRUrDHAVPaKbHlOD7HtnKSZ2Zg/formResponse?usp=pp_url&entry.101403101="+pin+"&entry.1517704973="+"&submit=Submit");
}

function releaseQue(){
  if(que.length > 0){
  submit(que[0]);
  console.log("released: " + que[0]);
  que.splice(0, 1); //Delete first element of array
  }
}

function findName(pin){
  for(let x of pinNames){
    if(x.pin == pin){
      return x.name;
    }
  }
  return "Not Valid";
}

function findDep(pin){
  for(let x of pinNames){
    if(x.pin == pin){
      return x.department;
    }
  }
  return "Not Valid";
}




//Changes:

//Can't enter more than 4 digits
//Keaton and Ellis don't show
