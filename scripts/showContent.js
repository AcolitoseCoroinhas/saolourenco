function showContent(contentId) {
    const content = document.getElementById(contentId + 'Content');
    const defaultImage = document.getElementById('defaultImage');
    const buttons = document.querySelectorAll('.Buttons');

    buttons.forEach(button => {
        button.querySelector('hr').classList.remove('active-hr');
    });

    if (!content.classList.contains('hidden')) {
        content.classList.add('hidden');
        defaultImage.style.display = 'block';
        document.body.style.height = 'auto';
        localStorage.removeItem('activeContent');
    } else {
        document.querySelectorAll('.content').forEach(content => {
            content.classList.add('hidden');
        });
        defaultImage.style.display = 'none';
        content.classList.remove('hidden');
        document.body.style.height = `${content.scrollHeight + 200}px`;
        localStorage.setItem('activeContent', contentId);
        const activeButton = document.querySelector(`.Buttons[onclick="showContent('${contentId}')"]`);
        activeButton.querySelector('hr').classList.add('active-hr');
    }
}
window.onload = function () {
    const activeContent = localStorage.getItem('activeContent');
    if (activeContent) {
        showContent(activeContent);
    }
};
