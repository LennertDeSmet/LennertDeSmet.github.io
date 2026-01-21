function renderNavbar() {
    const navbarContainer = document.getElementById('navbar');
    if (!navbarContainer) return;

    const currentPath = window.location.pathname;
    // Handle simplified paths if hosted or local
    const isHome = currentPath.endsWith('index.html') || currentPath.endsWith('/');
    const isPubs = currentPath.includes('publications.html');
    const isBlog = currentPath.includes('blog.html');
    const isResources = currentPath.includes('resources.html');

    const links = [
        { name: 'Home', url: 'index.html', active: isHome },
        { name: 'Publications', url: 'publications.html', active: isPubs },
        { name: 'Blog', url: 'blog.html', active: isBlog },
        { name: 'Resources', url: 'resources.html', active: isResources }
    ];

    const navElement = document.createElement('nav');
    navElement.className = 'w3-container w3-padding-16 w3-center'; // Center align like the header

    links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.name;
        a.className = 'nav-link';
        if (link.active) {
            a.classList.add('active');
        }
        navElement.appendChild(a);
    });

    navbarContainer.appendChild(navElement);
}

document.addEventListener('DOMContentLoaded', renderNavbar);
