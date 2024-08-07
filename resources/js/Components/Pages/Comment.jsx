import { router } from "@inertiajs/react";
import PrimaryButton from "../PrimaryButton";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Comment({
    handleChange,
    addComment,
    data,
    discuss,
    formatDate,
    user_id,
}) {
    return (
        <section class="not-format">
            <div class="flex justify-between items-center my-8">
                <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                    Discussion ({discuss == undefined ? 0 : discuss.length})
                </h2>
            </div>
            <form class="mb-6" onSubmit={addComment}>
                <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <label for="comment" class="sr-only">
                        Your comment
                    </label>
                    <textarea
                        value={data}
                        onChange={handleChange}
                        id="comments"
                        name="comments"
                        rows="6"
                        class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                        placeholder="Write a comment..."
                        required
                    ></textarea>
                </div>
                <PrimaryButton className="py-4">Post Comment</PrimaryButton>
            </form>

            {/* Reply */}
            {/* <article class="p-6 mb-6 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
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
                        <span class="sr-only">Comment settings</span>
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
                <p>Much appreciated! Glad you liked it ☺️</p>
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
            </article> */}

            {discuss != undefined &&
                discuss.map((item, i) => (
                    <article
                        key={i}
                        class="p-6 mb-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                    >
                        <footer class="flex justify-between items-center mb-2">
                            <div class="flex items-center">
                                <p class="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                                    <img
                                        class="mr-2 w-6 h-6 rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                        alt="Bonnie Green"
                                    />
                                    {item.user.name}
                                </p>
                                <p class="text-sm text-gray-600 dark:text-gray-400">
                                    <time
                                        pubdate
                                        datetime="2022-03-12"
                                        title="March 12th, 2022"
                                    >
                                        {formatDate(item.created_at)}
                                    </time>
                                </p>
                            </div>

                            <details
                                className={`dropdown ${
                                    user_id != item.user_id && "hidden"
                                }`}
                            >
                                <summary className="btn border-none bg-transparent">
                                    <BsThreeDotsVertical />
                                </summary>
                                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    <li>
                                        <a>Edit</a>
                                    </li>
                                    <li>
                                        <div
                                            onClick={() => {
                                                router.post(
                                                    `detail/${item.id}`,
                                                    {
                                                        _method: "delete",
                                                    }
                                                );
                                            }}
                                        >
                                            Delete
                                        </div>
                                    </li>
                                </ul>
                            </details>
                        </footer>
                        <p>{item.comment}</p>
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
                ))}
        </section>
    );
}
