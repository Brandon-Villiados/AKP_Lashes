import $ from 'jquery';

export function convertDate() {
  return Number((new Date).toTimeString().slice(0, 2));
}

export function checkAvailableToday() {
  let timeNow = new Date();
  let hours = timeNow.getHours();
  let minutes = timeNow.getMinutes();
  let quarters = [15, 30, 45];

  minutes = quarters.filter((quarter) => {
    if (minutes === 0 || minutes > 45) {
      return '00';
    }
    return quarter > minutes
  })[0]

  timeNow = hours + ':' + minutes;
  return timeNow;
}

export function findAvailableTimes(data, times, appointmentType) {
  let result = times.slice(0);
  
  let appHours = {
    'Classic_Set': 7,
    'Volume_Set': 8,
    'Classic_Fill': 4,
    'Volume_Fill': 5
  };

  result = data.reduce((acc, time) => {
    time = time.split('-');
    acc.splice(acc.indexOf(time[0]), appHours[appointmentType])
    return acc;
  }, result);

  return result.map((time, index, array) => {
    const checkAdjacentTimeStamps = (t, i, a) => {
      let hours = Number(t.slice(0, 2));
      let minutes = Number(t.slice(3));
      let ckHours = Number(array[index + 1].slice(0, 2));
      let ckMinutes = Number(array[index + 1].slice(3));
      let minutesBetweenAppointments = 0;

      while((hours + ':' + minutes !== ckHours + ':' + ckMinutes)) {
        if (hours < ckHours) {
          if (minutes === 60) {
            hours = hours + 1;
            minutes = 0;
            minutesBetweenAppointments = minutesBetweenAppointments + 15;
          } else {
            minutes + 15;
            minutesBetweenAppointments = minutesBetweenAppointments + 15;
          }
        } else {
          minutes = minutes + 15;
          minutesBetweenAppointments = minutesBetweenAppointments + 15;
        }
      }
      return minutesBetweenAppointments;
    }

    if (Number(time.slice(0, 2)) < 10) {
      time = time.slice(1) + ' AM';
      return time;
    } else if (Number(time.slice(0, 2)) < 12) {
      time = time + ' AM';
      return time;
    } else if (time.slice(0, 2) === '12') {
      time = time + ' PM';
      return time;
    } else {
      time = (Number(time.slice(0, 2)) - 12).toString() + time.slice(2) + ' PM'
      return time;
    }
  });
}

export async function noneDisplayChosenApp(indexOfSelectedElement, selectedAppType) {
  let appHours = {
    'Classic_Set': 7,
    'Volume_Set': 8,
    'Classic_Fill': 4,
    'Volume_Fill': 5
  };
  
  $(`h1`).slice(indexOfSelectedElement, appHours[selectedAppType]).css('display', 'none');
}