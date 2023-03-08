const inputElement = document.getElementById('favchap');
const buttonElement = document.querySelector('button');
const listElement = document.getElementById('list');

buttonElement.addEventListener('click', function() {
  const inputText = inputElement.value.trim();
  
  if (inputText !== '') {
    const liElement = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    liElement.textContent = inputText;
    deleteButton.textContent = '❌';
    deleteButton.ariaLabel = 'Close'
    
    liElement.appendChild(deleteButton);
    listElement.appendChild(liElement);
    
    deleteButton.addEventListener('click', function() {
      liElement.remove();
    });
    
    inputElement.focus();
    inputElement.value = '';
  }
});
