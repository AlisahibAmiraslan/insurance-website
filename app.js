// navbar
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".nav-link");

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    nav.style.backgroundColor = 'rgb(243, 251, 255)';
    for (i = 0; i < navLink.length; i++) {
      navLink[i].style.color = "black";
    }
  } else {
    nav.style.backgroundColor = 'transparent';
    for (i = 0; i < navLink.length; i++) {
      navLink[i].style.color = "black";
    }
  }
});

// navbar

$(document).ready(function () {
  var toggleAdd = $(".slideToggle");
  $(".lorems").css("display", "none");
  toggleAdd.click(function (e) {
    toggleAdd.find(".lorems").slideUp(400);
    $(this).find(".lorems").slideToggle(400);
    e.preventDefault();
  })
});


// info-content

var info_content = document.getElementsByClassName("info-content");
var kutucuk = document.getElementsByTagName("li");


var index = 0;
galeri();
basla();
function galeri() {
  if (index >= info_content.length) {
    index = 0;
  }
  else if (index < 0) {
    index = info_content.length - 1;
  }
  for (i = 0; i < info_content.length; i++) {
    info_content[i].classList.remove("aktif");
    kutucuk[i].classList.remove("aktiflist")

  }
  info_content[index].classList.add("aktif");
  kutucuk[index].classList.add("aktiflist")

}

function ileri() {
  index++;
  galeri();
}
function geri() {
  index--;
  galeri();
}
function dur() {
  clearInterval(sure);
}
function basla() {
  sure = setInterval(ileri, 20000);
}

// readmore

$(document).ready(function () {
  $(".read").click(function () {
    $(this).prev().toggle();
    $(this).siblings('.dots').toggle();
    if ($(this).text() == 'Devamını Oku') {
      $(this).text('Küçült');
    }
    else {
      $(this).text('Devamını Oku');
    }
  });
});
