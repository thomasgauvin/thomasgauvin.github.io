document.addEventListener("mousemove", parallax);
function parallax(e){

    this.querySelectorAll('.header-image-decoration').forEach(
        layer => { 
            const speed = layer.getAttribute('data-speed');
            const x = (window.innerWidth - e.pageX * speed)/300
            const y = (window.innerHeight - e.pageY * speed)/300
            layer.style.transform = `translateX(${x}px) translateY(${y}px)`
            }
        )
    }
