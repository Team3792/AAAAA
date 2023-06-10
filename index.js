let x = localStorage.getItem("unlocked");
let unlocked=true;
if(x==undefined){
unlocked = false;
}
if(unlocked){
  document.getElementById("name").innerHTML = "";
}
//this will keep track of when the admin pasword has been put in

addEventListener("keydown", (event) => {
  if(!unlocked){

    console.log(event.key);

    if(event.key == "Enter" && document.getElementById("pin").innerHTML==271828){
    //  submit();
    unlocked = true;
    localStorage.setItem("unlocked", true);
      document.getElementById("pin").innerHTML = "";
      document.getElementById("name").innerHTML = "";
      document.getElementById("logo").style.width = '500px';
        document.getElementById("logo").style.height = '375px';

    }else if(event.key == "Backspace"){
      document.getElementById("pin").innerHTML = document.getElementById("pin").innerHTML.slice(0, -1);
      let name = findName(document.getElementById("pin").innerHTML);
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
      document.getElementById("pin").innerHTML += key;
      let name = findName(document.getElementById("pin").innerHTML);
      document.getElementById("name").innerHTML = "Admin";
      document.getElementById("logo").style.width = '0px';
        document.getElementById("logo").style.height = '0px';
      }
    }
    }





  }else{
  console.log(event.key);

  if(event.key == "Enter" && findName(document.getElementById("pin").innerHTML) != "Not Valid"){
    submit();
    document.getElementById("pin").innerHTML = "";
    document.getElementById("name").innerHTML = "";
    document.getElementById("logo").style.width = '500px';
      document.getElementById("logo").style.height = '375px';

  }else if(event.key == "Backspace"){
    document.getElementById("pin").innerHTML = document.getElementById("pin").innerHTML.slice(0, -1);
    let name = findName(document.getElementById("pin").innerHTML);
    document.getElementById("name").innerHTML = (name=="Not Valid")?"":name;
    if(document.getElementById("pin").innerHTML == ""){
        document.getElementById("name").innerHTML = "";
      document.getElementById("logo").style.width = '500px';
        document.getElementById("logo").style.height = '375px';
    }
  }else{
    let key = parseInt(event.key);
    if(key>=0){
      if(document.getElementById("pin").innerHTML.length<4){
    document.getElementById("pin").innerHTML += key;
    let name = findName(document.getElementById("pin").innerHTML);
    document.getElementById("name").innerHTML = (name=="Not Valid")?"":name;
    document.getElementById("logo").style.width = '0px';
      document.getElementById("logo").style.height = '0px';
    }
  }
}
}
})

function submit(){
  let pin = document.getElementById("pin").innerHTML;
  fetch("https://docs.google.com/forms/d/e/1FAIpQLSdWdMnapSuoJuENKVPyx0qksRUrDHAVPaKbHlOD7HtnKSZ2Zg/formResponse?entry.101403101="+pin);
}

function findName(pin){
  for(let x of pinNames){
    if(x.pin == pin){
      return x.name;
    }
  }
  return "Not Valid";
}




//Changes:

//Can't enter more than 4 digits
//Keaton and Ellis don't show
