const display = document.getElementById('resultado');
const buttons = document.querySelectorAll('.botao');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (display.innerText === 'Erro!') {
            display.innerText = '';
        }

        if (value === 'C') {
            display.innerText = '';
        } else if (value === '<') {
            display.innerText = display.innerText.slice(0, -1);
        } else if (value === '=') {
            try {
                let expression = display.innerText.replace(/X/g, '*');
                
                if(expression.includes('/0')) {
                    display.innerText = 'Erro!';
                } else {
                    display.innerText = eval(expression);
                }
                
            } catch {
                display.innerText = 'Erro!';
            }
        } else {
            display.innerText += value;
        }
    });
});