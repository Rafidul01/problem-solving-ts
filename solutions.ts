//Problem 1

const filterEvenNumbers = (array : number[]) : void   => {

    const result : number[]=[];

    array.forEach((element: Number) => {
        if( typeof element === "number"  && element%2 === 0){
            result.push(element);   
        }
    });


    return(console.log(result));
}

filterEvenNumbers([1, 2, 3, 4, 5, 6]);


//Problem 2

const reverseString = (string : string) : string =>{
    const result : string = string.split('').reverse().join('');
    return result
} 

console.log(reverseString("typescript"));