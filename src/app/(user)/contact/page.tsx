// pages/contact.tsx

"use client"
import { useState } from "react";

const contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(""); // To show the success/error message

  // Handle change in the form inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    // Simple validation (you can add more validation here)
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }

    // Here you would send the form data to your API or email service
    // For example, using fetch() or axios to send data to a backend.
    // In this example, we'll just simulate a successful submission:

    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-8">
        <div>
          <label htmlFor="name" className="block   text-lg font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border-b-black  text-yellow-600 rounded-lg"
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2  border-b-black text-yellow-600 rounded-lg "
            placeholder="Your Email"
            required
           
          />
        </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium ">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-2 border-b-black text-yellow-600 rounded-lg"
            rows={4}
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        {/* Status message */}
        {status && <p className={`text-lg ${status.includes("success") ? "text-green-500" : "text-red-500"}`}>{status}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 bg-yellow-600 text-white font-semibold rounded-2xl"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default contact;
