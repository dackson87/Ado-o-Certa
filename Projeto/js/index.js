document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os formulários
    const cadastroForm = document.querySelector('.gray form:nth-child(3)');
    const loginForm = document.querySelector('.gray form:nth-child(6)');

    // Validação do formulário de cadastro
    cadastroForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário

        const nome = cadastroForm.querySelector('input[placeholder="Nome"]').value.trim();
        const email = cadastroForm.querySelector('input[placeholder="Email"]').value.trim();
        const senha = cadastroForm.querySelector('input[placeholder="Senha"]').value.trim();

        if (!nome || !email || !senha) {
            alert('Por favor, preencha todos os campos de cadastro.');
            return;
        }

        if (!validarEmail(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        alert(`Cadastro realizado com sucesso! Bem-vindo(a), ${nome}.`);
        cadastroForm.reset();
    });

    // Validação do formulário de login
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário

        const email = loginForm.querySelector('input[placeholder="Email"]').value.trim();
        const senha = loginForm.querySelector('input[placeholder="Senha"]').value.trim();

        if (!email || !senha) {
            alert('Por favor, preencha todos os campos de login.');
            return;
        }

        if (!validarEmail(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        alert('Login realizado com sucesso!');
        window.location.href = 'info.html'; // Redireciona para a página de informações
    });

    // Função para validar email
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
