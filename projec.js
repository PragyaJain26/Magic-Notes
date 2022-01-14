console.log("working")
showNotes();

//IF USER ADDS A NOTE ADD IT TO LOCALSTORAGE
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",function(e){

    let addTxt = document.getElementById("addTxt");
    let notes  = localStorage.getItem("notes"); // for clearing localstorage command is localStorage.clear()
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes)
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    //To clear the nots u have written in add note section after adding it instead of reloading we can clear by this
    addTxt.value = " ";
    // console.log(notesObj)
    showNotes();
})

//SHOW FUNCTION FOR ADDING NOTES 
function showNotes(){
    let notes  = localStorage.getItem("notes"); 
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes)
    }
    let html = " ";
    notesObj.forEach(function(element,index) {
        html+=`<div class=" noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Added Notes ${index+1}</h5>
                        <p class="card-text">${element}</p>
                        <button id="${index}"onclick ="deleteNote(this.id)" class="btn btn-primary">Delete</button>
                    </div>
                </div>`
            });

    let notesElm = document.getElementById("notes");
    if(notesObj.length!=0){
        notesElm.innerHTML=html;
    }
    else{
        //if my note is empty or its length is zero then print this statment
        notesElm.innerHTML=`ADD NOTES THE COLLECTION IS EMPTY!! ADD NOTES FOR VIEWING COLLECTIONS`
    }
}

// FUNCTION TO DELETE NOTES
function deleteNote(index){
    console.log("I m deleting note",index)
    let notes  = localStorage.getItem("notes"); 
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}