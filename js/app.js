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


