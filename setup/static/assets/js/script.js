var main = document.querySelector('main')
var menu = document.querySelector('.header__navbar')
var closeBtn = document.querySelector('.header__navbar-closebtn')
var footer = document.getElementById('footer')
var moving = document.getElementById('moving')
var linksMenu = document.querySelector('.header__navbar-content__links')
var translate = document.querySelector('.header__navbar-content__translate')
var headerNavbarContent = document.querySelector('.header__navbar-content')
var container = document.querySelector('.container')


// var newImage = document.createElement('img')
// newImage.src="blog/img/small-logo.png"
// newImage.classList.add('small-logo')
//menu.appendChild(newImage)


// var btnTranslate = document.getElementById('translate')
var portuguese = document.getElementById('portuguese')
var english = document.getElementById('english')



portuguese.addEventListener('click', ()=> {
  if(portuguese.className != 'enable'){
      portuguese.classList.toggle('enable')  
      english.classList.toggle('enable')
      linksMenu.children[0].textContent = 'SOBRE'    
      linksMenu.children[1].textContent = 'VISUAL' 
      linksMenu.children[2].textContent = 'TEXTOS'
      linksMenu.children[3].textContent = 'AGENDA'
      linksMenu.children[4].textContent = 'FAZ PARTE'
      footer.textContent = 'Rodapé. Logos + Redes Sociais.'

  }    
})

english.addEventListener('click', ()=> {
  if(english.className != 'enable'){
    english.classList.toggle('enable')
    portuguese.classList.toggle('enable')
    linksMenu.children[0].textContent = 'ABOUT'
    linksMenu.children[1].textContent = 'VISUAL'
    linksMenu.children[2].textContent = 'TEXTS'
    linksMenu.children[3].textContent = 'SCHEDULE'
    linksMenu.children[4].textContent = 'GET INVOLVED'
    footer.textContent = 'Footer. Logos + Social Midias.'
  }  
})


var sticky = menu.offsetTop
// document.getElementById("translate").style.paddingRight = "30px";

window.addEventListener('scroll', ()=> {
    // console.log(window.scrollY + ' and ' + sticky)
    if (window.scrollY >= 800) {
      console.log(window.scrollY)
      menu.style.backgroundColor = '#1e1e1e'
      linksMenu.style.backgroundColor = '#1e1e1e'
      linksMenu.children[0].style.color = '#FECE00'
      linksMenu.children[1].style.color = '#FECE00'
      linksMenu.children[2].style.color = '#FECE00'
      linksMenu.children[3].style.color = '#FECE00'
      linksMenu.children[4].style.color = '#FECE00'
      translate.style.backgroundColor = '#1e1e1e'
      headerNavbarContent.style.backgroundColor = '#1e1e1e'
      translate.children[0].style.color = '#FECE00'
      translate.children[1].style.color = '#FECE00'
      translate.children[2].style.color = '#FECE00'
      document.querySelector('.header__navbar-image').classList.add('black-to-yellow')
      document.querySelector('.header__navbar-image').classList.remove('yellow-to-black')
      menu.style.borderBottom = '1px solid black'      
      // portuguese.style.color = '#FECE00'
      // english.style.color = '#FECE00'
      
        // menu.classList.add("sticky");
        // document.getElementById("translate").style.paddingRight = "60px";
        // main.appendChild(newImage)
        // closeBtn.style.backgroundColor = 'transparent'
        
      } else {
        console.log('tchau')
        menu.style.backgroundColor = '#FECE00'
        linksMenu.style.backgroundColor = '#FECE00'
        linksMenu.children[0].style.color = '#1e1e1e'
        linksMenu.children[1].style.color = '#1e1e1e'
        linksMenu.children[2].style.color = '#1e1e1e'
        linksMenu.children[3].style.color = '#1e1e1e'
        linksMenu.children[4].style.color = '#1e1e1e'
        translate.style.backgroundColor = '#FECE00'
        headerNavbarContent.style.backgroundColor = '#FECE00'

        translate.children[0].style.color = '#1e1e1e'
        translate.children[1].style.color = '#1e1e1e'
        translate.children[2].style.color = '#1e1e1e'

        document.querySelector('.header__navbar-image').classList.remove('black-to-yellow')
        document.querySelector('.header__navbar-image').classList.add('yellow-to-black')
        menu.style.borderBottom = '1px solid #FECE00'

        // menu.classList.remove("sticky");        
        // document.getElementById("translate").style.paddingRight = "30px";
        // menu.appendChild(closeBtn)
        // newImage.remove()
        // closeBtn.style.backgroundColor = '#1e1e1e'
        // menu.style.marginTop = '0'
      }
})


linksMenu.children[0].addEventListener('click', ()=> {
  container.children[0].style.display = 'block'
  console.log('oi')
})

var myButtons = document.querySelector('.container-buttons')
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  console.log('dentro do carrossel ' + myIndex) 

  if (myIndex == 1){
    myButtons.children[0].style.backgroundColor = '#FECE00'
    myButtons.children[1].style.backgroundColor = '#F8EEE4'
    myButtons.children[2].style.backgroundColor = '#F8EEE4'
    myButtons.children[3].style.backgroundColor = '#F8EEE4' 
    myButtons.children[4].style.backgroundColor = '#F8EEE4' 
  } else if (myIndex == 2) {
    myButtons.children[0].style.backgroundColor = '#F8EEE4'
    myButtons.children[1].style.backgroundColor = '#FECE00'
    myButtons.children[2].style.backgroundColor = '#F8EEE4'
    myButtons.children[3].style.backgroundColor = '#F8EEE4' 
    myButtons.children[4].style.backgroundColor = '#F8EEE4' 
  } else if (myIndex == 3) {
    myButtons.children[0].style.backgroundColor = '#F8EEE4'
    myButtons.children[1].style.backgroundColor = '#F8EEE4'
    myButtons.children[2].style.backgroundColor = '#FECE00'
    myButtons.children[3].style.backgroundColor = '#F8EEE4' 
    myButtons.children[4].style.backgroundColor = '#F8EEE4' 
  } else if (myIndex == 4) {
    myButtons.children[0].style.backgroundColor = '#F8EEE4'
    myButtons.children[1].style.backgroundColor = '#F8EEE4'
    myButtons.children[2].style.backgroundColor = '#F8EEE4'
    myButtons.children[3].style.backgroundColor = '#FECE00' 
    myButtons.children[4].style.backgroundColor = '#F8EEE4' 
  } else if (myIndex == 5) {
    myButtons.children[0].style.backgroundColor = '#F8EEE4'
    myButtons.children[1].style.backgroundColor = '#F8EEE4'
    myButtons.children[2].style.backgroundColor = '#F8EEE4'
    myButtons.children[3].style.backgroundColor = '#F8EEE4' 
    myButtons.children[4].style.backgroundColor = '#FECE00' 
  }


  

  setTimeout(carousel, 2500); 
    
}

