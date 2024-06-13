document.addEventListener('DOMContentLoaded', function() {

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

    // Inicializando a página com o theme-1 e marcando o switch-off
    switchTheme('theme-1');
    document.getElementById('switch-off').checked = true;
});



document.addEventListener('DOMContentLoaded', function () {
    const resultInput = document.querySelector('.result'); // Seleciona o elemento de resultado

    // Função para adicionar eventos de clique às teclas numéricas e de operação
    function addClickEvents() {
        const teclas = document.querySelectorAll('.tecla');

        teclas.forEach(tecla => {
            tecla.addEventListener('click', () => {
                if (resultInput.value === '0') {
                    resultInput.value = ''; // Limpa o zero inicial ao digitar o primeiro número
                }
                if (tecla.textContent === '.') {
                    resultInput.value += ','; // Substitui o ponto por vírgula
                } else {
                    resultInput.value += tecla.textContent; // Adiciona o valor da tecla ao resultado
                }
            });
        });

        const tecla1 = document.querySelector('.tecla1');
        tecla1.addEventListener('click', () => {
            if (resultInput.value === '0') {
                resultInput.value = ''; // Limpa o zero inicial ao digitar o primeiro número
            }
            if (tecla1.textContent === '.') {
                resultInput.value += ','; // Substitui o ponto por vírgula
            } else {
                resultInput.value += tecla1.textContent; // Adiciona o valor da tecla ao resultado
            }
        });

        // Captura o botão de vírgula (.teclap) e adiciona ao valor do input
        const teclaVirgula = document.querySelector('.teclap');
        teclaVirgula.addEventListener('click', () => {
            if (resultInput.value === '0') {
                resultInput.value = ''; // Limpa o zero inicial ao digitar a primeira vírgula
            }
            resultInput.value += ','; // Adiciona a vírgula ao resultado
        });

        // Captura o sinal de "-" (teclam) e adiciona ao valor do input
        const teclaMinus = document.querySelector('.teclam');
        teclaMinus.addEventListener('click', () => {
            if (resultInput.value === '0') {
                resultInput.value = ''; // Limpa o zero inicial ao digitar o primeiro número
            }
            resultInput.value += '-'; // Adiciona o sinal de subtração ao resultado
        });

        const teclaMulti = document.querySelector('.teclax');
        teclaMulti.addEventListener('click', () => {
            if (resultInput.value === '0') {
                resultInput.value = ''; // Limpa o zero inicial ao digitar o primeiro número
            }
            resultInput.value += '*'; // Adiciona o sinal de subtração ao resultado
        });
    }

    // Função para adicionar evento ao botão DEL
    function addDelEvent() {
        const delButton = document.querySelector('.delete');
        delButton.addEventListener('click', () => {
            // Obtem o valor atual do campo de entrada
            let currentValue = resultInput.value;
    
            // Verifica se há caracteres para deletar
            if (currentValue.length > 0) {
                // Remove o último caractere
                resultInput.value = currentValue.slice(0, -1);
            }
        });
    }
    

    // Função para adicionar evento ao botão RESET
    function addResetEvent() {
        const resetButton = document.querySelector('.reset');
        resetButton.addEventListener('click', () => {
            resultInput.value = '0'; // Reseta o resultado para zero ao clicar em RESET
        });
    }

    // Função para adicionar evento ao botão de igual (=)
    function addEqualEvent() {
        const equalButton = document.querySelector('.equal');
        equalButton.addEventListener('click', () => {
            try {
                // Substitui todas as vírgulas por pontos para usar na função eval()
                let valor = resultInput.value.replace(/,/g, '.');
                resultInput.value = eval(valor); // Calcula a expressão e atualiza o resultado
            } catch (error) {
                resultInput.value = 'Error'; // Caso ocorra um erro na expressão
            }
        });
    }

    // Adiciona os eventos de clique às teclas numéricas e de operação
    addClickEvents();

    // Adiciona evento ao botão DEL
    addDelEvent();

    // Adiciona evento ao botão RESET
    addResetEvent();

    // Adiciona evento ao botão de igual (=)
    addEqualEvent();
});


