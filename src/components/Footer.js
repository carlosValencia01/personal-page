export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer__main">
      <div className="footer__content">
        <p> &copy; {year} Carlos Valencia</p>
      </div>
    </footer>
  );
};
