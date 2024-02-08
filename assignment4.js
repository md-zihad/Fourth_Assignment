/*Problem - 1 */
function calculateMoney(ticketSale) {

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
        return 'Invalid Number'
    }

}


/*Problem - 2 */
function checkName(name) {


    if (typeof (name) == 'string') {
        name = name.toLowerCase();
        lastChar = (name.length) - 1;
        console.log(lastChar)
        if (name[lastChar] === 'a' || name[lastChar] === 'y' || name[lastChar] === 'i' || name[lastChar] === 'e' || name[lastChar] === 'o' || name[lastChar] === 'u' || name[lastChar] === 'w') {
            return 'Good Name';
        }
        else {
            return 'Bad Name'
        }
    }
    else {
        return 'Invalid'
    }
}


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
        return 'Invalid array.'
    }
}



/*Problem - 4 */
function password(obj) {
    //write your code here 

    let site = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);



    if (obj.name == null || obj.birthYear == null || obj.birthYear.toString().length < 4 || obj.siteName == null) {
        return 'invalid'
    }

    else {
        console.log('valid')



        generatedPassword = site + '#' + obj.name + "@" + obj.birthYear;

        return generatedPassword;
    }

}



/*Problem - 5 */
function monthlySavings(arr, livingCost) {

    // You have to write your code here
    let sum = 0;

    if (Array.isArray(arr) && typeof (livingCost) === 'number') {

        for (let index = 0; index < arr.length; index++) {
            if (arr[index] >= 3000) {
                arr[index] -= arr[index] * 0.2;

            }

            sum = sum + arr[index]

        }

        if (sum - livingCost === 0) {
            return 0;
        }
        else if (sum - livingCost > 0) {
            return sum - livingCost;

        } else {
            return 'Earn more'

        }
    }
    else {
        return 'Invalid input'
    }
}


