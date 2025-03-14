export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-foreground/80 mt-28">
      <section className="container h-24 flex justify-between items-center">
        <p>
          <span>&copy; Deep Patel, {currentYear}</span>
        </p>
        <p>Built with Next.js</p>
      </section>
    </footer>
  );
};
