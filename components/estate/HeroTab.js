import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
function HeroTabItem({ name }) {
  return (
    <Menu as="div" className="flex-col relative flex items-center">
      <Menu.Button className="flex">
        <p>{name}</p>
        <span>
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute bg-white p-2 w-56 shadow-xl rounded mt-12">
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && "bg-blue-500"}`}
                href="/account-settings"
              >
                Account settings
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
      <p className="text-gray-400">Abuja</p>
    </Menu>
  );
}
export default function HeroTab() {
  return (
    <section className="mt-12">
      <section className="flex">
        <button className="bg-yellow-400 text-white py-2 px-6 rounded-tl-md">
          Rent
        </button>
        <button className="bg-white py-2 px-6 rounded-tr-md">Buy</button>
      </section>
      <section className="rounded-bl-lg md:w-10/12 flex-col md:flex-row rounded-r-lg space-y-4 md:space-y-0 md:space-x-4 justify-between shadow-sm bg-white p-4 flex">
        <HeroTabItem name="Location" />
        <HeroTabItem name="House Type" />
        <HeroTabItem name="Price Range" />
        <button className="w-full md:w-12 h-12 text-white  bg-yellow-400 rounded-xl flex items-center justify-center">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </section>
    </section>
  );
}
