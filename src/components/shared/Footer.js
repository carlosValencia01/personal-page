export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer__main">
      <div className="footer__content">
        <p className="footer__text"> &copy; {year} Carlos Valencia</p>
      </div>
    </footer>
  );
};
// TODO: - Add links to linkedin and mail
