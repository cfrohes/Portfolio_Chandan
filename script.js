document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for resume sidebar links
    const resumeLinks = document.querySelectorAll('.resume-sidebar a');

    resumeLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust offset as needed
                    behavior: 'smooth'
                });
            }
        });
    });
});
