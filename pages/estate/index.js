/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
import Agent from "../../components/estate/Agent";
import HeroTab from "../../components/estate/HeroTab";
import Link from "../../components/estate/Link";
import Property from "../../components/estate/Property";
import Testimonial from "../../components/estate/Testimonial";

export default function Estate() {
  return (
    <main className="flex flex-col">
      <nav className="flex px-2 md:px-12 justify-between py-4">
        <span>Logo</span>
        <div id="nav-bar" className="hidden md:flex items-center space-x-8">
          <Link label="Home" active={true} />
          <Link label="Listing" />
          <Link label="Agent" />
          <Link label="About" />
          <Link label="Contact" />
          <a className="bg-yellow-400 text-white py-2 px-6">Log In</a>
        </div>
      </nav>
      <section className="h-[80vh] px-2 md:px-12 bg-yellow-200 p-6 flex items-center">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold">Find Your Dream House With Us</h1>
          <HeroTab />
        </div>
        <div className="w-0 md:w-1/2">
          <img src="/estate/images/house_search.svg" />
        </div>
      </section>
      <section className="flex mt-12 px-2 md:px-12 flex-col items-center">
        <p className="text-4xl text-gray-600">Featured Houses</p>
        <section className="flex space-x-4">
          <Link label="Rent" active={true} />
          <Link label="Buy" />
        </section>
        <section
          style={{ scrollbarWidth: "none" }}
          className="py-6 px-4 space-x-12 overflow-x-auto flex w-full"
        >
          <section className="md:w-[22rem] flex-shrink-0">
            <Property />
          </section>
          <section className="md:w-[22rem] flex-shrink-0">
            <Property />
          </section>

          <section className="md:w-[22rem] flex-shrink-0">
            <Property />
          </section>
          <section className="md:w-[22rem] flex-shrink-0">
            <Property />
          </section>
          <section className="md:w-[22rem] flex-shrink-0">
            <Property />
          </section>
          <section className="md:w-[22rem] flex-shrink-0">
            <Property />
          </section>
        </section>
      </section>
      <section className="flex mt-12 px-2 md:px-12 flex-col items-center">
        <p className="text-4xl text-gray-600">Popular Houses</p>
        <section className="flex space-x-4">
          <Link label="Rent" active={true} />
          <Link label="Buy" />
        </section>
        <section
          style={{ scrollbarWidth: "none" }}
          className="py-6 px-4 space-x-12 overflow-x-auto flex w-full"
        >
          <section className="md:w-[22rem] flex-shrink-0">
            <Property />
          </section>
          <section className="md:w-[22rem] flex-shrink-0">
            <Property />
          </section>

          <section className="md:w-[22rem] flex-shrink-0">
            <Property />
          </section>
          <section className="md:w-[22rem] flex-shrink-0">
            <Property />
          </section>
          <section className="md:w-[22rem] flex-shrink-0">
            <Property />
          </section>
          <section className="md:w-[22rem] flex-shrink-0">
            <Property />
          </section>
        </section>
      </section>
      <section className="flex py-16 items-center">
        <section className="w-0 md:w-5/12 p-6">
          <img src="/estate/images/house_for_sale.svg" />
        </section>
        <section className="w-full md:w-5/12 pr-24 flex flex-col space-y-8 items-center">
          <div className="flex items-center space-x-2">
            <div className="flex justify-center text-red-500 item-center bg-red-200 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div>
              <p className="text-red-500 text-2xl font-bold">
                Strategic Location
              </p>
              <p className="text-sm line-clamp-2 text-gray-600 mt-4">
                Ut nisi laborum consectetur sint ad amet eiusmod cillum minim
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex justify-center text-green-500 item-center bg-green-200 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div>
              <p className="text-green-500 text-2xl font-bold">
                Good Environment
              </p>
              <p className="text-sm line-clamp-2 text-gray-600 mt-4">
                Ut nisi laborum consectetur sint ad amet eiusmod cillum minim
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex justify-center text-yellow-500 item-center bg-yellow-200 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>

            <div>
              <p className="text-yellow-500 text-2xl font-bold">Easy Payment</p>
              <p className="text-sm line-clamp-2 text-gray-600 mt-4">
                Ut nisi laborum consectetur sint ad amet eiusmod cillum minim
              </p>
            </div>
          </div>
        </section>
      </section>
      <section className="flex flex-col px-4 py-10 items-center">
        <p className="text-center text-4xl text-gray-600">
          Trusted by Thousands of
          <br />
          Happy Customers
        </p>
        <p className="text-center mt-4 text-gray-600">
          These are the stories of our customers who have joined us with great
          <br /> pleasure when using our product
        </p>
        <section className="w-full mt-12 flex flex-wrap justify-evenly">
          <section className="md:w-[24rem]">
            <Testimonial />
          </section>
          <section className="md:w-[24rem]">
            <Testimonial />
          </section>
          <section className="md:w-[24rem]">
            <Testimonial />
          </section>
        </section>
      </section>
      <section className="flex flex-col px-4 py-12 items-center">
        <p className="text-center text-4xl text-gray-600">Meet Our Agents</p>
        <p className="text-center mt-4 text-gray-600">
          Find and meet our featured agents
        </p>
        <section className="flex flex-wrap w-full justify-around">
          <div className="w-[20rem] ">
            <Agent />
          </div>
          <div className="w-[20rem] mt-0 md:mt-16">
            <Agent />
          </div>
          <div className="w-[20rem] mt-0 md:mt-32">
            <Agent />
          </div>
        </section>
      </section>
      <section className="mt-8">
        <section className="bg-yellow-200 max-h-[18rem] flex">
          <figure className="w-0 md:w-5/12 flex flex-col justify-end">
            <img src="/estate/images/coming_home.svg"></img>
          </figure>
          <section className="w-full md:w-7/12 flex flex-col space-y-2 p-6 md:p-12">
            <p className="text-gray-700 text-4xl">
              Simple, Cheap
              <br />
              Pricing
            </p>
            <p className="text-gray-700">
              Put Your email address and gey listed
            </p>
            <form className="w-full bg-white p-1 flex rounded-md">
              <input
                className="w-11/12 p-4 outline-none h-12"
                placeholder="Enter your Email"
              ></input>
              <button className="flex-shrink-0 bg-yellow-400 text-white py-3 px-6 rounded-md">
                Get listed
              </button>
            </form>
          </section>
        </section>
      </section>
      <footer className="bg-gray-800 p-4 md:py-24 flex flex-wrap justify-between md:px-36">
        <link rel="stylesheet" href="/estate/fontawesome/css/regular.min.css" />
        <link rel="stylesheet" href="/estate/fontawesome/css/brands.min.css" />
        <link rel="stylesheet" href="/estate/fontawesome/css/fontawesome.min.css" />
        <section className="w-full md:w-2/6">
          <figure>
            <img alt="logo" src="/images/footer-logo.png" />
          </figure>
          <p className="text-white mt-4">
            Join us in the revolution to help Nigerian
            <br /> businesses escape power problems and run
            <br /> more profitably.
          </p>
          <section className="flex mt-8 space-x-4 text-white">
            <a className="text-2xl">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="text-2xl ">
              <i className="fab fa-youtube"></i>
            </a>
            <a className="text-2xl ">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="text-2xl">
              <i className="far fa-envelope"></i>
            </a>
          </section>
        </section>

        <section className="w-full md:w-1/6 mt-8 md:mt-0 flex flex-col space-y-3 text-white">
          <h1 className="font-bold text-2xl">Main Menu</h1>
          <a href="/">Home</a>
          <a href="how_it_works">About</a>
          <a href="contact">Contact Us</a>
          <a href="signin">Sign In</a>
          <a href="/signup">Sign Up</a>
        </section>

        <section className="w-full md:w-2/6 mt-8 md:mt-0 flex flex-col space-y-3 text-white">
          <h1 className="font-bold text-2xl">Contact Us</h1>
          <div>
            <p className="font-semibold">Address</p>
            <p>
              No 13, Abike Jokogbola Street, Sholebo Estate, Ikorodu, Lagos.
            </p>
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <p>info@sunvest.energy</p>
          </div>
          <div>
            <p className="font-semibold">Phone</p>
            <p>+234 816 276 2228</p>
          </div>
        </section>
      </footer>
    </main>
  );
}
