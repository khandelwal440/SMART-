import { Link } from 'react-router-dom';
import { CONTACT, FOOTER_NAV } from '../data/content.js';
import { LinkedInIcon, WhatsAppIcon } from './Icons.jsx';

export default function Footer() {
  return (
    <footer>
      <div className="bg-navy">
        <div className="container flex flex-col items-center justify-between lg:flex-row">
          <ul className="flex flex-wrap justify-center sm:justify-start md:justify-center lg:justify-start">
            {FOOTER_NAV.map((l) => (
              <li key={l.to} className="sm:mr-0 lg:mr-5 md:mr-2">
                <Link to={l.to} className="block px-2 pb-0 pt-2 text-sm font-normal text-white sm:text-base lg:py-2">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="my-4 flex items-center justify-start font-normal text-white lg:justify-end">
            <li className="mr-5">Connect with us on</li>
            <li className="mr-5">
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp (opens in new tab)" className="text-white">
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </li>
            <li className="mr-5">
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)" className="text-white">
                <LinkedInIcon className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-amber text-sm sm:text-base">
        <div className="container flex flex-col items-center gap-1 py-4 text-center lg:flex-row lg:justify-between lg:text-left">
          <span className="order-2 text-white lg:order-1">© SMARTANK. ALL RIGHTS RESERVED.</span>
          <a href={CONTACT.credit} target="_blank" rel="noopener noreferrer" className="order-1 text-white lg:order-2">
            Designed &amp; Developed by Web Creative Dreams
          </a>
        </div>
      </div>
    </footer>
  );
}
