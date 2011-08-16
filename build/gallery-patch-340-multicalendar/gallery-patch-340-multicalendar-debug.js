YUI.add('gallery-patch-340-multicalendar', function(Y) {

Y.CalendarBase.prototype.initializer = function () {
  this._paneProperties = {};
  this._calendarId = Y.guid('calendar');
  this._selectedDates = {};
  this._rules = {};
  this.storedDateCells = {};
};


}, '@VERSION@' ,{requires:['calendar-base']});
