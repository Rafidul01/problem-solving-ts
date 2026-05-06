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

//Problem 5

interface Book {
    title: string;
    author: string;
    publishedYear: number;
};



const toggleReadStatus = (book : Book) : Book & {isRead : boolean} => {

    const result = {
        ...book,
        isRead : true,
    }

    return result;

}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
console.log(toggleReadStatus(myBook));


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
        return (`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`)
    }
}

const student = new Student("Alice", 20, "A");
console.log(student.getDetails());