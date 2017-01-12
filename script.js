var list = document.querySelectorAll('.button'),
    screen = document.getElementById('screen'),
    prevAns = [];

function clearTotal() {
	return function() {
  	screen.innerHTML = '';
  }
}

function clearOne() {
	return function() {
  	screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
  }
}

function percent(i) {
  return function() {
    var result = screen.innerHTML * 100;
    screen.innerHTML = result + '%';
  }
}

function ans() {
  return function() {
    console.log(prevAns);
    screen.innerHTML += prevAns[0];
  }
}

function addNumber(i) {
	return function() {
  	if (list[i].innerHTML === 'x') {
    	screen.innerHTML += '*';
    } else if (list[i].innerHTML === '÷') {
    	screen.innerHTML += '/';
    } else {
      screen.innerHTML += list[i].innerHTML;
    }
  }
}

function calculate() {
	return function() {
  	screen.innerHTML = eval(screen.innerHTML);
    //prevAns.push(screen.innerHTML);
    prevAns[0] = screen.innerHTML;
    console.log(prevAns);
  }
}

for (var i = 0; i < list.length; i++) {
  
	if (list[i].innerHTML === '=') {
  	list[i].addEventListener('click', calculate(i));  	
  } else if (list[i].innerHTML === 'AC') {
  	list[i].addEventListener('click', clearTotal());
  } else if (list[i].innerHTML === 'CE') {
  	list[i].addEventListener('click', clearOne(i));
  } else if (list[i].innerHTML === 'ANS') {
  	list[i].addEventListener('click', ans(prevAns));
  } else if (list[i].innerHTML === '%') {
    console.log('working');
    list[i].addEventListener('click', percent(i));
  } else {
    list[i].addEventListener('click', addNumber(i));
  }
}