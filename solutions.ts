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




//Problem 2

const reverseString = (string : string) : string =>{
    const result : string = string.split('').reverse().join('');
    return result
} 



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



//Problem 4

const getProperty = <T, K extends keyof T >(user: T, key: K) : T[K] =>{
    return user[key];
}



//Problem 5

interface Book {
    title: string;
    author: string;
    publishedYear: number;
};

type BookWithRead = Book & {isRead? : boolean}


const toggleReadStatus = (book : BookWithRead) : BookWithRead => {

    const result : BookWithRead = {
        ...book,
        isRead: !book.isRead,
    };

    return result;
    
    

}



//Problem 6 

class Person {
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade : string;

    constructor(name: string, age: number, grade: string){
        super(name,age);
        this.grade = grade;
    }

    getDetails(){
        return (`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}




//Problem 7 

const getIntersection = (array1 : number [], array2 : number[]) :  number[]=>{
    const result : number[] = array1.filter((number: number)  => array2.includes(number))

    return result;
}


