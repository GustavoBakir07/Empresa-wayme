// Registro de Usuário
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username]) {
        document.getElementById('registerMessage').textContent = 'Usuário já cadastrado!';
    } else {
        users[username] = password; 
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('registerMessage').textContent = 'Usuário cadastrado com sucesso!';
    }
});

// Login de Usuário
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username] && users[username] === password) {
        document.getElementById('loginMessage').textContent = 'Login bem-sucedido!';
        
        window.location.href = 'index3.html'; 
    } else {
        document.getElementById('loginMessage').textContent = 'Usuário ou senha incorretos!';
    }
});
