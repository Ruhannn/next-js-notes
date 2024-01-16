async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/1st/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center">You Have to It</h1>
      <div className="mt-4 bg-blue-500 hover:bg-blue-600 p-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-white">{note.title}</h3>
        <h5 className="text-lg mt-2 text-white">{note.content}</h5>
        <p className="text-gray-300 mt-4">Created: {note.created}</p>
      </div>
    </div>
  );
}
