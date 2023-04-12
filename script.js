function solution(D){

    const daysOfWeek = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

    var countZero=0;
    var amount = 0;
    let i = 1;
    while (i < daysOfWeek.length-1) {
        if(newD[daysOfWeek[i]]==0){
            if(newD[daysOfWeek[i+1]]!=0 && (i+1<daysOfWeek.length-1)){
                newD[daysOfWeek[i]]=((newD[daysOfWeek[i-1]])+(newD[daysOfWeek[i+1]]-newD[daysOfWeek[i-1]])/2);
                // console.log(newD[daysOfWeek[i-1]]);
                // console.log(newD[daysOfWeek[i+1]]);
                // console.log("Effect");
            } else{
                // If there are more than 2 zeroes so this will find no of zeroes
                countZero=1;
                for (let j=i+1;j<daysOfWeek.length-1;j++){
                    if(newD[daysOfWeek[j]]==0 ){
                        countZero += 1;
                    }
                }
                // This j is telling were to stop
                var j= i+countZero;
                // console.log(j,i-1);
                amount = (((newD[daysOfWeek[j]])-(newD[daysOfWeek[i-1]]))/(countZero+1));
                // console.log(amount);
                // console.log(newD[daysOfWeek[j]]);
                // console.log(newD[daysOfWeek[i-1]]);
                // console.log((14-10)/(countZero+1));
                for(let z=i;z<j;z++){
                    newD[daysOfWeek[z]]=newD[daysOfWeek[z-1]]+amount;
                }
                i=j;
            }
        }
        i++;
    }
    return newD
}
// Both test cases are provided in question itself 
const test1 = {'2020-01-01':4,'2020-01-02':4,'2020-01-03':6,'2020-01-04':8,'2020-01-05':2,'2020-01-06':-6,'2020-01-07':2,'2020-01-08':-2}
// Output as per question : - {'Mon': -6,'Tue': 2,'Wed': 2,'Thu': 4,'Fri': 6,'Sat': 8,'Sun': 2}
const test2 = {
    '2020-01-01': 6,
    '2020-01-04': 12,
    '2020-01-05': 14,
    '2020-01-06': 2,
    '2020-01-07': 4
};
// Output as per question of this one : -{'Mon': 2,'Tue': 4,'Wed': 6,'Thu': 8,'Fri': 10,'Sat': 12,'Sun': 14}
const test3={'1970-01-03': -1000000, '1970-01-05': 1000000,'2023-04-16':14500}
const test4={'2022-04-11': 20, '2022-04-12': 30, '2022-04-13': 40, '2022-04-14': 50, '2022-04-15': 60, '2022-04-16': 70, '2022-04-17': 80};
const test5={'2023-04-09': -5, '2023-04-10': 10, '2023-04-11': 0, '2023-04-12': -20, '2023-04-13': 15, '2023-04-14': 25, '2023-04-15': -30}
const test6={'2023-04-08': 2, '2023-04-09': 5, '2023-04-10': 10, '2023-04-11': 0, '2023-04-14': 5, '2023-04-15': 10}
const test7={'2023-04-11': 4, '2023-04-12': 8, '2023-04-13': 10, '2023-04-14': 5, '2023-04-15': 10}
const test8={'2023-04-09': 5, '2023-04-10': 10, '2023-04-11': 20, '2023-04-12': 30, '2023-04-13': 15, '2023-04-14': 25, '2023-04-15': 50}
const test9={'2022-04-04': 10, '2022-04-05': 20, '2022-04-06': 30, '2022-04-07': 40, '2022-04-08': 50, '2022-04-09': 60, '2022-04-10': 70, '2022-04-11': 80, '2022-04-12': 90};
const test10={'2024-01-01':99999,'2020-01-04':8,'2029-01-07':-75632};
console.log("TestCase1 is:",test1)
console.log("Solution is:",solution(test1))
console.log(test2)
console.log("TestCase2 is:",solution(test2))
console.log("TestCase2 is:",solution(test3))
console.log("TestCase2 is:",solution(test4))
console.log("TestCase2 is:",solution(test5))
console.log("TestCase2 is:",solution(test6))
console.log("TestCase2 is:",solution(test7))
console.log("TestCase2 is:",solution(test8))
console.log("TestCase2 is:",solution(test9))
console.log("TestCase2 is:",solution(test10))
