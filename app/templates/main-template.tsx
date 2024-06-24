import Sidebar from "../components/Sidebar";
import StickyPlayer from "../components/StickyPlayer";

export default function MainTemplate() {
  return (
    <main className="w-full h-min-screen bg-white flex">
      <Sidebar />
      <div className="pt-20 p-4">
        <section className="flex flex-col">
          <h1 className="text-5xl bold">tracks</h1>
        </section>
        <section>
          <h1 className="text-5xl bold">playlists</h1>
        </section>
      </div>
      <StickyPlayer />
    </main>
  );
}
