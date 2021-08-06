const settimerbtn = document.querySelector(".time-setter-btn");
const start = document.querySelector(".start");
const timefield = document.querySelector("#time-setter-field");
const endDate = new Date().getTime();
const modal = document.querySelector(".displaying-modal");

//  time setter appear on settimer cick :-
settimerbtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// To set timer a per entered by the user :-
let setTimer = () => { setInterval(() => {
    // Getting all time-left fields :-
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const days = document.querySelector(".days-left");
    const hours = document.querySelector(".hours-left");
    const minutes = document.querySelector(".minutes-left");
    const seconds = document.querySelector(".seconds-left");
    let countDownDate = new Date(timefield.value).getTime();
    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    let daysleft = Math.floor(timeleft / _MS_PER_DAY);
    let hoursleft = Math.floor(
      (timeleft % _MS_PER_DAY) / (1000 * 60 * 60)
    );
    let minutesleft = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let secondsleft = Math.floor((timeleft % (1000 * 60)) / 1000);

    days.innerHTML = daysleft;
    hours.innerHTML = hoursleft;
    minutes.innerHTML = minutesleft;
    seconds.innerHTML = secondsleft;

    modal.style.display = "none";
  }, 1000);
};

// For execution of countdown start :-
start.addEventListener("click", setTimer);
