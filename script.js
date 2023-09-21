const links =
document.querySelectorAll('.link');
links.forEach(link => {
link.addEventListener('mouseover', () => {
    link.style.backgroundColor = '#3498db';
});
link.addEventListener('mouseout', () => {
    link.style.backgroundColor = 'rgb(52, 152, 219, 0.7)';
});
});