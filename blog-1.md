## How Generics Create Reusable and Strictly Typed Code

>Introduction

Generics allow functions, classes, and components to work with multiple data types at the samne time. 
It prevents duplicating code, and keep the code clean. without using generics we may have to duplicate functions again and again. For example

```ts
const getString = (value: string): string => {
  return value;
}

const getNumber = (value: number): number => {
  return value;
}
```
In this code I used two funtion but the funtion are almost same, the only deference is the type of value is defrent.
So here comes generics =>

```ts
function = getValue<T>(value: T) : T => {
  return value;
}

getValue<string>("Hello");
getValue<number>(100);
```
Now the same function works with any type. that is why generics is so powerful.

> Why Generics are Powerful

- Reduce code duplication
- Maintain strict typing
- Build reusable utilities and components
- Improve code maintainability


> conclusion 

Generics allows us to create reusable and strictly typed code. It is typescript's one of the most powerful feature. It ensures that our code is clean and reusable.
