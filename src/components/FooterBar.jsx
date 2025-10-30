const FooterBar = () => {
  return (
    <div className="py-4 text-white" style={{ backgroundColor: 'var(--neutral)' }}>
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} CakeCrumbs. All rights reserved.</p> {/* Replace with your website name */}
      </div>
    </div>
  );
};

export default FooterBar;