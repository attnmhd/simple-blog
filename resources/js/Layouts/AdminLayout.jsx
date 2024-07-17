import { Link } from "@inertiajs/react";
import { MdOutlineDataset } from "react-icons/md";
import { AiOutlineDashboard } from "react-icons/ai";
import { PiSignOutFill } from "react-icons/pi";
import { useState } from "react";

export default function AdminLayout({ user, children }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <div className="container mx-auto px-4 sm:px-8">
            {/* Navbar */}
            <div className="fixed top-0 z-50 left-0 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3  justify-between">
                    <div className="navbar ">
                        <div className="flex-1">
                            <Link href="/" className="btn btn-ghost text-xl">
                                Script Kiddie
                            </Link>
                        </div>
                        <div className="flex-none gap-2">
                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="input input-bordered w-24 md:w-auto"
                                />
                            </div>
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                        />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                                >
                                    <li>
                                        <h1 className=" px-3">{user.name}</h1>
                                    </li>
                                    <li>
                                        <Link>Settings</Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <aside
                id="logo-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 pb-4 pt-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <AiOutlineDashboard className="w-5 h-5" />
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>

                        <li>
                            <div
                                onClick={handleOpen}
                                poin
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:cursor-pointer"
                            >
                                <MdOutlineDataset className="w-5 h-5 " />
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Master Data
                                </span>
                                <svg
                                    class="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </div>
                            <ul
                                id="dropdown-example"
                                class={` ${
                                    open ? "" : "hidden"
                                }  py-2 space-y-2`}
                            >
                                <li>
                                    <Link
                                        href="#"
                                        class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Kategori
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/admin/artikel"
                                        class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Artikel
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Postingan
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 20"
                                >
                                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Products
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <PiSignOutFill className="w-5 h-5" />
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Sign Out
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

            {children}
        </div>
    );
}