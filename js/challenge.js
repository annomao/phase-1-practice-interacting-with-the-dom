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
  let baseValues = []
  let likesUl = document.querySelector(".likes")
  like.addEventListener("click",()=>{
    let currentValue = Number(counter.innerText)
    let li = document.createElement("li")
    li.setAttribute("data-index",`${currentValue}`)
    let result = document.querySelector(`li[data-index = '${currentValue}']`)
    if(!result){
      li.innerHTML = `${currentValue} has been liked <span id='${currentValue}'>1 time</span>`
      likesUl.appendChild(li)
    }else{
      let val = document.getElementById(`${currentValue}`)
      console.log(val.innerHTML)
      val.innerHTML = `${parseInt(val.innerHTML) + 1} times`
    }
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