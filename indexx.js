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