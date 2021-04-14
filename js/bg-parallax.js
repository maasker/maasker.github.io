document.addEventListener("mousemove", parallax);
const elem = document.querySelector("#parallax");

function parallax(e) {
    let _w = window.innerWidth/2;
    let _h = window.innerHeight/2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.002}% ${50 - (_mouseY - _h) * 0.002}%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.004}% ${50 - (_mouseY - _h) * 0.004}%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.006}% ${50 - (_mouseY - _h) * 0.006}%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;      
    elem.style.backgroundPosition = x;
}
    
   
      
