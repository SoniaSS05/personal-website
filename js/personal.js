function funcjava(){

    function createsquare() {
        sonsquare = document.createElement('div');
        const psonsquare = document.querySelector('#isquare');    
        psonsquare.appendChild(sonsquare);
        sonsquare.id = 'createsquare';
        
        const selsonsquare = document.querySelector('#createsquare');
        selsonsquare.className = 'square';

       // sonsquare.style.cssText = 'background-color: black; width: 80px; height: 100px';
      


        sonsquare.innerHTML = "LOGRADO";

   
/*
        dsquare.fillRect(25,25,100,100);
        dsquare.clearRect(45,45,60,60);
        dsquare.strokeRect(50,50,50,50);
    */    
        console.log( psonsquare);
    }

   

    const square = document.getElementById('aboutme');
    square.addEventListener('click', createsquare);
}


document.addEventListener('DOMContentLoaded', funcjava, false);