/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { useEffect, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

export default function Home() {
  useEffect(() => {
    document.querySelectorAll(".side-nav li").forEach((v) => {
      v.addEventListener("mouseenter", (e) => {
        e.target.classList.add("selected");
      });
      v.addEventListener("mouseleave", (e) => {
        e.target.classList.remove("selected");
      });
    });
  });
  return (
    <>
    <section className="h-screen w-screen lg:hidden p-4 flex justify-center items-center">
      <p className="text-center">View this with desktop(Laptop), Mobile View is yet to be designed.</p>
    </section>
      <main className="lg:flex hidden">
        <section className="w-8/12 bg-[#f8f9fd] p-10 pr-0 flex h-screen">
          <aside className="rounded-3xl pr-4 w-3/12 bg-white shadow flex flex-col justify-between h-full">
            <figure className="p-8">Your Logo here</figure>
            <ul className="flex flex-col space-y-6 side-nav">
              <li>
                <a href="/kl" className="w-full flex">
                  <span className="w-16 icon text-gray-500 rounded-r-lg p-3 flex justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </span>
                  <span className="flex title items-center text-gray-500 pl-4">
                    <p>Home</p>
                  </span>
                </a>
              </li>
              <li className="selected">
                <a href="/kl" className="w-full flex">
                  <span className="w-16 icon text-gray-500 rounded-r-lg p-3 flex justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </span>
                  <span className="flex title items-center text-gray-500 pl-4">
                    <p>Apartments</p>
                  </span>
                </a>
              </li>
              <li>
                <a href="/kl" className="w-full flex">
                  <span className="w-16 icon text-gray-500 rounded-r-lg p-3 flex justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span className="flex title items-center text-gray-500 pl-4">
                    <p>History</p>
                  </span>
                </a>
              </li>
            </ul>
            <div></div>
          </aside>
          <section
            style={{
              scrollbarWidth: "none",
            }}
            className="w-9/12 flex px-6 pt-4 pb-20 overflow-auto h-screen flex-col"
          >
            <p className="text-4xl">👋</p>
            <p className="mt-2 font-bold text-4xl leading-normal">
              Your comfort is our pleasure
            </p>
            <p className="mt-3 text-gray-500 leading-normal">
              Let us take home with you anywhere you go
            </p>
            <section className="flex mt-5 space-x-4">
              <section className="w-8/12 text-gray-600 flex px-3 space-x-2 items-center rounded bg-white border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input className="w-full outline-none" placeholder="Search" />
              </section>
              <button className="p-4 text-white shadow rounded flex justify-center items-center bg-[#f97f67]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </button>
            </section>
            <section className="flex mt-8 flex-col">
              <section className="flex justify-between">
                <p className="font-bold">Popular Destination</p>
                <select className="p-2 border-2 rounded text-sm">
                  <option>All cities</option>
                </select>
              </section>
              <section
                style={{
                  scrollbarWidth: "none",
                }}
                className="flex mt-4 overflow-auto space-x-4"
              >
                <button className="relative flex-shrink-0 w-2/5 h-48">
                  <figure className="relative w-full h-full overflow-hidden rounded-3xl">
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-black"></div>
                    <img
                      alt="apartment"
                      className="w-full h-full object-cover rounded-3xl"
                      src="/images/home.jpg"
                    />
                  </figure>
                  <div className="absolute bottom-0 left-0 ml-4 mb-4">
                    <p className="text-white font-bold">Sheraton Park</p>
                    <div className="text-gray-500 flex items-center space-x-2 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p>Kaduna</p>
                    </div>
                  </div>
                </button>
                <button className="relative flex-shrink-0 w-2/5 h-48">
                  <figure className="relative w-full h-full overflow-hidden rounded-3xl">
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-black"></div>
                    <img
                      alt="apartment"
                      className="w-full h-full object-cover rounded-3xl"
                      src="/images/home.jpg"
                    />
                  </figure>
                  <div className="absolute bottom-0 left-0 ml-4 mb-4">
                    <p className="text-white font-bold">Sheraton Park</p>
                    <div className="text-gray-500 flex items-center space-x-2 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p>Kaduna</p>
                    </div>
                  </div>
                </button>
                <button className="relative flex-shrink-0 w-2/5 h-48">
                  <figure className="relative w-full h-full overflow-hidden rounded-3xl">
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-black"></div>
                    <img
                      alt="apartment"
                      className="w-full h-full object-cover rounded-3xl"
                      src="/images/home.jpg"
                    />
                  </figure>
                  <div className="absolute bottom-0 left-0 ml-4 mb-4">
                    <p className="text-white font-bold">Sheraton Park</p>
                    <div className="text-gray-500 flex items-center space-x-2 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p>Kaduna</p>
                    </div>
                  </div>
                </button>
              </section>
              <section className="flex mt-2 justify-end">
                <div className="flex">
                  <button className="p-2">
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
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                  </button>
                  <button className="p-2">
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
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </section>
              <section className="flex mt-8 flex-col">
                <strong>Previous Bookings</strong>
                <section className="flex">
                  <figure className="py-2 w-1/4 h-32 pr-2">
                    <img
                      alt="war"
                      src="/images/home.jpg"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </figure>
                  <section className="w-2/4 flex items-center">
                    <div>
                      <p className="font-bold text-2xl">Sheraton Park</p>
                      <div className="text-gray-500 flex items-center space-x-2 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p>Kaduna</p>
                      </div>
                    </div>
                  </section>
                  <section className="w-1/4 flex items-center">
                    <div>
                      <p className="text-xl text-green-500">$5000</p>
                      <button className="flex items-center text-[#f97f67] space-x-2">
                        <p>Book again</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </section>
                </section>
                <section className="flex">
                  <figure className="py-2 w-1/4 h-32 pr-2">
                    <img
                      alt="war"
                      src="/images/home.jpg"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </figure>
                  <section className="w-2/4 flex items-center">
                    <div>
                      <p className="font-bold text-2xl">Sheraton Park</p>
                      <div className="text-gray-500 flex items-center space-x-2 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p>Kaduna</p>
                      </div>
                    </div>
                  </section>
                  <section className="w-1/4 flex items-center">
                    <div>
                      <p className="text-xl text-green-500">$5000</p>
                      <button className="flex items-center text-[#f97f67] space-x-2">
                        <p>Book again</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
        <section className="w-4/12 bg-white rounded-full py-8 px-8 h-screen">
          <section className="flex justify-end space-x-3">
            <button className="w-8 h-8 flex justify-center items-center text-purple-600 rounded-full bg-purple-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </button>
            <figure className="w-8 h-8 overflow-hidden">
              <img
                alt="cscs"
                src="/images/profile.png"
                className="object-cover h-full w-full"
              />
            </figure>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className="flex text-gray-500 space-x-1 items-center">
                    <p className="font-bold text-sm">Aiges Aigbor</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={4}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    show={open}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute bg-white w-44 py-8 shadow rounded-lg z-10 max-w-sm px-4 mt-8 transform -translate-x-1/2">
                      <ul className="flex flex-col items-center">
                        <li>
                          <button className="hover:text-purple-500">
                            Log Out
                          </button>
                        </li>
                      </ul>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </section>
          <section className="mt-8">
            <h1 className="text-xl font-medium">Today Top Cities</h1>
            <section className="flex">
              <figure className="w-1/2 h-5/12 py-6 pr-4">
                <img
                alt="vfdjvjkfd"
                  src="/images/home.jpg"
                  className="rounded-lg h-full object-cover w-full"
                />
              </figure>
              <section className="w-1/2 py-4 flex flex-col">
                <p className="font-bold text-2xl">Melrinda Villa</p>
                <div className="flex space-x-2 mt-3">
                  <span className="p-2 text-purple-500 bg-purple-100 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <p>Fin Singapore</p>
                </div>
                <div className="flex space-x-4 mt-2 text-gray-500">
                  <div className="flex space-x-1 text-sm items-center">
                    <p>4.7</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p>|</p>
                  <p>197 guest</p>
                </div>
                <div className="flex mt-3 space-x-4">
                  <div>
                    <p className="font-bold text-sm">Price</p>
                    <p className="text-green-500 text-xl">$5000</p>
                  </div>
                  <button className="bg-[#f97f67] text-white  rounded p-2">
                    Book Hotel
                  </button>
                </div>
              </section>
            </section>
          </section>
          <section className="flex justify-around">
            <div className=" w-28 h-24">
              <figure className="w-full overflow-hidden rounded-3xl h-full">
                <img
                alt="vfdjvjkfd"
                  src="/images/home.jpg"
                  className=" h-full object-cover w-full"
                />
              </figure>
            </div>
            <div className="w-28 h-24">
              <figure className="rounded-3xl overflow-hidden w-full h-full">
                <img
                alt="vfdjvjkfd"
                  src="/images/home.jpg"
                  className=" h-full object-cover w-full"
                />
              </figure>
            </div>
            <div className="w-28  h-24">
              <figure className="relative rounded-3xl overflow-hidden w-full h-full">
                <div className="absolute flex justify-center items-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-40">
                  <p className="text-white font-bold text-lg">+3</p>
                </div>
                <img
                alt="vfdjvjkfd"
                  src="/images/home.jpg"
                  className=" h-full object-cover w-full"
                />
              </figure>
            </div>
          </section>
          <section className="flex mt-4 flex-col">
            <h1 className="font-bold">Description</h1>
            <p className="text-sm text-gray-500 mt-2">
              Lorem nisi est commodo duis officia voluptate Lorem voluptate.
              Cupidatat commodo minim excepteur commodo tempor sint culpa esse
              elit. Eiusmod sit dolor cupidatat tempor. Quis nulla pariatur
            </p>
          </section>
        </section>
      </main>
    </>
  );
}
