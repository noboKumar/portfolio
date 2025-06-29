import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center border-t border-gray-500/80 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          @NoboKumar
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
