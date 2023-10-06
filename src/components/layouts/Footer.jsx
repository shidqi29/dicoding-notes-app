import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center mt-20 border-t border-current bg-base-300 py-8 text-base-content">
      <aside>
        <p className="text-base">
          Built with ❤ by <span className="font-semibold">Shidqi</span>. The
          source code is available on{" "}
          <a
            href="https://github.com/shidqi29/dicoding-notes-app"
            target="_blank"
            className="underline"
            rel="noreferrer"
          >
            Github
          </a>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
