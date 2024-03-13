let boxes = document.querySelectorAll('.box');
let body = document.querySelector('body');

boxes.forEach(function(box){
    console.log(box);
    box.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'box1'){
            body.style.backgroundColor = '#5E1675';
        }
        if(e.target.id === 'box2'){
            body.style.backgroundColor = '#EE4266';
        }
        if(e.target.id === 'box3'){
            body.style.backgroundColor = '#FFD23F';
        }
        if(e.target.id === 'box4'){
            body.style.backgroundColor = '#337357';
        }


    })

});
