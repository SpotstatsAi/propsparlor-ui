import "./globals.css";

export const metadata = {
  title: "PropsParlor",
  description: "NBA Props Analytics Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0B0C10] text-white min-h-screen">
        <header className="w-full border-b border-gray-800 bg-[#0F1115] py-4 px-6 mb-6 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide">PropsParlor</h1>

          <nav className="flex gap-6 text-gray-300">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/games" className="hover:text-white">Games</a>
            <a href="/players" className="hover:text-white">Players</a>
            <a href="/teams" className="hover:text-white">Teams</a>
          </nav>
        </header>

        <main className="px-6">{children}</main>
      </body>
    </html>
  );
}
