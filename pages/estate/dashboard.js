import DashboardItem from "../../components/estate/DashBoardItem";
export default function Dashboard() {
  return (
    <main className="flex p-12 h-screen bg-purple-50">
      <aside className="bg-purple-900 flex flex-col justify-between h-full w-2/12 rounded-2xl">
        <div>Allen</div>
        <ul className="w-full text-white flex flex-col items-start px-12 space-y-4">
          <DashboardItem onClick={(e) => {}} label="Dashboard" active={true} />
          <DashboardItem onClick={(e) => {}} label="Properties" />
          <DashboardItem onClick={(e) => {}} label="Tenants" />
          <DashboardItem onClick={(e) => {}} label="Income" />
          <DashboardItem onClick={(e) => {}} label="Chat" />
        </ul>
        <div>adaea</div>
      </aside>
      <section className="w-10/12 p-6 ">
        <section className="w-8/12 flex flex-col">
          <section className="flex items-center justify-between">
            <div className="p-2 rounded-full space-x-3 items-center text-gray-600 w-6/12 border flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
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
              <input
                className="w-full outline-none bg-transparent text-sm"
                placeholder="Don't Search, its not working :("
              />
            </div>

            <div className="flex space-x-2 text-gray-700">
              <button className="p-2 rounded-full border relative">
                <span className="absolute bg-red-500 rounded-full w-2 h-2 top-0 right-0"></span>
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <button className="p-2 rounded-full border">
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </div>
          </section>
          <section className="flex items-center justify-between mt-6">
            <p className="font-bold text-4xl">Hello Oga Landlord</p>
            <button className="p-2 flex rounded-full border text-gray-500 items-center hover:text-gray-800 hover:border-gray-600">
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
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <p className="text-sm">Add Property</p>
            </button>
          </section>
          <section className="flex flex-wrap">
            <div className="w-1/3 p-3">
              <div className="bg-red-100 rounded-2xl p-8 h-full">
                <p className="text-green-600 font-bold text-xl text-center">
                  N1,300,000
                </p>
                <p className="text-gray-500 mt-2 text-xs text-center">
                  Total revenue for the year
                </p>
              </div>
            </div>
            <div className="w-1/3 p-3">
              <div className="bg-blue-100 rounded-2xl p-8 h-full">
                <p className="text-green-600 font-bold text-xl text-center">
                  N300,000
                </p>
                <p className="text-gray-500 mt-2 text-xs text-center">
                  Expected Revenue for the year
                </p>
              </div>
            </div>
            <div className="w-1/3 p-3">
              <div className="bg-yellow-100 rounded-2xl p-8 h-full">
                <p className="text-green-600 font-bold text-xl text-center">
                  58
                </p>
                <p className="text-gray-500 mt-2 text-xs text-center">
                  Tenants
                </p>
              </div>
            </div>
          </section>
        </section>
        <section className="w-4/12"></section>
      </section>
    </main>
  );
}
