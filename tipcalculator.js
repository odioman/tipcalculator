//calculate the amount you would like to tip

function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleamt").value;

//validate the input
if (billAmt === " " || numOfPeople <=) {numOfPeople = 1;
  document.getElementById("each").style.display = "none";
} else {

document.getElementById("each").style.display = "block";
}

//calculate the tip
var total = (billAmt * serviceQual)/ numOfPeople;

//round it to terms of money we understand

total = Math.round(total * 100)/ 100;

total = total.toFixed(2);
//Display the tip

document.getElementById("totalTip").style.display = "block";
document.getElementById("tip").innerHTML = total;

}

//Hide tip amount

document.getElementById("totalTip".style.display = "none";
document.getElementById.("calculate").onclick = function() {
  calculateTip();

};
