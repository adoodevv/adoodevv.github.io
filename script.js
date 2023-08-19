const links =
document.querySelectorAll('.link');
links.forEach(link => {
link.addEventListener('mouseover', () => {
    link.style.backgroundColor = '#e74c3c';
});
link.addEventListener('mouseout', () => {
    link.style.backgroundColor = '#3498db';
});
});