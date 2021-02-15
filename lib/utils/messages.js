"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = messages;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var defaultMessages = {
  date: 'تاریخ',
  time: 'زمان',
  event: 'رخداد',
  allDay: 'همش',
  week: 'هفته',
  work_week: 'هفته کاری',
  day: 'روز',
  month: 'ماه',
  previous: 'قبلی',
  next: 'بعدی',
  yesterday: 'دیروز',
  tomorrow: 'فردا',
  today: 'امروز',
  agenda: 'برنامه کار',
  noEventsInRange: 'رخدادی برای نمایش وجود ندارد.',
  showMore: function showMore(total) {
    return '+' + total + " \u0628\u06CC\u0634\u062A\u0631";
  }
};

function messages(msgs) {
  return (0, _extends2.default)({}, defaultMessages, msgs);
}

module.exports = exports["default"];