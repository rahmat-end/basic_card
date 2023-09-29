// console.log("Hello world!");
// alert("Swlamat oagi");
// document.write("Hello world");

// Variable

// VAR
// LET
// CONST

// var bisa di deklarasikan ulang dan diubah valuenya
// var gelas = "Air Putih";
// var gelas = "Kopi";
// gelas = "Susu Kambing Ganyu";

// console.log(gelas);

// let tidak bisa di deklarasikan ulang namun tetap bisa diubah valuenya
// let mangkok = "Bakso";
// mangkok = "Sup Kelelawar";

// console.log(mangkok);

//const tidak bisa di deklarasikan ulang dan tidak bisa diubah valuenya
// const piring = "Nasi Goreng";

// console.log(piring);

// data types
// let nama = "Abel Dustin"; // string
// let age = 25; // number
// let isMarried = false; // bool/boolean

// nama saya Abel Dustin umur saya 25 tahun
// console.log("nama saya Abel Dustin umur saya 25 tahun"); // cara 1 - basic
// console.log(`nama saya ${nama} umur saya ${age} tahun`); // cara 2 - template string/literal
// console.log("nama saya", nama, "umur saya", age, "tahun"); // cara 3 - coma
// console.log("nama saya " + nama + " umur saya " + age + " tahun"); // cara 4 - plus (the most weirdest way to get value)

// operator
// let bilangan1 = 50;
// let bilangan2 = "20";

// let result = bilangan1 + bilangan2;
// console.log(result);

// condition
// jika nilai 75 ke atas, maka dinyatakan lulus

// let nilai = 75;
// // return valuenya adalah boolean (true/false)
// if (nilai >= 75) {
//   console.log("Anda dinyatakan lulus!"); // true
// } else {
//    console.log("Anda belum lulus, coba lagi tahun depan!"); // false
// }

// function
// function Hello() {
//   let x = 50;
//   let y = 20;

//   let result = x + y;
//   console.log(result);
// }

// Hello();

// function with parameters
// function Hello(x, y) {
//   let result = x + y;

//   console.log(result);
//   console.log(x);
//   console.log(y);
// }

// Hello(50, 20);

// membuat sebuah fungsi dengan nama myName dan dengan parameter name

// ParameterDiverser

// function myName(name) {
//   console.log(name);
// }

// myName("Abel Dustin");

function submitData() {
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let number = document.getElementById("input-number").value;
    let subject = document.getElementById("input-subject").value;
    let message = document.getElementById("input-message").value;
  
    // if (name == "" || email == "" || number == "") {
    //   return alert("Form must be filled!");
    // }
  
    if (name === "") {
      return alert("Name must be filled!");
    } else if (email === "") {
      return alert("Email must be filled!");
    } else if (number === "") {
      return alert("Number must be filled!");
    } else if (subject === "") {
      return alert("Subject must be selected!");
    } else if (message === "") {
      return alert("Message must be filled!");
    }
  
    let emailReceiver = "abeldustin06@gmail.com";
  
    // <a href="mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}. Tolong kontak saya di nomor ${number} atau email saya di ${email}"></a>
  
    let a = document.createElement("a");
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}. Tolong kontak saya di nomor ${number} atau email saya di ${email}`;
    a.click();
  
    // https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=${message}
  
    let messagers = {
      nama: name,
      email: email,
      phone_number: number,
      subject: subject,
      message: message,
    };
  
    console.log(messagers);
  }
  