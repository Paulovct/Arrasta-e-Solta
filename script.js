let areas = {
	a:null,
	b:null,
	c:null
}


// events

document.querySelectorAll(".item").forEach(item =>{
	item.addEventListener("dragstart",dragstart)
	item.addEventListener("dragend",dragend)
})

document.querySelectorAll(".area").forEach(area=>{
	area.addEventListener("dragover" , dragOver)
	area.addEventListener("dragleave" , dragLeave)
	area.addEventListener("drop" , drop)
})

document.querySelector(".neutralArea").addEventListener("dragover", dragOverNeutral) 
document.querySelector(".neutralArea").addEventListener("dragleave", dragLeaveNeutral) 
document.querySelector(".neutralArea").addEventListener("drop", dropNeutral) 
	




//functions
function dragstart(e){
	e.currentTarget.classList.add("dragging")
}


function dragend(e){
	e.currentTarget.classList.remove("dragging")
}

function dragOver(e){
	if(e.currentTarget.querySelector(".item") === null){
		e.preventDefault()
		e.currentTarget.classList.add("hover")
	}
}
function dragLeave(e){
	e.currentTarget.classList.remove("hover")

}
function drop (e){
	e.currentTarget.classList.remove("hover")

	
	if(e.currentTarget.querySelector(".item") === null){
		let dragItem = document.querySelector(".dragging")
		e.currentTarget.appendChild(dragItem)
		updateAreas()
	}
}



//neutral

function dragOverNeutral(e){
	e.preventDefault()
	e.currentTarget.classList.add("hover")
}

function dragLeaveNeutral(e){
	e.currentTarget.classList.remove("hover")
}

function dropNeutral(e){
	e.currentTarget.classList.remove("hover")
	let dragItem = document.querySelector(".dragging")
		e.currentTarget.appendChild(dragItem)
		updateAreas()
}


//logic functions


function updateAreas(){
	document.querySelectorAll(".area").forEach(area=>{
		let name = area.getAttribute("data-name")


		if(area.querySelector(".item") !== null){
			areas[name] = area.querySelector(".item").innerHTML
		} else {
			areas[name] = null;
		}
	})
	if( areas.a === "1" && areas.b === "2" && areas.c === "3" ){
		document.querySelector(".areas").classList.add("correct")
	} else{
		document.querySelector(".areas").classList.remove("correct")
	}
}