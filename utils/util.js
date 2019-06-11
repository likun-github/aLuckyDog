const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [year, month, day].map(formatNumber).join('-') 
}
const d = date => {
  const day = date.getDate()


  return [day]
}
const h = date => {
  const hour = date.getHours()
 

  return [hour]
}
const m = date => {

  const minute = date.getMinutes()

  return [minute].map(formatNumber)
}
const formatTime1 = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  return [month] + '月' + [day] + '日' + [hour] + ':' + [minute]
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//todate默认参数是当前日期，可以传入对应时间 todate格式为2018-10-05

function getDates(days, todate) {

  var dateArry = [];

  for (var i = 0; i < days; i++) {

    var dateObj = dateLater(todate, i);

    dateArry.push(dateObj)

  }

  return dateArry;

}

function dateLater(dates, later) {

  let dateObj = {};

  let show_day = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');

  let date = new Date(dates);

  date.setDate(date.getDate() + later);

  let day = date.getDay();

  let yearDate = date.getFullYear();

  let month = ((date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : date.getMonth() + 1);

  let dayFormate = (date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate());

  dateObj.time = month + '月' + dayFormate+'日'+'';

  dateObj.week = show_day[day];

  return dateObj;

}

const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [month] + '月' + [day] + '日'
}

module.exports = {
  formatTime: formatTime,
  formatTime1: formatTime1,
  formatDate: formatDate,
  getDates:getDates,
  h:h,
  m:m,
  d:d

}
