"use client";

import React, { useState } from "react";

type Comment = {
  id: string; // Using a string ID to ensure uniqueness
  name: string;
  message: string;
};

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleAddComment = () => {
    if (!name || !message) {
      setError("Both name and comment are required!");
      return;
    }

    setError(""); // Clear error if form is valid
    const newComment: Comment = { id: Date.now().toString(), name, message };
    setComments([...comments, newComment]);
    setName("");
    setMessage("");
    setSuccessMessage("Comment added successfully!"); // Confirmation message

    // Reset success message after a few seconds
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-xl ">
      <h2 className="text-xl font-extrabold uppercase mb-4">Comments</h2>

      {/* Display error message */}
      {error && <p className="text-sm text-red-600">{error}</p>}

      {/* Input fields for adding a comment */}
      
      <div className="mb-4 gap-2">
      <div className="gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full p-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Comment"
          className="w-full p-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
        />
        </div>
        <button
          onClick={handleAddComment}
          className="mt-2 px-4 py-2 bg-yellow-600 text-white rounded-2xl hover:bg-yellow-500"
        >
          Add Comment
        </button>
      </div>

      {/* Success message */}
      {successMessage && (
        <p className="text-sm text-green-600 mb-4">{successMessage}</p>
      )}

      {/* Displaying the comments */}
      <div>
        {comments.map((comment) => (
          <div key={comment.id} className="mb-4 p-4 border border-gray-200 rounded-md shadow-sm">
            <p className="text-sm font-semibold">{comment.name}</p>
            <p className="text-gray-700">{comment.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
