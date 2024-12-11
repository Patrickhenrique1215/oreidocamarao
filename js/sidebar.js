// Evento para abrir/fechar a sidebar
document.getElementById('toggle-button').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('no-scroll');
});

// Evento para fechar a sidebar ao clicar no overlay
document.getElementById('overlay').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('no-scroll');
});

// Evento para o menu dropdown
document.querySelectorAll('.menu-toggle').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Encontre o submenu mais próximo
        const submenu = this.closest('.item').querySelector('.submenu'); 

        if (submenu) {
            submenu.classList.toggle('active');
            console.log('Dropdown toggled'); // Log para verificar se o evento está funcionando
        } else {
            console.log('Submenu not found'); // Log caso o submenu não esteja sendo encontrado
        }
    });
});
