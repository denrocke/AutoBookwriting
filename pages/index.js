export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Left Menu */}
      <aside className="w-1/5 bg-gray-100 p-4 border-r">
        <h2 className="text-xl font-bold mb-6">AutoBookwriting</h2>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Dashboard</a></li>
          <li><a href="#" className="hover:underline">My Books</a></li>
          <li><a href="#" className="hover:underline">Book Covers</a></li>
          <li><a href="#" className="hover:underline">Description Creator</a></li>
          <li><a href="#" className="hover:underline">Tutorial</a></li>
        </ul>
      </aside>

      {/* Prompt Area */}
      <main className="w-2/5 p-6 border-r overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Prompt Assistant</h1>
        <textarea
          className="w-full h-32 p-4 border rounded"
          placeholder="Enter a prompt like 'Write a book about YouTube marketing'"
        />
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Submit Prompt</button>
      </main>

      {/* Book Editor */}
      <section className="w-2/5 p-6 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Book Content</h2>
        <div className="border p-4 rounded bg-white shadow">
          <p>This is where your AI-generated content will appear.</p>
        </div>
      </section>
    </div>
  );
}