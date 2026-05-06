//Problem 1

const filterEvenNumbers = (array : number[]) : number[]   => {

    const result : number[]=[];

    array.forEach((element: Number) => {
        if( typeof element === "number"  && element%2 === 0){
            result.push(element);   
        }
    });


    return(result);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));


//Problem 2

const reverseString = (string : string) : string =>{
    const result : string = string.split('').reverse().join('');
    return result
} 

console.log(reverseString("typescript"));

//Problem 3

type StringOrNumber = string | number;

const checkType = (value : StringOrNumber) : string =>{
    let result : string = '';
    if(typeof value === "number"){
        result = "Number";
    }else if (typeof value === "string"){
        result = "String";
    }

    return result;
}

console.log(checkType("23"));

//Problem 4

const getProperty = <T, K extends keyof T >(user: T, key: K) : T[K] =>{
    return user[key];
}

const user = { id: 1, name: "John Doe", age: 21 };
console.log(getProperty(user, "name"));
