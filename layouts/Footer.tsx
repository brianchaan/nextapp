import React from 'react';
import { IconContext } from 'react-icons';
import { BsGithub, BsTwitter, BsLinkedin, BsEnvelope } from 'react-icons/bs';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="gap-bottom pt-4 border-t text-sm text-gray-400 flex flex-row">
          <div className="flex-grow">
            &copy; {year} Brian Haan <span className="mx-2">&bull;</span>
            <a href="/terms">Terms of Use</a>{' '}
            <span className="mx-2">&bull;</span>
            <a href="/privacy">Privacy Policy</a>
          </div>
          <div className="flex flex-row">
            <IconContext.Provider value={{ size: '1.25rem' }}>
              <a
                className="text-gray-400"
                href="mailto:brianchaan@gmail.com"
                title="Email"
              >
                <BsEnvelope className="mr-6" />
              </a>
              <a
                className="text-gray-400"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/brianchaan"
                title="Github"
              >
                <BsGithub className="mr-6" />
              </a>
              <a
                className="text-gray-400"
                target="_blank"
                rel="noreferrer"
                href="https://linkedin.com/in/brianchaan"
                title="LinkedIn"
              >
                <BsLinkedin className="mr-6" />
              </a>
              <a
                className="text-gray-400"
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/brianchaan"
                title="Twitter"
              >
                <BsTwitter />
              </a>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </footer>
  );
}
