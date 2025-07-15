function detectDeviceType(){
    const width=window.innerWidth;
    const output=document.getElementById("device-type");
    const body=document.body;
    body.className='';
    if (width<=480){
        body.classList.add('Mobile');
        output.innerText='📱 you are viewing on a Mobile device(<=480px)';
    }
    else if(width<=768){
    body.classList.add('Tablet');
    output.innerText='📲you are viewing on a Tablet device(481px-768px)';
    }
    else if(width<=1240){
        body.classList.add('laptop');
        output.innerText='💻 you are viewing on a laptop device(761px-1024px)';
    }
    else if (width<=1440){
        body.classList.add('desktop');
        output.innerText='🖥️ you are viewing from a desktop device(1025px-1440px)';
    }
    else {
body.classList.add('large');
output.innerText='🖥️ you are viewing on a large screen(>1440px)';
    }

}
window.addEventListener('load',detectDeviceType);
window.addEventListener('resize',detectDeviceType);

