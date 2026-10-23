import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { GrClose } from 'react-icons/gr';
import { providers } from '../constants';

const BookingModal = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Select a provider"
    >
      <div
        className="relative w-full max-w-[420px] rounded-2xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" aria-label="Close" onClick={onClose} className="absolute right-4 top-4">
          <GrClose className="h-[20px] w-[20px]" />
        </button>
        <h3 className="mb-2 text-center font-playfair text-2xl font-semibold text-black">Select Your Provider</h3>
        <p className="mb-6 text-center text-sm text-gray-600">Choose who you would like to book with.</p>
        <div className="flex flex-col gap-4">
          {providers.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="rounded-full border-[1px] border-palette-1 px-8 py-4 text-center font-bold text-palette-1 transition duration-300 hover:bg-palette-1 hover:text-white"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default BookingModal;
