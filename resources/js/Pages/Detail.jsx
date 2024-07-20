import PrimaryButton from "@/Components/PrimaryButton";
import HomeLayout from "@/Layouts/HomeLayout";
import ReactHtmlParser from "react-html-parser";

export default function Details({ auth, articles }) {
    console.log(articles);
    return (
        <HomeLayout user={auth.user}>
            <div className="container mx-auto">
                <main className="pt-8 pb-16  lg:pb-24 bg-white dark:bg-gray-900 antialiased">
                    <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
                        <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                            <header class="mb-4 lg:mb-6 not-format">
                                <address class="flex items-center mb-6 not-italic">
                                    <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                        <img
                                            class="mr-4 w-16 h-16 rounded-full"
                                            src="https://mahasiswa.itp.ac.id/assets/foto/profil/2022/55201/2022610013.jpeg"
                                            alt="Attan Muhammad"
                                        />
                                        <div>
                                            <a
                                                href="#"
                                                rel="author"
                                                class="text-xl font-bold text-gray-900 dark:text-white"
                                            >
                                                Muhammad Attan
                                            </a>
                                            <p class="text-base text-gray-500 dark:text-gray-400">
                                                Backend Developer, CTO at
                                                Wannabe
                                            </p>
                                            <p class="text-base text-gray-500 dark:text-gray-400">
                                                <time
                                                    pubdate
                                                    datetime="2024-07-02"
                                                    title="July 2nd, 2024"
                                                >
                                                    July 2, 2024
                                                </time>
                                            </p>
                                        </div>
                                    </div>
                                </address>
                                <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                                    {articles.title}
                                </h1>{" "}
                            </header>
                            <p class=" text-justify text-pretty py-10">
                                {ReactHtmlParser(articles.description)}
                            </p>

                            <section class="not-format">
                                <div class="flex justify-between items-center mb-6">
                                    <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                                        Discussion (20)
                                    </h2>
                                </div>
                                <form class="mb-6">
                                    <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                        <label for="comment" class="sr-only">
                                            Your comment
                                        </label>
                                        <textarea
                                            id="comments"
                                            name="comments"
                                            rows="6"
                                            class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                            placeholder="Write a comment..."
                                            required
                                        ></textarea>
                                    </div>
                                    <PrimaryButton className="py-4">
                                        Post Comment
                                    </PrimaryButton>
                                </form>
                                <article class="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
                                    <footer class="flex justify-between items-center mb-2">
                                        <div class="flex items-center">
                                            <p class="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                                                <img
                                                    class="mr-2 w-6 h-6 rounded-full"
                                                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                                    alt="Michael Gough"
                                                />
                                                Michael Gough
                                            </p>
                                            <p class="text-sm text-gray-600 dark:text-gray-400">
                                                <time
                                                    pubdate
                                                    datetime="2022-02-08"
                                                    title="February 8th, 2022"
                                                >
                                                    Feb. 8, 2022
                                                </time>
                                            </p>
                                        </div>
                                        <button
                                            id="dropdownComment1Button"
                                            data-dropdown-toggle="dropdownComment1"
                                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                            type="button"
                                        >
                                            <svg
                                                class="w-4 h-4"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 16 3"
                                            >
                                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                            </svg>
                                            <span class="sr-only">
                                                Comment settings
                                            </span>
                                        </button>
                                        <div
                                            id="dropdownComment1"
                                            class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                                        >
                                            <ul
                                                class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="dropdownMenuIconHorizontalButton"
                                            >
                                                <li>
                                                    <a
                                                        href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Edit
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Remove
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Report
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </footer>
                                    <p>
                                        Very straight-to-point article. Really
                                        worth time reading. Thank you! But tools
                                        are just the instruments for the UX
                                        designers. The knowledge of the design
                                        tools are as important as the creation
                                        of the design strategy.
                                    </p>
                                    <div class="flex items-center mt-4 space-x-4">
                                        <button
                                            type="button"
                                            class="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
                                        >
                                            <svg
                                                class="mr-1.5 w-3 h-3"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 18"
                                            >
                                                <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                                            </svg>
                                            Reply
                                        </button>
                                    </div>
                                </article>
                                <article class="p-6 mb-6 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
                                    <footer class="flex justify-between items-center mb-2">
                                        <div class="flex items-center">
                                            <p class="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                                                <img
                                                    class="mr-2 w-6 h-6 rounded-full"
                                                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                                    alt="Jese Leos"
                                                />
                                                Jese Leos
                                            </p>
                                            <p class="text-sm text-gray-600 dark:text-gray-400">
                                                <time
                                                    pubdate
                                                    datetime="2022-02-12"
                                                    title="February 12th, 2022"
                                                >
                                                    Feb. 12, 2022
                                                </time>
                                            </p>
                                        </div>
                                        <button
                                            id="dropdownComment2Button"
                                            data-dropdown-toggle="dropdownComment2"
                                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                            type="button"
                                        >
                                            <svg
                                                class="w-4 h-4"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 16 3"
                                            >
                                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                            </svg>
                                            <span class="sr-only">
                                                Comment settings
                                            </span>
                                        </button>
                                        <div
                                            id="dropdownComment2"
                                            class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                                        >
                                            <ul
                                                class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="dropdownMenuIconHorizontalButton"
                                            >
                                                <li>
                                                    <a
                                                        href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Edit
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Remove
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Report
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </footer>
                                    <p>
                                        Much appreciated! Glad you liked it ☺️
                                    </p>
                                    <div class="flex items-center mt-4 space-x-4">
                                        <button
                                            type="button"
                                            class="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
                                        >
                                            <svg
                                                class="mr-1.5 w-3 h-3"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 18"
                                            >
                                                <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                                            </svg>
                                            Reply
                                        </button>
                                    </div>
                                </article>
                                <article class="p-6 mb-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                    <footer class="flex justify-between items-center mb-2">
                                        <div class="flex items-center">
                                            <p class="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                                                <img
                                                    class="mr-2 w-6 h-6 rounded-full"
                                                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                                    alt="Bonnie Green"
                                                />
                                                Bonnie Green
                                            </p>
                                            <p class="text-sm text-gray-600 dark:text-gray-400">
                                                <time
                                                    pubdate
                                                    datetime="2022-03-12"
                                                    title="March 12th, 2022"
                                                >
                                                    Mar. 12, 2022
                                                </time>
                                            </p>
                                        </div>
                                        <button
                                            id="dropdownComment3Button"
                                            data-dropdown-toggle="dropdownComment3"
                                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                            type="button"
                                        >
                                            <svg
                                                class="w-4 h-4"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 16 3"
                                            >
                                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                            </svg>
                                            <span class="sr-only">
                                                Comment settings
                                            </span>
                                        </button>
                                        <div
                                            id="dropdownComment3"
                                            class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                                        >
                                            <ul
                                                class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="dropdownMenuIconHorizontalButton"
                                            >
                                                <li>
                                                    <a
                                                        href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Edit
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Remove
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Report
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </footer>
                                    <p>
                                        The article covers the essentials,
                                        challenges, myths and stages the UX
                                        designer should consider while creating
                                        the design strategy.
                                    </p>
                                    <div class="flex items-center mt-4 space-x-4">
                                        <button
                                            type="button"
                                            class="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
                                        >
                                            <svg
                                                class="mr-1.5 w-3 h-3"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 18"
                                            >
                                                <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                                            </svg>
                                            Reply
                                        </button>
                                    </div>
                                </article>
                                <article class="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                    <footer class="flex justify-between items-center mb-2">
                                        <div class="flex items-center">
                                            <p class="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                                                <img
                                                    class="mr-2 w-6 h-6 rounded-full"
                                                    src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                                    alt="Helene Engels"
                                                />
                                                Helene Engels
                                            </p>
                                            <p class="text-sm text-gray-600 dark:text-gray-400">
                                                <time
                                                    pubdate
                                                    datetime="2022-06-23"
                                                    title="June 23rd, 2022"
                                                >
                                                    Jun. 23, 2022
                                                </time>
                                            </p>
                                        </div>
                                        <button
                                            id="dropdownComment4Button"
                                            data-dropdown-toggle="dropdownComment4"
                                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                            type="button"
                                        >
                                            <svg
                                                class="w-4 h-4"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 16 3"
                                            >
                                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                            </svg>
                                        </button>
                                        <div
                                            id="dropdownComment4"
                                            class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                                        >
                                            <ul
                                                class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="dropdownMenuIconHorizontalButton"
                                            >
                                                <li>
                                                    <a
                                                        href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Edit
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Remove
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Report
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </footer>
                                    <p>
                                        Thanks for sharing this. I do came from
                                        the Backend development and explored
                                        some of the tools to design my Side
                                        Projects.
                                    </p>
                                    <div class="flex items-center mt-4 space-x-4">
                                        <button
                                            type="button"
                                            class="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
                                        >
                                            <svg
                                                class="mr-1.5 w-3 h-3"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 18"
                                            >
                                                <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                                            </svg>
                                            Reply
                                        </button>
                                    </div>
                                </article>
                            </section>
                        </article>
                    </div>
                </main>

                <aside
                    aria-label="Related articles"
                    className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800 "
                >
                    <div class="px-4 lg:mx-32">
                        <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
                            Related articles
                        </h2>
                        <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                            <article class="max-w-xs">
                                <a href="#">
                                    <img
                                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
                                        class="mb-5 rounded-lg"
                                        alt="Image 1"
                                    />
                                </a>
                                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                    <a href="#">Our first office</a>
                                </h2>
                                <p class="mb-4 text-gray-500 dark:text-gray-400">
                                    Over the past year, Volosoft has undergone
                                    many changes! After months of preparation.
                                </p>
                                <a
                                    href="#"
                                    class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                                >
                                    Read in 2 minutes
                                </a>
                            </article>
                            <article class="max-w-xs">
                                <a href="#">
                                    <img
                                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png"
                                        class="mb-5 rounded-lg"
                                        alt="Image 2"
                                    />
                                </a>
                                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                    <a href="#">Enterprise design tips</a>
                                </h2>
                                <p class="mb-4  text-gray-500 dark:text-gray-400">
                                    Over the past year, Volosoft has undergone
                                    many changes! After months of preparation.
                                </p>
                                <a
                                    href="#"
                                    class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                                >
                                    Read in 12 minutes
                                </a>
                            </article>
                            <article class="max-w-xs">
                                <a href="#">
                                    <img
                                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png"
                                        class="mb-5 rounded-lg"
                                        alt="Image 3"
                                    />
                                </a>
                                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                    <a href="#">We partnered with Google</a>
                                </h2>
                                <p class="mb-4  text-gray-500 dark:text-gray-400">
                                    Over the past year, Volosoft has undergone
                                    many changes! After months of preparation.
                                </p>
                                <a
                                    href="#"
                                    class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                                >
                                    Read in 8 minutes
                                </a>
                            </article>
                            <article class="max-w-xs">
                                <a href="#">
                                    <img
                                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png"
                                        class="mb-5 rounded-lg"
                                        alt="Image 4"
                                    />
                                </a>
                                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                    <a href="#">Our first project with React</a>
                                </h2>
                                <p class="mb-4  text-gray-500 dark:text-gray-400">
                                    Over the past year, Volosoft has undergone
                                    many changes! After months of preparation.
                                </p>
                                <a
                                    href="#"
                                    class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                                >
                                    Read in 4 minutes
                                </a>
                            </article>
                        </div>
                    </div>
                </aside>
            </div>
        </HomeLayout>
    );
}
