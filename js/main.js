let modal = document.querySelector('#modal'),
    shim = document.querySelector('#shim'),
    closeBtn = document.querySelector('#close'),
    btn = document.querySelectorAll('.modal-btn'),
    modalBlock = document.querySelectorAll('.modal-block'),
    speakersImg = document.querySelectorAll('.speakers-img')


closeBtn.addEventListener('click', function () {
    modalClose();
});
shim.addEventListener('click', function() {
    modalClose();
})

for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function (e) {
        modalOpen(e);
    })
}

for (i = 0; i < speakersImg.length; i++) {
    speakersImg[i].addEventListener('click', function (e) {
        modalOpen(e);
    })
}


function modalClose() {
    modal.style.display = 'none';
    shim.style.display = 'none';
    closeBtn.style.display = 'none';
    document.body.style.overflow = 'auto';
    for (i = 0; i < modalBlock.length; i++) {
        modalBlock[i].style.display = 'none';
    }
}

function modalOpen(e) {
    modal.style.display = 'block';
    shim.style.display = 'block';
    closeBtn.style.display = 'block';
    document.body.style.overflow = 'hidden';
    let name = e.target.name;
    document.querySelector('#' + name).style.display = 'block';
}