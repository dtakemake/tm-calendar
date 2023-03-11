// import { selectorEngine } from 'tm-dom'
import pipe from './utilities/pipe'

import { TmCalendar, TmCalendarOptions } from './@types'

// Styles
import './scss/calendar.scss'

const TmCalendar = ( options: TmCalendarOptions ): TmCalendar => {

  return (() => {

    const calendar: TmCalendar = {

      

    }

    const test = pipe(
      ( args: string ) => { return '' }
    )

    return calendar
  })()
}

export default TmCalendar
