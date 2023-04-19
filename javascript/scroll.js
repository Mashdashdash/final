const handleScroll = (e) => {
    e.preventDefault();

    const deltaY = e.deltaY;
    currentScroll += deltaY;

    if (currentScroll < 0) {
        currentScroll = 0;
    } else if (currentScroll > scrollFactor) {
        currentScroll = scrollFactor;
    }

    const percentageScrolled = currentScroll / scrollFactor;

    // Update the opacity of the bike lane image based on the percentage scrolled
    bikeLaneImg.style.opacity = percentageScrolled;
};

document.body.style.overflow = 'hidden';
window.addEventListener('wheel', handleScroll);

