function openNav() {
  var x = document.getElementById("navigation");
  if (x.className === "navigation") {
    x.className += "menujs";
    document.getElementById("threeline-icon").innerHTML =
      '<div class="text-green-white"><i class="fa-solid fa-xmark"></i><div>';
  } else {
    x.className = "navigation";
    document.getElementById("threeline-icon").innerHTML = "&#9776";
  }
}
