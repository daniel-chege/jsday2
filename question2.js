//Question Two
 
//Write a JavaScript function that takes a comma-separated numbers as input and returns the sum of those numbers. 
//The function should validate the input:
 
//If any non-numeric characters are present (except commas), treat those values as zero.
//If the input string is empty, return zero.


let zero ="#345%";
let arr = [];
arr = [...zero];
console.log(arr);

let text= arr.toString();
console.log(text);
let result = text.replace("#", "0");
        console.log(result);
        let result1 = result.replace("%", "0");
        console.log(result1);

function valid(result1){
    result1==result1;
            if(result1.length===0){
                return 0;
            }else{
                let myArray =result1.split(",")
                console.log(myArray);
                console.log(
                    myArray.reduce((a, b) => +a + +b, 0)
                  )
                
                /*let total = result1.match(pattern).reduce(function(prev, num) {
                    return prev + +num;
                  }, 0);
                  console.log(total);*/
            }
        }
        console.log(valid(result1));
        

