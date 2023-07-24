function changecolor(link){
    link.style = "color: #F68B73"
}
function resetcolor(link){
    link.style.color = "azure"
}

const slides = document.querySelectorAll(".frontimg");
var counter = 0;

slides.forEach(
    (frontimg, index) => {
        frontimg.style.left = `${index*100}%`;
    }
    )

    const goPrev = () => {
        if(counter === 0)
        {
            counter = slides.length-1
        }
        else{counter--}
        slideImage()
    }

    
    const goNext = () => {
        if(counter === slides.length-1)
        {
            counter = 0;
        }
        else{counter++;}
        slideImage()
    }
    const slideImage = () => {

        slides.forEach(
            (frontimg)=> {
                frontimg.style.transform = `translateX(-${counter*100}%)`
            }
        )
    }

    const password = document.getElementById("pass")
    function Check(){
        if(password.length<12)
        {
            password.innerText= "";
            password.style.borderBlockColor = "red"
        }
    }
    
      