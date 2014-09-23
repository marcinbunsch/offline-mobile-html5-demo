var Config = {
  format: '24'
}

Config.toggle = function() {
  Config.format = Config.format == '24' ? 'ampm' : '24'
  showTime()
}

function get24HourTime() {
  return moment().format('h:mm:ss a')
}

function getAmPmHourTime() {
  return moment().format('hh:mm:ss')
}

function getTime() {
  if (Config.format == '24') {
    return get24HourTime()
  } else {
    return getAmPmHourTime()
  }
}

function showTime() {
  $('#time').text(getTime())
}

showTime()
setInterval(showTime, 1000)

$(document).tapClick(Config.toggle)

