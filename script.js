const links =
document.querySelectorAll('.link');
links.forEach(link => {
link.addEventListener('mouseover', () => {
    link.style.backgroundColor = '#f0f0f0';
});
link.addEventListener('mouseout', () => {
    link.style.backgroundColor = '#3498db';
});
});