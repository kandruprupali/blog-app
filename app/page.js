import Navbar from "@/components/ui/Navbar"; // Ensure the path is correct and the file exists
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 xl:pt-[5.5rem]">
      {/* <Navbar /> Added Navbar component here */}
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl font-bold">
            A <span className="font-semibold text-red-500">Website</span> for community <br className="hidden lg:block" /> components using <span className="font-semibold text-blue-500 shadow-md">Blog-App</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Blog-App to Write your blogs to shine.
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
              <input type="search" name="query" placeholder="search blogs" required className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />
              <button type="submit" className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image src="/image.png" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" width={500} height={500} />
        </div>
      </section>
      <section className="container px-4 pt-4 pb-10 mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Latest Blogs</h3>
        <p className="mt-4 text-gray-500 dark:text-gray-400">The newest featured Tailwind CSS components and templates from the community</p>
        <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Add your component cards here */}
        </div>
      </section>
      <section>
        <PricingPlans />
      </section>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">© {new Date().getFullYear()} Your Blog Name. All rights reserved.</p>
          <div className="mt-2">
            <a href="/privacy" className="text-gray-400 hover:text-gray-300 mx-2">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-gray-300 mx-2">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

const PricingPlans = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-violet-600 text-center">Pricing Plans</h2>
      <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex-1 m-2 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold text-violet-600">Basic Plan</h2>
          <p className="text-gray-500 mt-2">$10/month</p>
          <ul className="mt-4 space-y-2 flex flex-col items-center">
            <li className="text-gray-700 flex items-center">
              <span className="mr-2">✔️</span> 5 Blog Posts
            </li>
            <li className="text-gray-700 flex items-center">
              <span className="mr-2">✔️</span> Basic Support
            </li>
            <li className="text-gray-700 flex items-center">
              <span className="mr-2">✔️</span> Access to Community
            </li>
          </ul>
          <button className="mt-6 bg-violet-600 text-white py-2 px-4 rounded hover:bg-violet-700 transition">Choose Plan</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex-1 m-2 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold text-violet-600">Standard Plan</h2>
          <p className="text-gray-500 mt-2">$20/month</p>
          <ul className="mt-4 space-y-2">
            <li className="text-gray-700">✔️ 15 Blog Posts</li>
            <li className="text-gray-700">✔️ Priority Support</li>
            <li className="text-gray-700">✔️ Access to Community</li>
            <li className="text-gray-700">✔️ Custom Domain</li>
          </ul>
          <button className="mt-6 bg-violet-600 text-white py-2 px-4 rounded hover:bg-violet-700 transition">Choose Plan</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex-1 m-2 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold text-violet-600">Premium Plan</h2>
          <p className="text-gray-500 mt-2">$30/month</p>
          <ul className="mt-4 space-y-2">
            <li className="text-gray-700">✔️ Unlimited Blog Posts</li>
            <li className="text-gray-700">✔️ 24/7 Support</li>
            <li className="text-gray-700">✔️ Access to Community</li>
            <li className="text-gray-700">✔️ Custom Domain</li>
            <li className="text-gray-700">✔️ SEO Optimization</li>
          </ul>
          <button className="mt-6 bg-violet-600 text-white py-2 px-4 rounded hover:bg-violet-700 transition">Choose Plan</button>
        </div>
      </div>
    </div>
  );
}