function funcjava(){

    const myskills = ['HTML', 'CSS', 'JavaScript', 'php', 'mySql']; 

    function createsquare() {
        sonsquare = document.createElement('div');
        const psonsquare = document.querySelector('#isquare');    
        psonsquare.appendChild(sonsquare);
        sonsquare.id = 'createsquare';
        
        const selsonsquare = document.querySelector('#createsquare');
        selsonsquare.className = 'square';
        selsonsquare.innerHTML = "Hi, I am Sonia Serrano.<br> I love to program because for me is an adventure"//
    }


    const squareabout = document.getElementById('aboutme');
    squareabout.addEventListener('click', createsquare);
}

//Initialize js after dom is loaded
document.addEventListener('DOMContentLoaded', funcjava, false);
