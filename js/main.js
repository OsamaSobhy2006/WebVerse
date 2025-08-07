window.addEventListener('scroll', function(){
    var navbar = document.getElementById('navbar')
    if(window.scrollY > 100)
    {
        navbar.classList.add('scrolled')
    }
    else{
        navbar.classList.remove('scrolled')
    }
})


var images = document.querySelectorAll(".item img");
var icons = document.querySelectorAll(".fa-search-plus");

var lightBox = document.getElementById("lightBox");
var lightBoxImg = document.getElementById("lightBoxImg");
var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");
var closeBtn = document.getElementById("closeBtn");

var currentIndex = 0;

for (let i = 0; i < icons.length; i++) {
        icons[i].onclick = function () {
        currentIndex = i;
        showImage(currentIndex);
        lightBox.style.display = "flex";
    };
}

function showImage(index) {
    var src = images[index].getAttribute("src");
    lightBoxImg.src = src;
}

nextBtn.onclick = function () {
    currentIndex++;
    if (currentIndex >= images.length) currentIndex = 0;
    showImage(currentIndex);
};

prevBtn.onclick = function () {
    currentIndex--;
    if (currentIndex < 0) currentIndex = images.length - 1;
    showImage(currentIndex);
};

closeBtn.onclick = function () {
    lightBox.style.display = "none";
};

document.onkeydown = function(e) {
    if (e.key === "ArrowRight") nextBtn.onclick();
    else if (e.key === "ArrowLeft") prevBtn.onclick();
    else if (e.key === "Escape") closeBtn.onclick();
};
