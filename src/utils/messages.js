let defaultMessages = {
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
    return '+' + total + ' \u0628\u06CC\u0634\u062A\u0631'
  },
}

export default function messages(msgs) {
  return {
    ...defaultMessages,
    ...msgs,
  }
}
