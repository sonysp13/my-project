function tourInformation() {
  let name = prompt("What's is your name?");
  let country = prompt("What country are you from?");
  let email = prompt("What is your email adress?");

  country = country.toLowerCase().trim();

  if (country === "ukraine") {
    alert(
      "Hi " +
        name +
        "! I am sure you've been to this wonderful place🇺🇦. We will be in touch by email😉"
    );
  } else {
    alert(
      "Hi " +
        name +
        "! We will send you all the information about the tour by email😉"
    );
  }
}
let TourButton = document.querySelector("button");
TourButton.addEventListener("click", tourInformation);
