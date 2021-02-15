import React from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import events from '../events'
import * as dates from '../../src/utils/dates'
import moment from 'jalali-moment'

let allViews = Object.keys(Views).map(k => Views[k])

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

const Basic = () => {
  moment.locale('fa')
  const localizer = momentLocalizer(moment)
  return (
    <Calendar
      rtl
      events={events}
      views={allViews}
      step={60}
      showMultiDayTimes
      max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
      components={{
        timeSlotWrapper: ColoredDateCellWrapper,
      }}
      localizer={localizer}
      formats={{
        dateFormat: 'jDD',
        dayFormat: 'ddd jMM/jDD',
        weekdayFormat: 'ddd',
        timeGutterFormat: 'HH:mm',
        monthHeaderFormat: 'jMMMM jYYYY',
        dayHeaderFormat: 'ddd jYYYY/jMM/jDD',
        dayRangeHeaderFormat: ({ start, end }, culture, local) =>
          local.format(start, 'jMMMM jDD', culture) +
          ' - ' +
          local.format(
            end,
            dates.eq(start, end, 'month') ? 'jDD' : 'jMMMM jDD',
            culture
          ),
      }}
      messages={{
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
      }}
    />
  )
}

export default Basic
