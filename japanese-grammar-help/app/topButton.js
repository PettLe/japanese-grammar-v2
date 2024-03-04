export default function BackToTopBtn() {
    const isBrowser = () => typeof window !== 'undefined'; // Next.js:n suosittelema lähestymistapa

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 20, behavior: 'smooth' });
    }

    return(
        <button onClick={scrollToTop} className="fixed bottom-10 right-10 z-50">Back to top</button>
    )
}