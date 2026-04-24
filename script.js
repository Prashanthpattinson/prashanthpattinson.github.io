function navigate(pageId) {
    const pages = document.querySelectorAll('.page');

    pages.forEach(p => {
        p.classList.remove('active');
    });

    setTimeout(() => {
        document.getElementById(pageId).classList.add('active');
    }, 100);
}
