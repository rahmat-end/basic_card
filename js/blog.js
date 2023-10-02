// let namaSiswa1 = "Rizqul";
// let namaSiswa2 = "Lidia";
// let namaSiswa3 = "Putu";

// console.log(namaSiswa1);
// console.log(namaSiswa2);
// console.log(namaSiswa3);

// Array
// let namaSiswa = ["Rizqul", "Lidia", "Putu", "Joko"];
// console.log(namaSiswa);
// console.log(namaSiswa[1]);
// console.log(namaSiswa[2]);

// let nama = "Abel Dustin";
// let alamat = "Tangerang Selatan";
// let umur = 25;

// console.log(nama);
// console.log(alamat);
// console.log(umur);

// object

// let dataPersonal1 = {
//   nama: "Rizqul",
//   alamat: "Margonda",
//   umur: 24,
// };

// let dataPersonal2 = {
//   nama: "Abel Dustin",
//   alamat: "Tangerang Selatan",
//   umur: 25,
// };

// let dataPersonal3 = {
//   nama: "Putu",
//   alamat: "Kendari",
//   umur: 25,
// };

// let dataPersonal4 = {
//   nama: "Ansor",
//   alamat: "Bandung",
//   umur: 20,
// };

// console.log(dataPersonal1.nama);
// console.log(dataPersonal2.alamat);
// console.log(dataPersonal3.umur);
// console.log(dataPersonal4);

// let dataPersonal = [
//   {
//     nama: "Rizqul",
//     alamat: "Margonda",
//     umur: 24,
//   },
//   {
//     nama: ["Abel", "Dustin"],
//     alamat: "Tangerang Selatan",
//     umur: 25,
//   },
//   {
//     nama: "Putu",
//     alamat: "Kendari",
//     umur: 25,
//   },
//   {
//     nama: "Ansor",
//     alamat: "Bandung",
//     umur: 20,
//   },
// ];

// console.log(dataPersonal);
// console.log(dataPersonal[2]);
// console.log(dataPersonal[3].nama);

// let data = [];

// function addData(e) {
//   e.preventDefault();

//   let person = {
//     name: "Samsul",
//     address: "Tangerang",
//   };

//   data.push(person);
//   console.log(data);
// }

// let data = [];

// function addData(e) {
//   e.preventDefault();

//   let blog = {
//     title: document.getElementById("input-blog-title").value,
//     content: document.getElementById("input-blog-content").value,
//   };

//   data.push(blog);
//   for (let index = 0; index < data.length; index++) {
//     console.log(data[index]);
//   }
// }

let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let project = document.getElementById("input-blog-project").value;
  let startDate = new Date(document.getElementById("input-blog-startDate").value);
  let endDate = new Date(document.getElementById("input-blog-endDate").value);
  let duration = monthDiff(startDate, endDate);
  let description = document.getElementById("input-blog-description").value;
  let checkbox1 = document.getElementById("input-blog-checkbox1").checked;
  let checkbox2 = document.getElementById("input-blog-checkbox2").checked;
  let checkbox3 = document.getElementById("input-blog-checkbox3").checked;
  let checkbox4 = document.getElementById("input-blog-checkbox4").checked;
  let image = document.getElementById("input-blog-image").files;

  // untuk membuat url gambar, agar image dapat ditampilkan
  image = URL.createObjectURL(image[0]);
  //   console.log(image);

  let blog = {
    project,
    startDate,
    endDate,
    duration,
    description,
    checkbox1,
    checkbox2,
    checkbox3,
    checkbox4,
    image,
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    console.log(dataBlog[index]);

    document.getElementById("contents").innerHTML += `
        <div class="blog-list-item">
                    <div class="thumb">
                        <img src="${dataBlog[index].image}" alt="Thumbnail">
                    </div>
                    <h4>
                        <a href="blog-detail.html">${dataBlog[index].project}</a>
                    </h4>
                    <p class="duration">durasi : ${dataBlog[index].duration} bulan</p>
                    <p>${dataBlog[index].description}</p>
                    <div class="icon-technology">
                        ${(dataBlog[index].checkbox1 ? `<i class="fa-brands fa-node-js show"></i>` : `<i class="fa-brands fa-node-js"></i>`)}
                        ${(dataBlog[index].checkbox2 ? `<i class="fa-brands fa-react show"></i>` : `<i class="fa-brands fa-react"></i>`)}
                        ${(dataBlog[index].checkbox3 ? `<img src="./image/Nextjs-logo.svg.png" class="next show" alt="Next Js">` : `<img src="./image/Nextjs-logo.svg.png" class="next" alt="Next Js">`)}
                        ${(dataBlog[index].checkbox4 ? `<img src="./image/Typescript_logo_2020.svg.png" class="show" alt="TypeScript">` : `<img src="./image/Typescript_logo_2020.svg.png" alt="TypeScript">`)}
                    </div>
                    <div class="btn-group">
                        <button class="btn-blog">edit</button>
                        <button class="btn-blog">delete</button>
                    </div>
                </div>`;
  }
}

function monthDiff(startDate, endDate) {
    let months;
    months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();
    return months <= 0 ? 0 : months;
}