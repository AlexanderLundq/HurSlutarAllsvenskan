// DOM Selection
// DOM = Document Object Model

// The window object is the parent object of the browser
console.log(window);

// Single element

  const form = document.getElementById('my-form');
  console.log(form);

  // Can get anything (tags, classes, etc.)
  // Can only grab single, will grab first one
  document.querySelector('.container');

// Multiple element
  // QuerySelectorAll returns Nodelist
  // Can use array operators on a Nodelist
  const items = document.querySelectorAll('.item');
  console.log(items);

  items.forEach((item) => console.log(item));


  const ul = document.querySelector('.items');

  // Removes the list
  //ul.remove();
  // Removes the last element in the list
  // ul.lastElementChild.remove();
  // Change the first item
  //ul.firstElementChild.textContent = 'Hello';
  // Change an item at an index
  //ul.children[1].innerText = 'Hello again';

  const btn = document.querySelector('.btn');
  // Change the style (CSS)
  btn.style.background = 'red';
  // Events
  /* // Commented out to get events below working
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    // Print click in console when button is clicked
    console.log('click');
    // Change background color when button is clicked
    document.querySelector('#my-form').style.background = '#CCC';
  });
  */

  const myForm      = document.querySelector('#my-form');
  const nameInput   = document.querySelector('#name');
  const emailInput  = document.querySelector('#email');
  const msg         = document.querySelector('.msg');
  const userList    = document.querySelector('#users');

  myForm.addEventListener('submit', onSubmit);

  function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
      msg.classList.add('error');
      msg.innerHTML = 'Please enter all fields';

      setTimeout(() => msg.remove(), 3000);
    }else {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(nameInput.value));
      li.appendChild(document.createTextNode(emailInput.value));
      userList.appendChild(li);

      //Clear fields
      nameInput.value = '';
      emailInput.value = '';
    }

    console.log(nameInput)
  }
