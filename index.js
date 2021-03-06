import React, {Component} from 'react'

import {
  DateRangePicker,
} from 'react-dates'

import {
  START_DATE,
  END_DATE,

  HORIZONTAL_ORIENTATION,
  VERTICAL_ORIENTATION,
  VERTICAL_SCROLLABLE,

  ICON_BEFORE_POSITION,
  ICON_AFTER_POSITION,

  INFO_POSITION_TOP,
  INFO_POSITION_BOTTOM,
  INFO_POSITION_BEFORE,
  INFO_POSITION_AFTER,

  ANCHOR_LEFT,
  ANCHOR_RIGHT,

  OPEN_DOWN,
  OPEN_UP,

  WEEKDAYS,
} from 'react-dates/lib/constants'

import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

const Enum = (options) => ({__ty: 'Enum', options})

const FocusedInputShape = Enum([START_DATE, END_DATE])
const IconPositionShape = Enum([ICON_AFTER_POSITION, ICON_BEFORE_POSITION])


class DateRangeWrapper extends Component {
  render() {
    return React.createElement(DateRangePicker, Object.assign({}, this.props, {
      firstDayOfWeek: Number(this.props.firstDayOfWeek),
      focusedInput: this.props.isOpen ? this.props.focusedInput : undefined,
      block: true,
    }))
  }
}

DateRangeWrapper.pdPropControls = {
  // required props for a functional interactive DateRangePicker
  startDate: 'Number',
  endDate: 'Number',
  onDatesChange: 'Function',

  isOpen: 'Boolean',
  focusedInput: FocusedInputShape,
  onFocusChange: 'Function',

  onClose: 'Function',

  // input related props
  startDateId: 'Text',
  startDatePlaceholderText: 'Text',
  endDateId: 'Text',
  endDatePlaceholderText: 'Text',
  disabled: 'Boolean',
  required: 'Boolean',
  readOnly: 'Boolean',
  screenReaderInputMessage: 'Text',
  showClearDates: 'Boolean',
  showDefaultInputIcon: 'Boolean',
  inputIconPosition: IconPositionShape,
  customInputIcon: 'Function',
  customArrowIcon: 'Function',
  customCloseIcon: 'Function',
  noBorder: 'Boolean',
  small: 'Boolean',
  regular: 'Boolean',
  keepFocusOnInput: 'Boolean',

  // calendar presentation and interaction related props
  // renderMonthText: mutuallyExclusiveProps('Function', 'renderMonthText', 'renderMonthElement'),
  // renderMonthElement: mutuallyExclusiveProps('Function', 'renderMonthText', 'renderMonthElement'),
  orientation: Enum([HORIZONTAL_ORIENTATION, VERTICAL_ORIENTATION, VERTICAL_SCROLLABLE]),
  anchorDirection: Enum([ANCHOR_LEFT, ANCHOR_RIGHT]),
  openDirection: Enum([OPEN_UP, OPEN_DOWN]),
  horizontalMargin: 'Number',
  withPortal: 'Boolean',
  withFullScreenPortal: 'Boolean',
  appendToBody: 'Boolean',
  disableScroll: 'Boolean',
  daySize: 'Number',
  isRTL: 'Boolean',
  firstDayOfWeek: Enum(WEEKDAYS.map(String)),
  initialVisibleMonth: 'Function',
  numberOfMonths: 'Number',
  keepOpenOnDateSelect: 'Boolean',
  reopenPickerOnClearDates: 'Boolean',
  renderCalendarInfo: 'Function',
  calendarInfoPosition: Enum([
    INFO_POSITION_TOP,
    INFO_POSITION_BOTTOM,
    INFO_POSITION_BEFORE,
    INFO_POSITION_AFTER,
  ]),
  hideKeyboardShortcutsPanel: 'Boolean',
  verticalHeight: 'Number',
  transitionDuration: 'Number',
  verticalSpacing: 'Number',

  // navigation related props
  navPrev: 'Function',
  navNext: 'Function',
  onPrevMonthClick: 'Function',
  onNextMonthClick: 'Function',

  // day presentation and interaction related props
  renderCalendarDay: 'Function',
  renderDayContents: 'Function',
  minimumNights: 'Number',
  enableOutsideDays: 'Boolean',
  isDayBlocked: 'Function',
  isOutsideRange: 'Function',
  isDayHighlighted: 'Function',

  // internationalization props
  displayFormat: 'Text',
  monthFormat: 'Text',
  weekDayFormat: 'Text',
  // phrases: PropTypes.shape(getPhrasePropTypes(DateRangePickerPhrases)),
  dayAriaLabelFormat: 'Text',
}

DateRangeWrapper.pdResizable = ['width']

export default { DateRangePicker: DateRangeWrapper }
