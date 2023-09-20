// array forEach method
// element.map method
// what does the map method really do
function getCurrentDay() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];
    return dayOfWeek;
    
  }
//   console.log (dayOfWeek);

  

  function getCurrentTime(){
      const today = new Date();
      let hours = today.getHours();
      const ampm = hours >= 12 ? 'PM' : 'AM';

      hours = hours % 12;
  hours = hours || 12; // 0 is falsy therefore whem its midnight 0 oclock it will convert to 12


  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  return {
    hours: hours,
    ampm: ampm,
    minutes: String(minutes).padStart(2, '0'), // Ensure two-digit minutes.
    seconds: String(seconds).padStart(2, '0'), // Ensure two-digit seconds.
  };


  }

  const dayOfWeek = getCurrentDay();

// Call the getCurrentTime function to get the current time components.
const { hours, ampm, minutes, seconds } = getCurrentTime();

console.log( "Today is: " + dayOfWeek + ".");
console.log(`Today is: ${dayOfWeek}.`);

 console.log(`Current time is: ${hours} ${ampm} : ${minutes} : ${seconds}`);

 function print_current_page()
{
window.print();
}


// a fumction to display the current date
function getCurrentDate() {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so we add 1.
  const day = String(today.getDate()).padStart(2, '0');
  const year = today.getFullYear();

  const dateFormats = [
    `${month}-${day}-${year}`,
    `${month}/${day}/${year}`,
    `${day}-${month}-${year}`,
    `${day}/${month}/${year}`
  ];// displaying the date in different formats

  return dateFormats;
}
const dateFormats = getCurrentDate();
// Print a header message indicating that we're displaying current date formats.
console.log('Current Date Formats:');

// Iterate over each date format in the 'dateFormats' array using the forEach method.
dateFormats.forEach(format => {
  // For each date format, log it to the console.
  console.log(format);
});



// javascript code to display th area of a trianfle given 3 dimensions

var side1 = 7;
var side2 = 7;
var side3 = 5;
function Area(){
var semiperimeter = (side1 + side2 + side3)/2
var area = Math.sqrt(semiperimeter*((semiperimeter-side1)*(semiperimeter-side2)*(semiperimeter-side3)))
return area;
}
 var area = Area();
console.log(area)//displaying the output

// function to check if the given year is a leap year
function isLeapYear(year) {
  // Leap year condition: divisible by 4 and not divisible by 100, or divisible by 400.
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true; // It's a leap year.
  } else {
    return false; // It's not a leap year.
  }
}
console.log(isLeapYear(2016));
console.log(isLeapYear(2000));
console.log(isLeapYear(1700));
console.log(isLeapYear(1800));
console.log(isLeapYear(100));