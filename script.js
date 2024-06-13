
function switchTheme(theme) {
    document.body.classList.remove('theme-1', 'theme-2', 'theme-3');
    document.body.classList.add(theme);
}

document.getElementById('switch-off').addEventListener('change', function() {
    if (this.checked) {
        switchTheme('theme-1');
    }
});

document.getElementById('switch-middle').addEventListener('change', function() {
    if (this.checked) {
        switchTheme('theme-2');
    }
});

document.getElementById('switch-on').addEventListener('change', function() {
    if (this.checked) {
        switchTheme('theme-3');
    }
});


switchTheme('theme-1');
document.getElementById('switch-off').checked = true;


const resultInput = document.querySelector('.result'); 


function addClickEvents() {
    const teclas = document.querySelectorAll('.tecla');

    teclas.forEach(tecla => {
        tecla.addEventListener('click', () => {
            if (resultInput.value === '0') {
                resultInput.value = ''; 
            }
            if (tecla.textContent === '.') {
                resultInput.value += ',';
            } else {
                resultInput.value += tecla.textContent; 
            }
        });
    });

    const tecla1 = document.querySelector('.tecla1');
    tecla1.addEventListener('click', () => {
        if (resultInput.value === '0') {
            resultInput.value = ''; 
        }
        if (tecla1.textContent === '.') {
            resultInput.value += ','; 
        } else {
            resultInput.value += tecla1.textContent; 
        }
    });

    
    const teclaVirgula = document.querySelector('.teclap');
    teclaVirgula.addEventListener('click', () => {
        if (resultInput.value === '0') {
            resultInput.value = ''; 
        }
        resultInput.value += ','; 
    });

    
    const teclaMinus = document.querySelector('.teclam');
    teclaMinus.addEventListener('click', () => {
        if (resultInput.value === '0') {
            resultInput.value = ''; 
        }
        resultInput.value += '-'; 
    });

    const teclaMulti = document.querySelector('.teclax');
    teclaMulti.addEventListener('click', () => {
        if (resultInput.value === '0') {
            resultInput.value = ''; 
        }
        resultInput.value += '*';
    });
}


function addDelEvent() {
    const delButton = document.querySelector('.delete');
    delButton.addEventListener('click', () => {
       
        let currentValue = resultInput.value;

        
        if (currentValue.length > 0) {
            
            resultInput.value = currentValue.slice(0, -1);
        }
    });
}


function addResetEvent() {
    const resetButton = document.querySelector('.reset');
    resetButton.addEventListener('click', () => {
        resultInput.value = '0'; 
    });
}


function addEqualEvent() {
    const equalButton = document.querySelector('.equal');
    equalButton.addEventListener('click', () => {
        try {
            
            let valor = resultInput.value.replace(/,/g, '.');
            resultInput.value = eval(valor); 
        } catch (error) {
            resultInput.value = 'Error';
        }
    });
}


addClickEvents();


addDelEvent();


addResetEvent();


addEqualEvent();

