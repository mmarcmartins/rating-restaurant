/* All Effects and Focus */

 const menuButton = document.getElementById('menuButton');
 const listMenu = document.getElementById('menuList');

 const toggleClassMenu = () => {

    if(!listMenu.classList.contains('active')){
      listMenu.classList.add('active');
      menuButton.classList.add('active');
    }
    else{
      menuButton.classList.remove('active');
      listMenu.classList.remove('active');
    }

 };

 menuButton.addEventListener('click', toggleClassMenu);
 



const anchors = document.querySelectorAll('.anchor').forEach( each => (each.onclick = anchorLinkHandler));

function anchorLinkHandler(e) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
    toggleClassMenu();
    e.preventDefault();
    const targetID = this.getAttribute("href");
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);

    window.scrollBy({ top: originalTop - 58, left: 0, behavior: "smooth" });

    const checkIfDone = setInterval(function() {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = "-1";                        
            targetAnchor.querySelector('.main-section--title').focus();            
            window.history.pushState("", "", targetID);
            clearInterval(checkIfDone);
        }
    }, 100);    
}






