import Image from "next/image";
import banner from "@/images/main2.jpeg"; // Ensure this path is correct

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Banner Image */}
      <div className="relative h-[50vh]">
        <Image
          src={banner}
          alt="Banner Image"
          layout="fill" // Ensures the image fills the container
          objectFit="cover" // Ensures the image covers the space
          className="rounded-b-lg"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-extrabold text-white text-center hover:text-yellow-600">About This Blog</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-grow py-8 px-4 max-w-3xl mx-auto space-y-6">
        <section className="space-y-6">
          <p className="text-lg leading-relaxed text-gray-800">
            Welcome to [Blog Name], where we explore life hacks, technology trends, and everything in between. Our goal is to bring you practical advice and ideas that will help you navigate through your daily life with more ease and creativity.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            Our blog covers a wide range of topics from productivity tips, new gadgets, life hacks, to wellness advice. Whether you're a tech enthusiast, a productivity seeker, or just someone looking to make life a little easier, you’ll find something for you here.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            We believe in sharing knowledge, and our mission is to empower you with information that can make a real difference in your life. Our writers are passionate about exploring ways to improve everyday routines, and we are constantly updating our blog to bring you fresh insights.
          </p>
        </section>

        {/* What You Can Expect */}
        <div className="bg-yellow-600 p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What You Can Expect:</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            <li>Practical life hacks to make everyday tasks easier</li>
            <li>The latest news and trends in technology</li>
            <li>In-depth product reviews and recommendations</li>
            <li>Motivational articles to help you live your best life</li>
            <li>Tips on personal growth, productivity, and wellness</li>
          </ul>
        </div>

        {/* Closing Statement */}
        <section className="text-center mt-12">
          <h3 className="text-xl font-semibold text-gray-800">Thank You for Visiting!</h3>
          <p className="mt-4 text-lg text-gray-700">
            We hope you enjoy reading our content and that it inspires you to explore new ideas and better ways of living. Stay tuned for more amazing content coming your way!
          </p>
        </section>
      </div>

    
    </div>
  );
};

export default About;
