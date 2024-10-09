const menuopen=document.getElementById('menuopen')
const deyisclosd=document.getElementById('deyisclosd')

function openmenu(){menuopen.style.display==="none"||menuopen.style.display===''? menuopen.style.display='block':menuopen.style.display==='none'}
function closedmenu(){menuopen.style.display="none"
    let desktopBar = document.getElementById('desktopbar')  
}


function openMenu() {
    let desktopBar = document.getElementById('desktopbar');
    let bagla = document.getElementById('bagla');
   
   
    if (desktopBar.classList.contains('hidden')) {
        desktopBar.classList.remove('hidden');
        desktopBar.classList.add('block');
    } else {
        desktopBar.classList.remove('block');
        desktopBar.classList.add('hidden');
    }
  
}


function handleMenuClick() {
    if (window.innerWidth <= 768) {
        
        openmenu();
    } else {
      
        openMenu();
    }
}


const view = document.getElementById("view")
const img = document.getElementById("img")
const title = document.getElementById("title")
const description = document.getElementById("description")

function handleSubmit(event) {
    event.preventDefault()
    const viewValue = view.value
    const imgValue = img.value
    const titleValue = title.value
    const descValue = description.value

    const descriptionValue = description.value
    if (titleValue.trim().length < 5 || titleValue.trim().length > 64) return alert("Bes qaqa senin titlein sehv var axi")
    if (descValue.trim().length < 5 || descValue.trim().length > 255) return alert("Bes qaqa senin desk-inde sehv var sehv var axi")
   
    const obj = {
        "title": titleValue,
        "img": imgValue,
        "view": viewValue,
        "description": descValue,
    }

    fetch('https://6704e06b031fd46a830dbb27.mockapi.io/oxuaz', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

    getAllData()
}

let XEBER = []
function getAllData() {
    fetch("https://6704e06b031fd46a830dbb27.mockapi.io/oxuaz")
        .then(res => res.json())
        .then(data => {
            XEBER.push(...data)
            show()
        })
}
getAllData()


function deleteXeber(id) {
    fetch(`https://6704e06b031fd46a830dbb27.mockapi.io/oxuaz/${id}`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(data => console.log(data))

    XEBER = XEBER.filter( item => item.id != id)
    show()
}

const cards = document.getElementById("cards")
function show() {
    cards.innerHTML =""
    XEBER.map(item => {
        cards.innerHTML += `
        <div
                class="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-[330px] h-[400px] max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
                <div class="">
                    <img src="${item.img}" class="w-full h-[230px] object-cover" />
                </div>
        
                <div class="p-3">
                    <span class="text-gray-500 font-bold text-sm">🗒 04 okt, 2024 / 12:28</span> <i class="fa-solid fa-eye text-gray-400 pl-4"></i><span class="text-gray-600 p-1 text-sm">${item.view}</span>
                    <p class="mt-4 text-sm text-gray-500 leading-relaxed">
                    ${item.title}
                    </p>
                    <div class="flex justify-between mt-4">
                        <a class="uppercase text-sm tracking-wider  text-blue-400 font-bold" href="">CƏMİYYƏT</a>
                        <div class="flex justify-center items-center">
                            <span class="pr-3 text-gray-600"><i class="fa-regular fa-thumbs-up pr-1"></i>5</span>
                            <i class="fa-regular fa-thumbs-down text-orange-500 pr-1"></i>20
                        </div>
                    </div>
                </div>
            </div>
        
        `

    })
}