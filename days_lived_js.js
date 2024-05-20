// Calculate # of days lived by age (years)
let age = prompt("What is your age (in years)? ");
let days_per_year = 365;

function days_lived(age, days_per_year) {
  return age * days_per_year;
}

alert(`You have lived approximately ${days_lived(age, days_per_year)} days.`)

// Calculate # of days lived by birthday
// let birthday = new Date(prompt("When is your birthday? "));
// let today = new Date();
// let timeDiff = today - birthday;
// 
// let days_lived = Math.round(timeDiff / (1000 * 60 * 60 * 24));
// 
// alert(`You have lived approximately ${days_lived} days.`);
