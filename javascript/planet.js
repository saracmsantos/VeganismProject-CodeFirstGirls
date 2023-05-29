// Example console log message
const message = 'Hello everyone!';
let color = 'green';
console.log(`${message} Let's make our planet ${color}!`)

// Hides all elements with class="containerTab"
function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }