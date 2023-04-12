## PRACTICE

Given a dictionary D where key is of the form YYYY-MM-DD and its corresponding value is a number, returns a new dictionary D such that

The key (type: string) is a Day: [Mon, Tue, Wed, Thu, Fri, Sat, Sun]
and the corresponding value (type: number) is a sum of values on that day
Example:

// input
const inputDictionary = {
  "2020-01-01": 4,
  "2020-01-02": 4,
  "2020-01-03": 6,
  "2020-01-04": 8,
  "2020-01-05": 2,
  "2020-01-06": -6,
  "2020-01-07": 2,
  "2020-01-08": -2
};

/**
* output
{
  'Mon': -6,
  'Tue': 2,
  'Wed': 2,
  'Thu': 4,
  'Fri': 6,
  'Sat': 8,
  'Sun': 2
};
**/
Also, if the input Dictionary doesn't have a particular day then Output Dictionary will have the value of that day as the mean of Prev and Next Day
Example:

// Input Dictionary doesn't have Thu & Fri
const inputDictionary = {
  '2020-01-01': 6,
  '2020-01-04': 12,
  '2020-01-05': 14,
  '2020-01-06': 2,
  '2020-01-07': 4
};

/**
 * Output
 {
  'Mon': 2,
  'Tue': 4,
  'Wed': 6,
  'Thu': 8,
  'Fri': 10,
  'Sat': 12,
  'Sun': 14
 }
**/
Write an efficient algorithm for the following assumptions:

the input dictionary will have at least Mon & Sun
The input dictionary key is a string within the ran [1970-01-01...2100-01-01]
Corresponding values would be numbers within the range [-1,000,000...1,000,000]
