import { CONTACT } from '../data/content.js';
import { WhatsAppIcon } from './Icons.jsx';

/** Floating WhatsApp chat button, stacked above the back-to-top ring. */
export default function WhatsAppFloat() {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SMARTANK on WhatsApp (opens in new tab)"
      className="fixed bottom-[95px] right-[24px] z-[999] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
