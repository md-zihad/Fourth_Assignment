/*Problem - 1 */
function calculateMoney(ticketSale) {

    // You have to write your code here
    if (ticketSale > 0) {
        const ticketPrice = 120;
        const lunchCost = 50 * 8;
        const gatemanCost = 500;

        return ((ticketPrice * ticketSale) - (lunchCost + gatemanCost));
    }
    else if (ticketSale == 0) {
        return 0;
    }

    else {
        return 'invalid'
    }

}

calculateMoney(20);



/*Problem - 2 */
function checkName(name) {

    //write your code here
    if (typeof (name) == 'string') {
        lastChar = (name.length) - 1;
        console.log(lastChar)
        if (name[lastChar] === 'a' || name[lastChar] === 'y' || name[lastChar] === 'i' || name[lastChar] === 'e' || name[lastChar] === 'o' || name[lastChar] === 'u' || name[lastChar] === 'w') {
            return 'good';
        }
        else {
            return 'bad'
        }
    }
    else {
        return 'invalid'
    }
}

checkName('Salman')





/* Problem - 3*/
function deleteInvalids(array) {

    // You have to write your code here

    if (Array.isArray(array)) {
        console.log(array)
        const newArray = [];
        for (let index = 0; index < array.length; index++) {
            if (typeof (array[index]) === 'number') {

                if (!isNaN(array[index])) {
                    newArray.push(array[index]);
                }

            }

        }
        return newArray;
        
    }
    else {
        return 'invalid array.'
    }
}

deleteInvalids([1, 2,-9, 3, undefined, 4, 5, NaN, 'f', 'e'])






/*Problem - 4 */
function password(obj) {
    //write your code here 



}








/*Problem - 5 */
function monthlySavings(arr , livingCost) {

    // You have to write your code here
    let sum = 0;

    if (Array.isArray(arr) && typeof(livingCost)==='number') {
        
        for (let index = 0; index < arr.length; index++) {
            if (arr[index]>=3000) {
                arr[index] -= arr[index] * 0.2;
                
            }

            sum = sum + arr[index]
            
        }

        if (sum-livingCost===0) {
            return 0;
        }
        else if (sum-livingCost>0) {
            return sum-livingCost;
            
        } else {
            return 'earn more'
            
        }

        // console.log(arr)
        // console.log(sum)
        // console.log(sum-livingCost)

        


    }
    else{
        return 'invalid'
    }



}


monthlySavings(100, [ 900 , 2700 , 3400])