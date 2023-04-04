// 1-datatype
// let num = 1,
// a = 2,
// b = 3;
// let a = (b=c=3);
// console.log(c, a, b);


// 2-datatype
// console.log(9007199254740992n + 1n); -->bigint 


// 3-datatype --> string '',"", `` mana shu uch xil holatdagi qo'shtirnoq ichida yozilgan ma'lumot turi.

// console.log("Welcome to \"Webbrain\"") --> malumotlarni qo'shtirnoq ichida yozish uchun ishlatiladi. bu ikkitali qo'shtirnoqda backslash yani ==> \ buni ishlatish zarur

// console.log('Welcome to "Webbrain"'); --> bu bittalik qo'shtirnoqda backslashni ishlatish shart emas.

// console.log("Welcome \n to \"Webbrain\""); \n --> slash en malumotlarni bir qator pastga tushirib beradi.

// let name = "Webbrain Academy";
// console.log("Welcome"  + name + ", IT Center"); --> o'zgaruvchi va oddiy malumotlarni birgalikda chiqarish uchun +(plus)dan foydalanamiz.

// let name = "Webbrain Academy";
// console.log(`Welcome to ${name} IT Center`); string bilan birga variable(o'zgaruvchini)ni birga qo'llash uchun ${ozgaruvchi nomi} shu holatda ishlatamiz.

// let name = "Webbrain Academy";
// console.log(typeof name);   ----> typeof - bu o'zgaruvchini turini chiqarib beradi.

// console.log(typeof 1); ---> o'zgaruvchining nomi - number

// console.log(true);
// console.log(false); ---> boolenning qiymatlari

// let a;
// let b = null;
// console.log(typeof a, typeof b); ---> null bilan undefined datatypelarni farqi

// console.log(null === undefined);---> biror narsa borligiga qat'iylik 3ta tenglik bilan aytish.
// console.log(null == undefined); ---> biror narsa yo'qligiga ishonch aytish 2ta == tenglik

// console.log(isNaN(null + 1)); ---> raqam bilan raqam bo'lmaganni birga ishlatish.
// console.log(null + 1); --- nullni qo'yib ketilsa boshqa qandaydir amal bajarish uchun qulay boladi
// console.log(undefined + 1); ----

// let a;
// let b = null; 
// console.log(b + 1);  ----- nullni qoyib ketish keyinchalik foyda beradi
// console.log(a + 1);

// let a;
// let b = null;
// console.log(b === b);--- bu primitive

// let a;
// let b = null;
// console.log({b} === {b});- --- bu esa non-primitive chunki bi objectga o'ralgan.


// let a = Symbol("text");
// let b = Symbol("text");
// console.log(b === a);
// console.log(b == a);---- symbols ishlatish


// Object - Array, Object, function

// let ar = ["Mukhammadimin", 20, "InterNation"];
// let obj = {name:"webbrain", status: "IT Center"};

// let ar = [] ---> arrayning ishlatilishi. Array index bilan chaqiriladi, ma'lumotlar vergul bilan ajratiladi va ma'lumotlar umumiy yoziladi
// let obj = {} ----> objectning ishlatilishi 
// let func = () => {} ---> ikkalasi ham 
// function test(){} ----> functionni kelishi 


// console.log(ar[0]); ---> arrayni ichida indexni ifodalash
// console.log(obj.name); ----> objectni ichida valueni chaqirish


// function test(){
//     console.log(ar[0]);
//     console.log(obj.name);
// }
// test(); ----> Functionni ichidagi ma'lumotni ishlatish 


// -------------   --------------

// let name = "Italiya";
// console.log(name);


// alert(`hello ${1}`);

// alert(`hello ${"name"}`);

// alert( `hello ${name}` );

