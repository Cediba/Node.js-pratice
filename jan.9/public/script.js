console.log('hi');

const myNotes = document.getElementById('my-note');

for (let i=0; i < myNotes.children.length; i++) {
    myNotes.children[i].addEventListener('click', (elem) => {

        if (elem.target.style.backgroundColor === 'yellow'){
            elem.target.style.backgroundColor = 'aquamarine';
        }else{
        elem.target.style.backgroundColor = 'yellow';
        }
    })
}
