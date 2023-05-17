addEventListener("keydown", (event) => {
  console.log(event.key);

  if(event.key == "Enter" && document.getElementById("name").innerHTML != ""){
    submit();
    document.getElementById("pin").innerHTML = "";
    document.getElementById("name").innerHTML = "";
    document.getElementById("logo").style.width = '500px';
      document.getElementById("logo").style.height = '375px';

  }else if(event.key == "Backspace"){
    document.getElementById("pin").innerHTML = document.getElementById("pin").innerHTML.slice(0, -1);
    document.getElementById("name").innerHTML = findName(document.getElementById("pin").innerHTML);
    if(document.getElementById("pin").innerHTML == ""){
        document.getElementById("name").innerHTML = "";
      document.getElementById("logo").style.width = '500px';
        document.getElementById("logo").style.height = '375px';
    }
  }else{
    let key = parseInt(event.key);
    if(key>=0){
    document.getElementById("pin").innerHTML += key;
    document.getElementById("name").innerHTML = findName(document.getElementById("pin").innerHTML);
    document.getElementById("logo").style.width = '0px';
      document.getElementById("logo").style.height = '0px';
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
  return "";
}
