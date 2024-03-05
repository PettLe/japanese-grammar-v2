export default function BackToTopBtn() {
    const isBrowser = () => typeof window !== 'undefined'; // Next.js:n suosittelema lähestymistapa

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 20, behavior: 'smooth' });
    }

    return(
        <html>
        <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,600,1,200" />
        </head>
        <button onClick={scrollToTop} className="fixed bottom-10 right-10 md:right-20 z-50 size-10"><span class="material-symbols-outlined text-orange-400">
        arrow_circle_up
        </span></button>
        </html>
    )
}