let texts = ["Since we met and counting...."];
//let texts = mess.split(" ");
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isPaused = "";

//self invoked function
function type() {
  isPaused = "false";
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 400);
}

function display_c() {
  var refresh = 1000; // Refresh rate in milli seconds
  mytime = setTimeout("display_ct()", refresh);
}

function display_ct() {
  dt1 = new Date("2019/8/24 09:30:21");
  var x = new Date();
  x1 = timeDiffCalc(dt1, new Date());
  document.querySelector(".clock").textContent = x1;
  display_c();
}

function timeDiffCalc(dateFuture, dateNow) {
  let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

  // calculate days
  const days = Math.floor(diffInMilliSeconds / 86400);
  diffInMilliSeconds -= days * 86400;

  // calculate hours
  const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
  diffInMilliSeconds -= hours * 3600;

  // calculate minutes
  const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
  diffInMilliSeconds -= minutes * 60;

  // calculate seconds
  const seconds = Math.trunc(diffInMilliSeconds) % 60;

  let difference = "";
  if (days > 0) {
    difference += days === 1 ? `${days} day, ` : `${days} days, `;
  }

  difference +=
    hours === 0 || hours === 1 ? `${hours} hour, ` : `${hours} hours, `;

  difference +=
    minutes === 0 || hours === 1
      ? `${minutes} minutes, `
      : `${minutes} minutes, `;

  difference +=
    minutes === 0 || hours === 1 ? `${seconds} second` : `${seconds} seconds`;
  console.log(seconds);
  return difference;
}

type();
display_ct();
