const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const sidebarLinks = sidebar.querySelectorAll('a');


// Toggle the sidebar visibility
menuToggle.addEventListener('click', () =>
{
    sidebar.classList.toggle('active');
    menuToggle.classList.toggle("hidden");

});

// Close the sidebar when clicking outside
sidebar.addEventListener('click', (e) =>
{
    if (e.target === sidebar)
    {
        sidebar.classList.remove('active');
        menuToggle.classList.toggle("hidden");

    }
});

// Colse the sidebar when clicked any of the link
sidebarLinks.forEach(link =>
{
    link.addEventListener('click', () =>
    {
        sidebar.classList.remove('active');
        menuToggle.classList.toggle("hidden");

    });
});
