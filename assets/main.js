let dragItem;
let items = document.querySelectorAll('.item');
let areas = document.querySelectorAll('.area');
for (const item of items) {
    item.addEventListener('dragstart', ()=>{
        dragItem = item;
    })
    
}


for (const area of areas) {

    area.addEventListener('dragover',e=>{
        e.preventDefault();
    })
    area.addEventListener('drop',()=>{
        area.appendChild(dragItem);
    })
}

