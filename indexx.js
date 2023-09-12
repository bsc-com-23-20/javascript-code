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