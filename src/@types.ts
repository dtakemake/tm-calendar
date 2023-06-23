interface TmCalendarOptions {

  // будем отображать время выбранного часового пояса
	// по умолчанию, текущий часовой пояс браузера
	datetimeunix: number,

	// с какого дня начинается неделя
	startOfWeek: number,

	// static datas
	months: [string, string, string, string, string, string, string, string, string, string, string, string],
	weekDays: [string, string, string, string, string, string, string],

	// обрабатывать прошедшие дни или нет
	disablePastDays: boolean,

	// заблокированные дни недели
	disableWeekDays: Array<number>,

	// заблокированные дни
	disableFututeDays: Array<number>,

	/* 
	 * обработка кликов
	 * 1. Доступен ли множественный выбор
	 * 2. Массив выбранных дат
	 */
	multiple: boolean,
	selectedDays: Array<string>,

	// метод обработки кликов
	onClickDateHandler?: (currentElementTarget: EventTarget, currentValue: string, selectedDates: Array<string>) => any
}

interface TmCalendar {

}

export type {
  TmCalendarOptions,
  TmCalendar
}
