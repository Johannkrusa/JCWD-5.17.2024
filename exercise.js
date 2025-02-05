// =============== exercise ======================
// query 1
// Given an array nums of size n, return the majority element. The majority element is the element that
// appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

function majorityElement(nums){
    for (i = 0; i <= nums.length-1; i++){
        var counter = nums.length/2;
        for(j = 0; j<= nums.length-1; j++){
            if(nums[i] === nums[j]){
                counter--;
            }
            if(counter < 0){
                return(nums[i]);
            }
        }
    }
    return 0;
}

var nums = [2,2,1,1,1,1,2,2,2];

console.log(majorityElement(nums))

// query 2
// Create a function to convert roman numeral to integer.

function romanToInt(str){
    var dictionary={
        I  : 1,
        IV : 4,
        V  : 5,
        IX : 9,
        X  : 10,
        XL : 40,
        L  : 50,
        XC : 90,
        C  : 100,
        CD : 400,
        D  : 500,
        CM : 900,
        M  : 1000
    };

let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] + str[i + 1] == "IV" || str[i] + str[i + 1] == "IX" ||
            str[i] + str[i + 1] == "XL" || str[i] + str[i + 1] == "XC" ||
            str[i] + str[i + 1] == "CD" || str[i] + str[i + 1] == "CM") {
            result += dictionary[str[i] + str[i + 1]];
            i++; 
        } else {
            result += dictionary[str[i]];
        }
    }

    return result; 
}


var str = "MMXIV";
console.log(romanToInt(str)); // Output: 14

// query 3
// pascal triangle
// Input: numRows = 5
// Output: 
//         [[1]            [[0] // 
//        ,[1,1]          ,[0,1]
//       ,[1,2,1]        ,[0,1,2]   n = n[j-1]+ n[j] 
//      ,[1,3,3,1]      ,[0,1,2,3]
///    ,[1,4,6,4,1]]   ,[0,1,2,3,4]]  

function pascalTriangle(n){
    result = []
    for(i = 0; i<= n-1; i++){
        rows = [];
        for(j = 0; j<= i; j++){
            if (j == 0 || j == i){
                rows.push(1);
            } else{
                value = result[i-1][j-1] + result[i-1][j];
                rows.push(value);
            }
        }
        result.push(rows);
    }
    return result;
}


console.log(pascalTriangle(5))
// query 4
// maximujm profit

function maxProfit(nums){
    tempArr= []
    for(i = 0; i <= nums.length -1; i++ ){
        for(j = i+1; j<= nums.length-1; j++){
            if(nums[i] !== nums[j]){
                tempArr.push(nums[j] - nums[i]);
            }
        }
    }
    tempArr.sort((a,b) => b-a);
    return tempArr[0];
}

//


prices = [7,1,5,3,6,4]

console.log(maxProfit(prices));

// second way of doing it
function maxProfit(nums){
    maxProfit = 0;
    for(i = 0; i <= nums.length -1; i++ ){
        for(j = i+1; j<= nums.length-1; j++){
            if(nums[j] - nums[i] > maxProfit){
                maxProfit = nums[j]-nums[i];
            }
        }
    }
    return maxProfit;
}



var maxProfit3 = function(prices) {
    if (prices.length <= 1) {
        return 0;
    }

    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            let profit = prices[i] - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
};

console.log(maxProfit3(prices));

console.clear();

// find word in a 2d array 
const array2D = [
    //0    1    2    3    4    5    6    7  
    ['W', 'E', 'F', 'P', 'E', 'G', 'R', 'F'], // 0
    ['Q', 'Y', 'E', 'C', 'M', 'T', 'I', 'E'], // 1
    ['Y', 'B', 'A', 'S', 'T', 'F', 'N', 'I'], // 2
    ['T', 'O', 'M', 'I', 'B', 'H', 'F', 'W'], // 3
    ['M', 'Q', 'X', 'R', 'E', 'O', 'R', 'V'], // 4
    ['H', 'L', 'T', 'Y', 'S', 'J', 'G', 'M'], // 5 
    ['T', 'U', 'L', 'F', 'T', 'X', 'D', 'Z'], // 6
    ['E', 'S', 'S', 'R', 'M', 'U', 'A', 'Z']  // 7 
];

var str = "BEST"
function searchWord(array2D, str){
    str = str.toUpperCase();
    for(var col = 0; col < array2D.length; col++){
        for (var row = 0; row < array2D[0].length; row++){ 
            if(array2D[col][row] == str[0]){
                isFound = checkWord(array2D, str, col, row)
                if(isFound){
                    return true;
                }
            }
        }
    }
    return false;
}

function checkWord(array2D, str, col, row){
    isTrue = true;
    let j = 0;
    // horizontal check
    for(let i = row; i<= str.length; i++){
        if(array2D[col][i] !== str[j]){
            return false;
        }
        j++;
    }
   
    // vertical check
    j = 0;
    for(let i = col; i<= str.length; i++){
        if(array2D[i][row] !== str[j]){
            return false;
        }
        j++;
    }

    return true;
}


console.log(searchWord(array2D, str));