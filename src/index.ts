import { selectorEngine } from 'tm-dom'
import pipe from './utilities/pipe'

import { TmCalendarOptions } from './@types'

// Styles
import './scss/calendar.scss'

// plugin
class TmCalendar {
	protected _config: TmCalendarOptions

	/* 
	 * эти данные получаем при 
	 * инстанцировании класса
	 */
	protected _todaysDay: Date                  // текущая дата
	protected _date: Date                       // для счетчика дат
	protected _headerLabel: HTMLElement | null  // ссылка на элемент в котором будем менять месяц и год
	protected _calendarBody: HTMLElement | null // ссылка на тело календаря в который будем вствлять даты
	
	constructor( 
		private readonly _root: HTMLElement, 
		config: Partial<TmCalendarOptions> 
	) {
		this._config = {
			datetimeunix: 0,
			startOfWeek: 0,
		
			// for localisation
			months: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
			weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		
			// отключить дни до сегодняшнего
			disablePastDays: true,
		
			// отключить номер дня недели текущего месяца
			disableWeekDays: [],
		
			// отключить выбранные дни (вероятно выходные)
			// могут прийти все отмеченные дни, не только для текущего месяца
			// format YYYY-MM-DD
			disableFututeDays: [],
		
			// по умолчанию нам не доступен множественный выбор
			multiple: false,
		
			// и массив отмеченных пустой
			selectedDays: [],
	
			// переданные настройки
			...config
		}
		this._todaysDay = new Date()
		this._date = new Date()
		this._headerLabel = this._root.querySelector<HTMLElement>('.tm-calendar-header__label')
		this._calendarBody = this._root.querySelector<HTMLElement>('.tm-calendar-body')

		// this.init()
	}
}
