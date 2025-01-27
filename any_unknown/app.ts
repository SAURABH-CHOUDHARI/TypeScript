//Any Type
// let a;
//Unknown
// let b:unknown;
// b = "Hritik";
// b =12
//void
// function dc():void{
//     console.log("void function")
// }
// Null
// let a:String | null;
// a = "Hritik"
// a= null

// function fun(): never {
//     console.log("hey")
//     throw new Error("This function never returns")
// }
//Type Interface
// let z =12;
//Type annotations
// let k: number| boolean| string 

// function abcs(a:number,b:boolean):boolean{return true}

//Interfaces and Type Aliases

// interface User{
//     name: string,
//     email: string,
//     password: string,
//     gender?: string //Optional property
// }

// function getDataOfUser (obj:User ){
//     obj.name
//     obj.email
//     obj.password
// }

// getDataOfUser({name:"harsh",email:"sad@cona.com",password:"sjkbfa"})

// Extending Interfaces

// interface User {
//     name: string;
//     email: string;
//     password: string;
// }
// interface admin extends User {
//     admin:boolean;
// }

// function bcdf(obj:admin ) {
//     obj.admin
// }

//Interface Merging
// interface abd{
//     name: string;
// }
// interface abd{
//     email:string;
// }
// function abss(obj:abd){
//     obj.email
//     obj.name
// }

//Type aliases

// type value = string | number | null;

// let s: value

//InterSection Types
