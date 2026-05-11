function toggleFAQ(button) {
    const currentItem = button.closest('.faq-item');
    const content = currentItem.querySelector('.faq-content');
    const icon = button.querySelector('.faq-icon');
    
    // Check if the current one is already open
    const isOpen = content.style.maxHeight !== '0px' && content.style.maxHeight !== '';

    // Close all other FAQs first
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== currentItem) {
            const otherContent = item.querySelector('.faq-content');
            const otherIcon = item.querySelector('.faq-icon');
            
            otherContent.style.maxHeight = '0px';
            otherIcon.style.transform = 'rotate(0deg)';
        }
    });

    // Toggle the clicked FAQ with smooth height animation
    if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.style.transform = 'rotate(45deg)';
    } else {
        content.style.maxHeight = '0px';
        icon.style.transform = 'rotate(0deg)';
    }
}