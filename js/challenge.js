document.addEventListener("DOMContentLoaded",()=>{

  let counter = document.querySelector("#counter")

  function incrementSeconds() {
    let seconds = Number(counter.innerText);
    seconds += 1;
    counter.innerText =  seconds ;
  }

  let cancel = setInterval(incrementSeconds, 1000);

//Increment counter manually
  let addNumber = document.querySelector("#plus")
  let removeNumber = document.querySelector("#minus")

  addNumber.addEventListener("click", plus)
  removeNumber.addEventListener("click", minus)

  function plus(){
    let currentValue = Number(counter.innerText)
    currentValue += 1
    counter.innerText = currentValue
  }
  function minus(){
    let currentValue = Number(counter.innerText)
    currentValue -= 1
    counter.innerText = currentValue
  }
//implement like functionality
  let like = document.querySelector("#heart")
  like.addEventListener("click",()=>{
    let baseValues = []
    let currentValue = Number(counter.innerText)
    baseValues.push(currentValue)
    let compareValue = baseValues.at(-2) - currentValue
    

  })
//Implement pause functionality
  let pause = document.querySelector("#pause")
  pause.addEventListener("click", pauseAndResume)
  
  function pauseAndResume(){
    let btnvalue = pause.innerText
    if(btnvalue === "pause"){
      addNumber.disabled = true
      removeNumber.disabled = true
      like.disabled = true
      pause.innerText = "resume"
      clearInterval(cancel)
    }
    else{
      addNumber.disabled = false
      removeNumber.disabled = false
      like.disabled = false
      pause.innerText = "pause"
      cancel = setInterval(incrementSeconds, 1000);
    }
  }

//comment functionality
  const commentForm = document.querySelector("#comment-form")
  commentForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    const comment = commentForm.querySelector("#comment-input").value
    const commentDiv = document.querySelector("#list")
    const li = document.createElement("li")
    li.innerText = comment
    commentDiv.appendChild(li)
    commentForm.reset()
  })

})