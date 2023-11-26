let input = document.querySelector(".input");
let addbtn = document.querySelector(".addbtn");
let update = document.querySelector(".update");
let error = document.querySelector(".error");
let list = document.querySelector(".list");
let arr = [] ;

addbtn.addEventListener('click', function(){
    if(!input.value){
        error.innerHTML = "Faka rakha jabe na"
    }else{
        error.innerHTML = "";
        arr.push(input.value) ;
        function commonText (){

            list.innerHTML = "" ;

            arr.map((item,index)=>{
            list.innerHTML += `<li> ${item} <button class='deletebtn'>Delete</button> <button class='editbtn'>Edit</button></li>`;

            let deletebtn = document.querySelectorAll(".deletebtn");
            let deletebtnarr = Array.from(deletebtn) ;
            deletebtnarr.map((deleteitem , deleteindex) =>{
                deleteitem.addEventListener('click', function(){
                    arr.splice(deleteindex,1)
                    console.log(arr);
                    commonText()
                })
            })

            let editbtn = document.querySelectorAll(".editbtn");
            let editbtnArr = Array.from(editbtn);

            editbtnArr.map((eitem, eindex)=>{
                eitem.addEventListener('click', function(){
                    input.value = arr[eindex]
                    input.focus(); 
                    update.style.display = "inline-block";
                    addbtn.style.display = "none";
                    update.addEventListener('click', function(){
                        arr[eindex] = input.value ;
                        commonText();
                        update.style.display = "none";
                        addbtn.style.display = "inline-block";
                    })
                })
            })
        })
        input.value = "" ;
        }
        commonText()
    }
})


