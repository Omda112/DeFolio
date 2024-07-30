

var allImages =Array.from(document.querySelectorAll(".work-img img")) 
var lightBox = document.querySelector(".lightbox")
var lightBoxItem = document.querySelector(".lightboxItem")
var closeBtn = document.querySelector("#close")
var prevBtn = document.querySelector("#prev")
var nextBtn = document.querySelector("#next")
var currentIndex;

for(var i=0;i<allImages.length;i++){
    allImages[i].addEventListener("click",function(e){
        var clickedImage = e.target.getAttribute('src')
        currentIndex = allImages.indexOf(e.target)
        lightBox.classList.replace("d-none","d-flex")
        lightBoxItem.style.backgroundImage = `url(${clickedImage})`
    })
}


closeBtn.addEventListener("click",closeSlider)
nextBtn.addEventListener("click",function(){
    slide(1)
})
prevBtn.addEventListener("click",function(){
    slide(-1)
})

// function nextSlide(){
//     currentIndex++;
//     if(currentIndex == allImages.length){
//         currentIndex = 0;
//     }
//     console.log(currentIndex)
//     lightBoxItem.style.backgroundImage = `url(${allImages[currentIndex].getAttribute('src')})`
// }

// function prevSlide(){
//     currentIndex--;
//     if(currentIndex < 0){
//         currentIndex = allImages.length - 1;
//     }
//     console.log(currentIndex)
//     lightBoxItem.style.backgroundImage = `url(${allImages[currentIndex].getAttribute('src')})`
    
// }

function slide(step){
    currentIndex += step
    if(currentIndex == allImages.length){
        currentIndex = 0;
    }
    if(currentIndex < 0){
        currentIndex = allImages.length - 1;
    }
    lightBoxItem.style.backgroundImage = `url(${allImages[currentIndex].getAttribute('src')})`

}

function closeSlider(){
    lightBox.classList.replace("d-flex","d-none")
}