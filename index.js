//Made an empty array for the display of input from the user.
var list = []
//selecting input element by id.
var input = document.getElementById('input')
//capturing the value given by the user and storing it in the variable.
var inputValue = input.value
//selecting elements by get element by id.
var add_button = document.getElementById('add_button')
var formDiv = document.getElementById('form_div')
var count = 0
var countTotal = document.createElement('span')
countTotal.setAttribute('class', 'countTotal')
var countCompleted = document.createElement('span')
countCompleted.setAttribute('class', 'countCompleted')
var completedTask = 0

//adding event listener on button.

add_button.addEventListener('click', function (e) {
  //stop page refreshing automatically.
  e.preventDefault()

  var inputValue = input.value

  //pushing the data in the array.

  list.push({
    value: inputValue,
  })
  if (inputValue != '') {
    count++
    // console.log(count)
  }

  countTotal.innerHTML = ' Tasks' + '=' + count
  //clearing screen after task is added.
  input.value = ''
  //creating dynamic list to display tasks.
  var li = document.createElement('li')
  // li.type="checkbox";
  
  //adding class to the dynamically created element.
  li.setAttribute('class', 'list_items')
  //updating the value of the list.

  li.innerHTML = inputValue
  // creating line seperation after each entry
  var line = document.createElement('div')
  // adding class to the line.
  line.setAttribute('class', 'horizontal-line')
  //creating complete button to mark the task as completed.
  var newButtonCompleted = document.createElement('button')
  //adding class to the complete button.
  newButtonCompleted.setAttribute('class', 'buttonCompleted')
  //assigning symbol to the button.
  newButtonCompleted.innerHTML = '<i class="fa-solid fa-check"></i>Completed'
  // creating delete button to delete the task .
  var newButton = document.createElement('button')
  //adding class to the delete button.
  newButton.setAttribute('class', 'js_button')
  //assigning symbol to the button.

  newButton.innerHTML = '<i class="fa-solid fa-trash"></i>Delete'
  //adding click event listener to the complete button.
  newButtonCompleted.addEventListener('click', function () {
    li.setAttribute('class', 'empty')
    completedTask++
    countCompleted.innerHTML = ' Tasks completed' + '=' + completedTask
  })
  //adding click event listener to the delete button.

  newButton.addEventListener('click', function () {
    // console.log("click")
    //after click the list/buttons are set to the empty .
    li.replaceWith('')
    newButton.replaceWith('')
    newButtonCompleted.replaceWith('')
    count--
    countTotal.innerHTML = ' Tasks' + '=' + count
  })
  //appending the dynamically added lists and buttons to the page.

  if (li.innerHTML != '') {
    list_Items.appendChild(li)
    list_Items.appendChild(newButtonCompleted)
    list_Items.appendChild(newButton)
    list_Items.appendChild(line)

    formDiv.appendChild(countTotal)
    formDiv.appendChild(countCompleted)
  }
})
