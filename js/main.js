let modal = document.querySelector('#modal'),
    closeBtn = document.querySelector('#close'),
    btn = document.querySelectorAll('.modal-btn'),
    modalBlock = document.querySelectorAll('.modal-block');

function modalClose() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        for (i = 0; i < modalBlock.length; i++) {
            modalBlock[i].style.display = 'none';
        }
        
    }
closeBtn.addEventListener('click', function(){
    modalClose();
});

for(i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function(e) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        let name = e.target.name;
        document.querySelector('#' + name).style.display = 'block';
    })
}

