// url = "https://oxuazbackend.vercel.app"
const popup = document.getElementById("popup");
const tbody = document.querySelector("tbody");

function handlePopup() {
  popup.classList.toggle("!top-0");
}
//prosesi dayandrr qirglara basnda isleyr stopP ise ustune basanda baglanmasin deye
function preventClick(e) {
  e.stopPropagation();
}


const title = document.getElementById("title");
const desc = document.getElementById("desc");
const img = document.getElementById("cover");
const date = document.getElementById("date");
const view = document.getElementById("baxis");

function handleSubmit(event){
  event.preventDefault()
  const titleVal = title.value
  const descVal = desc.value
  const coverVal = cover.value
  const dateVal = date.value
  const baxisVal = baxis.value


if(titleVal.length < 5){
  return alert("title 5 herfden kicik ola bilmez!")
}

const obj = {
  "title" : titleVal,
  "img" : coverVal,
  "date" : dateVal,
  "view" : baxisVal,
  "description" : descVal,
} 

fetch("https://6704e06b031fd46a830dbb27.mockapi.io/oxuaz"), {
  method: "POST",
  body: JSON.stringify(obj),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
}
.then(res => res.json())
.then(data => {
  console.log(data);
  handlePopup()
  NEWS.length = 0
  getAllNews()
})

}

let NEWS = []

function getAllNews(){
  fetch("https://6704e06b031fd46a830dbb27.mockapi.io/oxuaz").then(res => res.json())
  .then(data => {
    NEWS.push(...data)
    handleTable()
  }
  )
}
getAllNews()

function handleTable() {
  tbody.innerHTML = "";
  NEWS.map((elem) => {
    tbody.innerHTML += `
            <tr class="border-b border-opacity-20 border-gray-300 bg-gray-50">
                  <td class="p-3 text-red-950"><p>${elem.title}</p></td>
                  <td class="p-3"><p>${elem.description.slice(0, 60)}...</p></td>
                  <td class="p-3"><p>${elem.date}</p></td>
                  <td class="p-3">
                    <p>${elem.view}</p>
                  </td>
                  <td class="p-3 flex gap-2 text-center">
                    <button onclick="deleteNews(${elem.id})" class="bg-red-700 p-[5px] rounded-md text-[#fdfcfc] text-[18px]">remove</button>
                    <button onclick="editNews(${elem.id})" class="bg-blue-800 p-[5px] rounded-md text-[#fdfcfc] text-[18px]">edit</button>
                  </td>
            </tr>
          `;
  });
}

function deleteNews(id){
  fetch(`https://6704e06b031fd46a830dbb27.mockapi.io/oxuaz/${id}`, {
    method: 'DELETE',
  })
  .then(res => res.json()).then(data =>{
    console.log(data);
    NEWS = NEWS.filter(item => item.id != id)
    handleTable()
  })
}

const form = document.getElementById("form")
const button = document.getElementById("button")
function editNews(id){
  const {title: ad , description , img, date: tarix, view} = NEWS.find(item => item.id == id)
  handlePopup()
  title.value = ad
  desc.value = description
  cover.value = img
  date.value = tarix
  baxis.value = view

  form.onsubmit = (event) => {
    event.preventDefault()
    editEle()
  }
}

function editEle(id){
  const titleVal = title.value
  const descVal = desc.value
  const coverVal = cover.value
  const dateVal = date.value
  const baxisVal = baxis.value

  const obj = {
    "title" : titleVal,
    "img" : coverVal,
    "date" : dateVal,
    "view" : baxisVal,
    "description" : descVal,
  } 

  fetch("https://6704e06b031fd46a830dbb27.mockapi.io/oxuaz"), {
    method: "PUT",
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }
  .then(res => res.json())
  .then((data )=> {
    handlePopup()
    NEWS.length = 0
    getAllNews()
  }
  )
}







// const title = document.getElementById("title");
// const desc = document.getElementById("desc");
// const img = document.getElementById("cover");
// const date = document.getElementById("date");
// const view = document.getElementById("baxis");

// //preventDefault --refreshi dayandirmaq ucundu
// function handleSubmit(event) {
//   event.preventDefault();
//   if (title.value.trim().length < 5 || title.value.trim().length > 250) {
//     alert("Başlıq 5 simvoldan çox olmalıdır");
//     return;
//   }
//   if (desc.value.trim().length < 15) {
//     alert("Mətn 15 simvoldan çox olmalıdır");
//     return;
//   }

//   const obj = {
//     title: title.value,
//     img: img.value,
//     description: desc.value,
//     view: view.value,
//     date: date.value,
//   };

//   fetch("https://6704e06b031fd46a830dbb27.mockapi.io/oxuaz", {
//     method: "POST",
//     body: JSON.stringify(obj),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((res) => res.json())
//     .then((json) => console.log(json));

//   getAllData();
//   handleTable()
//   handlePopup();
// }

// let DATA = [];
// function getAllData() {
//   fetch("https://6704e06b031fd46a830dbb27.mockapi.io/oxuaz")
//     .then((res) => res.json())
//     .then((data) => {
//       DATA.push(...data);
//       handleTable();
//     });
// }
// getAllData();

// function deleteX(id) {
//   fetch(`https://6704e06b031fd46a830dbb27.mockapi.io/oxuaz/${id}`, {
//     method: "DELETE",
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
//   DATA = DATA.filter((item) => item.id != id);
//   handleTable();
// }

 //const tbody = document.querySelector("tbody");
// function handleTable() {
//   tbody.innerHTML = "";
//   DATA.map((el) => {
//     tbody.innerHTML += `
//             <tr class="border-b border-opacity-20 border-gray-300 bg-gray-50">
//                   <td class="p-3 text-red-950"><p>${el.title}</p></td>
//                   <td class="p-3"><p>${el.description.slice(0, 60)}...</p></td>
//                   <td class="p-3"><p>${el.date}</p></td>
//                   <td class="p-3">
//                     <p>${el.view}</p>
//                   </td>
//                   <td class="p-3 text-center">
//                     <button onclick="deleteX(${
//                       el.id
//                     })" class="bg-blue-800 p-[5px] rounded-md text-[#fdfcfc] text-[18px]">remove</button>
//                   </td>
//             </tr>
//           `;
//   });
// }
