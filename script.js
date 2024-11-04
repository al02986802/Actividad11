function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');
    
    // Mostrar la sección seleccionada
    document.getElementById(sectionId).style.display = 'block';

    // Resaltar el enlace activo en el menú
    const menuLinks = document.querySelectorAll('#menu a');
    menuLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`#menu a[href='#']`).classList.add('active');
}
