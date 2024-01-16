'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const create = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/1st/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    setContent("");
    setTitle("");
    router.refresh();
  };

  return (
    <form
      onSubmit={create}
      className="max-w-md mx-auto mt-8 p-8 bg-white rounded-md shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">Create a new Note</h3>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-white"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-white"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
        Create note
      </button>
    </form>
  );
}
