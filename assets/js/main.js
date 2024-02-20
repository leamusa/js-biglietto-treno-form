// Save the button 'generate'
var buttonGenerate = document.getElementById("generate");

// Listen to an event click on the button 'generate'
buttonGenerate.addEventListener("click", function () {
  var inputName = document.getElementById("user-name").value;
  var inputAge = document.getElementById("user-age").value;
  var inputKm = document.getElementById("km");

  // Parse the input value for kilometers
  var journey = parseInt(inputKm.value);

  // Constants for ticket price calculation
  var pricePerKilometers = 0.21;
  var ticketPrice = pricePerKilometers * journey;
  var offer = "Standard Rate";

  // Apply discounts based on age
  if (inputAge == "minor") {
    ticketPrice -= (ticketPrice * 20) / 100;
    offer = "Minor Discount";
  } else if (inputAge == "over65") {
    ticketPrice -= (ticketPrice * 40) / 100;
    offer = "Senior Discount";
  }

  // Generate random numbers for carriage and CP Code
  var carriage = Math.floor(Math.random() * 9) + 1; // number between 1 and 9
  var cpCode = Math.floor(Math.random() * (100000 - 90000 + 1)) + 90000; // number between 90000 to 100000 (exclusive)

  // Update the HTML elements with ticket details
  document.getElementById("passenger-name").innerHTML = inputName;
  document.getElementById("offer").innerHTML = offer;
  document.getElementById("ticket-price").innerHTML =
    ticketPrice.toFixed(2) + " Euro";
  document.getElementById("carriage").innerHTML = carriage;

  document.getElementById("cp-code").innerHTML = cpCode;

  // Show the ticket display
  var ticketPrint = document.getElementById("ticket");
  ticketPrint.classList.remove("hidden");
  ticketPrint.classList.add("show");
});

// Save in a variable our 'cancel' BUTTON
var buttonCancel = document.getElementById("cancel");

// Listen to an event click on the 'cancel' button
buttonCancel.addEventListener("click", function () {
  // Clear elements
  document.getElementById("passenger-name").innerHTML = "";
  document.getElementById("offer").innerHTML = "";
  document.getElementById("ticket-price").innerHTML = "";
  document.getElementById("carriage").innerHTML = "";
  document.getElementById("cp-code").innerHTML = "";

  // Clear input fields
  document.getElementById("km").value = "";
  document.getElementById("user-age").value = "";
  document.getElementById("user-name").value = "";

  // Hide the ticket display
  var ticketPrint = document.getElementById("ticket");
  ticketPrint.classList.remove("show");
  ticketPrint.classList.add("hidden");
});
