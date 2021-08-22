"use strict";

// const weigh = Number(document.querySelector(".weight").value);
// const height = Number(document.querySelector(".height").value);

document.querySelector(".buttonResult").addEventListener("click", function () {
  //putting the input values into variables
  let weightInput = Number(document.getElementById("weight").value);
  let heightInput = Number(document.getElementById("height").value);

  // CHECHING THE VALUES BY LOGGING TO CONSOLE
  let bmiCalc = weightInput / heightInput ** 2;
  let bmiShort = bmiCalc.toFixed(1);
  console.log(weightInput, typeof weightInput);
  console.log(heightInput, typeof heightInput);

  //CHANGING THE VALUE OF THE RESULT
  document.querySelector(".bmi").textContent =
    "👉Your BMI is " + bmiShort + "👈";

  console.log(document.querySelector(".bmi"));
  console.log(bmiCalc, typeof bmiCalc);

  //CONDITIONS FOR OUTPUT
  if (bmiCalc >= 20 && bmiCalc <= 25) {
    document.querySelector(".result").textContent =
      "Your BMI is Okay, you're good😊";
  } else if (bmiCalc > 25) {
    document.querySelector(".result").textContent =
      "Ahh sh*t, go to gym ass*ole 🍔";
  } else if (bmiCalc < 20) {
    document.querySelector(".result").textContent =
      "WTF man! You're lighter than my ex 💩!";
  }
});
