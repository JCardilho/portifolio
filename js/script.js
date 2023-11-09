function openNav(){
    var x = document.getElementById("navigation");
    if (x.className==="navigation"){
        x.className += "menujs";
        document.getElementById("threeeline-icon").innerHTML="&Cross";
    }else {
        x.className ="navigation"
        document.getElementById("threeeline-icon").innerHTML="&#9776<";
    }
}