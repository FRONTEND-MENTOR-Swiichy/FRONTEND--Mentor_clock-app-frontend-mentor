function showContent() {
    //Function allowing to manage the different addition and removal as well as certain animation
    //ELEMENT 
    const element = document.querySelector('svg');
    const text = document.querySelector('.btn-text');
    const quoteDiv = document.querySelector('.content-quote-gen');
    const contentInformation = document.querySelector('.content-information');
    const slideInformation = document.querySelector('.slide-information');
    const contentInformationTrans = document.querySelector('.content-informationTrans');
    const getContainer = document.querySelector('.container');

    //TOGGLE METHOD
    element.classList.toggle("rotate");
    quoteDiv.classList.toggle("content-quote-gen_none");
    contentInformation.classList.toggle("content-informationTrans");
    slideInformation.classList.toggle("slide-information_show");
    
    if(text.innerHTML === "More") {
        text.innerHTML = "Less";
    } else {
        text.innerHTML = "More";
    } 
}