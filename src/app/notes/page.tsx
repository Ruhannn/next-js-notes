import Link from "next/link";
import CreateNote from "./CreateNote";

async function getNotes() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/1st/records?page=1&perPage=30",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();
  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-8">Notes</h1>
      <div className="flex justify-center items-center flex-wrap gap-4">
        {notes.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
      <div className="mt-40">
        <CreateNote />
      </div>
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {};
  return (
    <>
      <Link href={`/notes/${id}`}>
        <div className="hover:shadow-lg transform hover:scale-105 transition-transform duration-300 bg-red-50 rounded-lg p-4 w-64">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{content}</p>
          <p className="text-gray-500 mt-2">{created}</p>
        </div>
      </Link>
    </>
  );
}
