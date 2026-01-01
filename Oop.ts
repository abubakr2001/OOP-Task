// inline type annotation
let person: {
  name: string;
  age?: number;
  employee: boolean;
  phoneNumber: {
    primary?: string;
    secondary?: string;
    mobile?: string;
    home?: string;
  }[];
} = {
  name: "Abubakr",
  age: 25,
  employee: true,
  phoneNumber: [
    {
      primary: "010000000",
      secondary: "011111111",
    },
    {
      mobile: "0200",
      home: "1111",
    },
  ],
};
console.log(person.phoneNumber[0]?.secondary);

// type alias
type Employee = {
  name: string;
  age: number;
  employee: boolean;
};
let emp1: Employee = {
  name: "ABubakr",
  age: 30,
  employee: true,
};
console.log(emp1.name);

// Tuple
let student: [string, number, boolean] = ["Abubakr", 25, true];
console.log(student[1]);
console.log(student[2]);

// Function with type annotations
function greeting(name: string) {
  console.log(`my name is ${name}`);
}
greeting("Abubakr");

function calculateDiscount(purchaseSum: number, Discount: number) {
    let puchaseAfterDicount;
    if (purchaseSum >1000) {
        puchaseAfterDicount = purchaseSum - (Discount / 2);
        console.log(`This is price after discount ${puchaseAfterDicount} USD`);
    }else if (purchaseSum >2000) {
        puchaseAfterDicount = purchaseSum - Discount;
        console.log(`This is price after discount ${puchaseAfterDicount}`);
    }else{
        console.log(`You have no discount your price is ${purchaseSum} USD`);
    }
}
calculateDiscount(500, 100);

function calcSum(num1 : number, num2: number):number{
    return num1 + num2;
}
function calaMultiply(number1 :number){
    console.log(number1 * 3);
}
console.log(calcSum(5, 10)); 
calaMultiply(calcSum(5, 10));

// Arrow function
const greet = (name :string) =>{
    console.log(`Hello ${name}`);
}
greet("Abubakr");