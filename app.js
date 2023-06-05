var inpvalue = document.getElementById("inp")
var ulvlaue = document.getElementById("ul")


// // ya function delbtn ka ha 
function removeLiTxt(delbtn) {
    console.log(delbtn.parentNode);
    delbtn.parentNode.remove()
}
// // ya function delbtn ka ha 


// // ya function editbtn ka ha 
function EditLiTxt(editbtn) {
    var li = editbtn.parentNode;
    var newValue = prompt('Enter new value:');
    li.firstChild.nodeValue = newValue ;
}
// // ya function editbtn ka ha  


// // ya function li or ul  ka ha  

function AddTask() {

    // // now we are creating list in ul (li) 
    var li = document.createElement("li")

    // // ab ham na es ma text node create kia 
    // // or text node ki jo value ha wo input sa li ha 

    var lival = document.createTextNode(inpvalue.value)

    // // ab ham es ma child append karaien ga 
    // // child append ka matlab ka ham ul ma li ko as a child rakhan ga 

    li.appendChild(lival)



    // //   Delete button ka liya kam  krna ha 
    // //   starting from here

    // //    button create kia 
    var delbtn = document.createElement("button")

    // //    us ma text node add kia 
    var delText = document.createTextNode("DELETE")

    // //ab ham na es ma child append kara diya 
    // // del btn ka appendChild del text ha 
    delbtn.appendChild(delText)


    //  //  es ma class add ki 
    delbtn.setAttribute('class', 'delbtn')

    // //   es m function add kia 
    delbtn.setAttribute('onclick', 'removeLiTxt(this)')

    //  //  us ma child append karaya  
    // // or li ka appendChild delbtn ha 
    li.appendChild(delbtn)

    // //   Delete button ka liya kam  krna ha 
    // //   Ending from here 



    // //   edit button ka liya kam  krna ha 
    // //   starting from here

    // //  butto create kia ham na 

    var editbtn = document.createElement("button")

    // //  ab ham na es ma textNode add karaya  

    var editText = document.createTextNode('EDIT')

    // //  ab hamna editbtn ma child append karaya edittext ko

    editbtn.appendChild(editText)

    //// aba ham na es ma class da di editbtn

    editbtn.setAttribute("class", "EditBtn")

    //// aba ham na es ma function add kia 

    editbtn.setAttribute("onclick", "EditLiTxt(this)");

    //// aba ham na es ma child apppend kara diya  

    li.appendChild(editbtn)

    // //   edit button ka liya kam  krna ha 
    // //   Ending from here 





    // // ab ham ul ma li ko rakhan ga as a child 

    ulvlaue.appendChild(li)

    //// ya sirf input empty krna ki liya ha 

    inp.value = ""

}

// // ya function li or ul  ka ha  

