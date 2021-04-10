console.log('hi from coder dojo');

function addCheckboxes(){
  var letters = document.getElementById('letters');
  var allLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                   'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                   'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                   'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  shuffle(allLetters).forEach((letter, i) => {
    addCheckbox(letters, letter);
  });
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function addCheckbox(letters, letter) {
  var checkbox = document.createElement('input'); // create a checkbox input
  addAttributes(checkbox, {
    'type': 'checkbox',
    'name': letter,
    'onchange': 'handleChange(this);'
  })
  letters.appendChild(checkbox); // add the checkbox to letters div

  var label = document.createElement('label'); // create a label
  addAttributes(label, {
    'for': letter
  });
  label.innerText = letter; // set the inner text to 'a'
  letters.appendChild(label); // add the checkbox to letters div
}

function handleChange(element) {
  document.getElementById('username').value += element.getAttribute("name");
}

function addAttributes(element, attributesMap) {
  Object.entries(attributesMap).forEach((attributeEntry, i) => {
    element.setAttribute(attributeEntry[0], attributeEntry[1]);
  });
}

function startCountdown() {
  setInterval(countdownOneSecond, 1000);
}

function countdownOneSecond() {
  var currentTimeRemaining = document.getElementById('seconds-remaining').innerText;
  if(currentTimeRemaining > 0) {
    document.getElementById('seconds-remaining').innerText = currentTimeRemaining - 1;
    console.log(currentTimeRemaining);
  } else {
    console.log('RESET FORM!!!');
    document.getElementById('username').value = '';
    location.reload();
  }

  if(currentTimeRemaining <= 4) {
    var opacity = currentTimeRemaining % 2;
    var style = 'color: red; background-color: yellow; text-decoration: blink;'
    style += 'opacity: '+ opacity;
    document.getElementById('countdown').setAttribute('style', style);
  }
}

addCheckboxes();

startCountdown();
