export default function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button className="absolute top-3 right-3 text-xl text-gray-700" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
