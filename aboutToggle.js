var isItToggled = 0

function togglePers() {


  if (isItToggled === 0 || 1) {
    isItToggled = 2;
    document.getElementById("about").style.paddingBottom = "25vh";
    document.getElementById("persContent").classList.remove("hidden");
    document.getElementById("techContent").classList.add("hidden");
  }

}

function toggleTech() {

  var about = document.getElementById("myDIV");

  if (isItToggled === 0 || 2) {
    isItToggled = 1;
    document.getElementById("about").style.paddingBottom = "25vh";
    document.getElementById("techContent").classList.remove("hidden");
    document.getElementById("persContent").classList.add("hidden");
  }

}
