export default function StickyPlayer() {
  return (
    <div className="fixed bottom-0 w-full p-4 flex justify-center items-center gap-4 bg-white border-t border">
      <button className="bg-black text-white p-2">prev</button>
      <button className="bg-black text-white p-2">play/pause</button>
      <button className="bg-black text-white p-2">next</button>
    </div>
  );
}