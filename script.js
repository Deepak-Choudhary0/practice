
D = {'2020-01-01':4,'2020-01-02':4,'2020-01-03':6,'2020-01-04':8,'2020-01-05':2,'2020-01-06':-6,'2020-01-07':2,'2020-01-08':-2}
const D2 = {
    '2020-01-01': 6,
    '2020-01-04': 12,
    '2020-01-05': 14,
    '2020-01-06': 2,
    '2020-01-07': 4
};
function solution(D){
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // day = d.toString().slice(0,3);
    newD = {
        'Mon': 0,
        'Tue': 0,
        'Wed': 0,
        'Thu': 0,
        'Fri': 0,
        'Sat': 0,
        'Sun': 0
        }
    var key = null;
    for(key in D){
        d = new Date(key);
        day=d.getDay();
        if(day==1){
            newD[daysOfWeek[1]] += D[key]
        } else if(day==2){
            newD[daysOfWeek[2]] += D[key]
        } else if(day==3){
            newD[daysOfWeek[3]] += D[key]
        } else if(day==4){
            newD[daysOfWeek[4]] += D[key]
        } else if(day==5){
            newD[daysOfWeek[5]] += D[key]
        } else if(day==6){
            newD[daysOfWeek[6]] += D[key]
        } else {
            newD[daysOfWeek[0]] += D[key]
        }
    }

    for(datesIndex in daysOfWeek){
        dateName = daysOfWeek[datesIndex]
        if(newD[dateName]==0){
            console.log(dateName)
            newD[daysOfWeek[4]] += D[key]
            // TODO :- here if the zero is only one then we can find simply but if the zeroes are more we will count the no. of zeroes + 1 and divide it to the difference
        }
    }
    return newD
}
console.log(solution(D2))