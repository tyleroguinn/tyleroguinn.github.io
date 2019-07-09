//initialize a variable to collect their death date
var deathDate = new Date();
//get the form and clock for toggleDisplay()
var myForm = document.getElementById("deathForm");
var myClock = document.getElementById("deathClock");

//set the death date to what the user supplied us
function collectData(){
  deathDate.setFullYear(document.getElementById("months").value,
  document.getElementById("days").value, document.getElementById("years").value);
  deathDate.setHours(document.getElementById("hours").value,
  document.getElementById("minutes").value, document.getElementById("seconds").value);
}

// Update the count down every 1 second
var x = setInterval(function() {

    var now = new Date().getTime();
    
    var clockDisplay = myClock.style.display;

    var timeTillDeath = deathDate - now;

    var days = Math.floor(timeTillDeath / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeTillDeath % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeTillDeath % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeTillDeath % (1000 * 60)) / 1000);

    if(clockDisplay == "block"){
      document.getElementById("deathClock").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    }
    // If the countdown finishes
    if (timeTillDeath < 0) {
      clearInterval(x);
      document.getElementById("deathClock").innerHTML = "Oh dear, looks like you're dead";
    }
}, 1000);

function toggleDisplay() {
    // get the current value of the clock's display property
    var clockDisplay = myClock.style.display;

    // now toggle the clock and the button text, depending on current state
    if (clockDisplay == "none") {
      // clock is visible. hide it
      myClock.style.display = "block";
      myForm.style.display = "none";
      }
}
