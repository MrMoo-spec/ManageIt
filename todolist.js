let arr = []

if (JSON.parse(localStorage.getItem('Tasks'))) {
    arr = JSON.parse(localStorage.getItem('Tasks'))
} //Getting data from storage

const savee = task => {
    arr.push(task)
    localStorage.setItem('Tasks',JSON.stringify(arr))
} //saving to storage

const deeleet = task => {
    const index = arr.indexOf(task);
    if(index > -1) {
        arr.splice(index , 1)
    }
    localStorage.setItem('Tasks',JSON.stringify(arr))
} //deleting from storage

window.addEventListener('load',()=>{
    arr.forEach((data)=>{
        const li = document.createElement('li');
        const task = document.createTextNode(data);
        li.appendChild(task);  
        document.querySelector('ul').appendChild(li);
      
    })
}) //Putting list items from storage into ui

const addTaskToUI = 
    e => {
        let ul = document.querySelector('ul')
        if (!ul) { 
             ul = document.createElement('ul')
             document.querySelector('.list').appendChild(ul)
        }
          const li = document.createElement('li');
          const data = document.querySelector('input').value
          savee(data)
          const task = document.createTextNode(data);
          li.appendChild(task);  
          document.querySelector('ul').appendChild(li);
          document.querySelector('input').value = ''
        
    } //adding tasks



document.getElementById('button').addEventListener('click' , addTaskToUI);

document.addEventListener('keypress' , e=>{
    if(e.keyCode===13){
        addTaskToUI(e)
    }
}); //alternate code to add tasks

document.getElementById('buton').addEventListener('click' , e => {
    document.querySelector('ul').remove();
    arr=[]
    localStorage.setItem('Tasks',JSON.stringify(arr))
}); //CLear tasks

document.querySelector('.list').addEventListener('click' , e => {
    e.target.remove()
    deeleet(e.target.textContent)
}) //only one element to delete

document.querySelector('#background').addEventListener('click' , e =>{

    const body = document.querySelector('body');
    body.style.backgroundImage = `url('Images/${Math.ceil(Math.random()*5)}.png')`
}) //change backdrop

document.querySelector('#sort').addEventListener('click' , e => {
    arr.sort()
    localStorage.setItem('Tasks',JSON.stringify(arr))
    location.reload()
}) //Sorting tasks

//Thanks so much!