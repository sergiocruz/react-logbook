import moment from 'moment';

/**
 * Formats entries from flat array to year by year object.
 * @param  {Array} entries    Array of entry objets
 * @param  {boolean} sortAsc  Sort ascending or descending
 * @return {Object}
 */
export function formatEntries(entries, sortAsc = true) {
  const formatted = {};

  entries.map((entry) =>
      ({
        date: moment(entry.when),
        entry,
      })
    )
    .sort((obj1, obj2) =>
      sortAsc
        ? obj1.date.unix() - obj2.date.unix()
        : obj2.date.unix() - obj1.date.unix()
    )
    .forEach(({ date, entry }) => {
      const year = date.year();

      formatted[year] = formatted[year]
        ? [ ...formatted[year], entry ]
        : [ entry ]
    });

  return Object
    .keys(formatted)
    .sort(
      (year1, year2) => sortAsc
        ? year1 - year2
        : year2 - year1
    )
    .map((year) => ({
      year,
      entries: formatted[year]
    }));
}


/**
 *
  Example:
   [{
     "when": "2015-02-10T18:30:00.927Z",
     "what": "Spoke at University JavaScript Meetup",
     "link": "http://www.meetup.com/University-Tech/events/225262781/",
     "video": ""
   },
   {
     "when": "2016-04-05T01:13:08.927Z",
     "what": "Attended ng-conf 2015",
     "link": "https://www.ng-conf.org",
     "video": ""
   }]

  Becomes:
    [{
      "year": 2015,
      "entries": [{
        "when": "2015-02-10T18:30:00.927Z",
        "what": "Spoke at University JavaScript Meetup",
        "link": "http://www.meetup.com/University-Tech/events/225262781/",
        "video": ""
      }]
    },
    {
      "year": 2016,
      "entries": [{
        "when": "2016-04-05T01:13:08.927Z",
        "what": "Attended ng-conf 2015",
        "link": "https://www.ng-conf.org",
        "video": ""
      }]
    }]
 */
