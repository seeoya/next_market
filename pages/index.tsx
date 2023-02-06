import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        // <div className="bg-slate-400 py-10 px-5 flex flex-col space-y-5">
        <div className="dark bg-slate-400 xl:place-content-center py-20 px-5 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen">
            <div className=" flex flex-col justify-between bg-white dark:bg-black sm:bg-red-300 md:bg-teal-300 lg:bg-indigo-300 xl:bg-amber-300 2xl:bg-emerald-400 p-6 rounded-3xl shadow-xl">
                <span className="font-semibold text-3xl dark:text-white">Select Item</span>

                <ul>
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex justify-between py-2 odd:bg-blue-50 even:bg-red-50 empty:hidden dark:bg-black">
                            <span className="text-gray-500 dark:text-gray-100">Gray Chair</span>
                            <span className="font-semibold dark:text-white">$19</span>
                        </div>
                    ))}
                </ul>

                <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
                    <span>Total</span>
                    <span className="font-semibold">$10</span>
                </div>

                <button
                    className="block p-3 mx-auto mt-5 bg-blue-500 text-white text-center rounded-xl w-3/4
                    hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:bg-red-500 transition
                    dark:bg-gray-700 dark:hover:bg-white"
                >
                    Checkout
                </button>
            </div>

            <div className="flex flex-col bg-white overflow-hidden rounded-2xl shadow-xl group">
                <div className="p-6 pb-14 bg-blue-500 landscape:bg-teal-500 portrait:bg-red-800 lg:pb-32 xl:pb-52">
                    <span className="text-white text-2xl">Profile</span>
                </div>

                <div className="rounded-3xl p-6 relative -top-5 bg-white">
                    <div className="flex relative -top-16 items-end justify-between">
                        <div className="flex flex-col items-center">
                            <span className="text-sm text-gray-500 group">Orders</span>
                            <span className="font-medium">340</span>
                        </div>

                        <div className="h-24 w-24 bg-red-400 rounded-full group-hover:bg-red-300 transition" />

                        <div className="flex flex-col items-center">
                            <span className="text-sm text-gray-500">Spent</span>
                            <span className="font-medium">$340</span>
                        </div>
                    </div>

                    <div className="flex flex-col relative -mt-10 -mb-5 items-center">
                        <span className="text-lg font-medium">Tony Molloy</span>
                        <span className="text-sm text-gray-500">미국</span>
                    </div>
                </div>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl">
                <div className="mb-5 flex justify-between items-center">
                    <span>⬅</span>
                    <div className="space-x-3">
                        <span>⭐ 4.9</span>
                        <span className="shadow-xl p-2 rounded-md">💗</span>
                    </div>
                </div>

                <div className="mb-5 bg-zinc-400 h-72" />

                <div className="flex flex-col">
                    <span className="font-medium text-xl">Swoon Lounge</span>
                    <span className="text-xs text-gray-500">Chair</span>

                    <div className="mt-3 mb-5 flex justify-between items-center">
                        <div className="space-x-2">
                            <button className="w-5 h-5 rounded-full focus:ring-2 ring-offset-2 ring-opacity-70 ring-yellow-500 bg-yellow-500 transition"></button>
                            <button className="w-5 h-5 rounded-full focus:ring-2 ring-offset-2 ring-opacity-70 ring-indigo-500 bg-indigo-500 transition"></button>
                            <button className="w-5 h-5 rounded-full focus:ring-2 ring-offset-2 ring-opacity-70 ring-teal-500 bg-teal-500 transition"></button>
                        </div>

                        <div className="flex items-center space-x-5">
                            <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">-</button>
                            <span>1</span>
                            <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">+</button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="font-medium text-2xl">$450</span>
                        <button className="bg-blue-500 px-5 py-2 text-center text-sm text-white rounded-lg">Add to cart</button>
                    </div>
                </div>
            </div>

            <div className="p-10 rounded-2xl shadow-xl bg-blue-100 focus-within:bg-blue-200">
                <form action="" className="flex flex-col space-y-2 ">
                    <input type="text" required placeholder="Username" className="p-2 shadow-md required:border-2 border-yellow-500 invalid:border-red-500 valid:border-teal-500 placeholder-shown:bg-slate-300 placeholder:text-red-500 disabled:opacity-0" />
                    <input type="password" required placeholder="Password" className="p-2 shadow-md" />
                    <input type="submit" value="Login" className="p-2 bg-yellow-100 shadow-md cursor-pointer transition hover:bg-red-100 hover:font-semibold" />
                </form>
            </div>

            <div className="p-10 rounded-2xl shadow-xl bg-white">
                <form action="" className="flex flex-col space-y-2 ">
                    <input type="text" required placeholder="Username" className="peer p-2 h-12 shadow-md border border-gray-400 rounded-md invalid:border-red-500" />
                    <span className="hidden text-red-500 peer-invalid:block">This input is invalid</span>
                    <span className="hidden text-teal-500 peer-valid:block">This input is valid</span>
                    <input type="submit" value="Login" className="p-2 h-12 bg-slate-700 rounded-md shadow-md cursor-pointer" />
                </form>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl">
                <details className="open:text-white open:bg-indigo-400">
                    <summary className="select-none cursor-pointer">What is my fav. food.</summary>
                    <span className="selection:bg-pink-100">asdasdasd</span>
                </details>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl">
                <ul className="list-disc marker:text-teal-500">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <input type="file" className="transition file:border-0 file:rounded-xl file:px-3 file:text-white file:bg-purple-700 cursor-pointer file:cursor-pointer hover:file:bg-red-400" />
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl">
                <p className="first-letter:text-red-600 first-letter:text-6xl first-line:hover:text-red-700">Lorem ipsum sadasd fas ahd jsahdk as</p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl xl:col-span-3"></div>
        </div>
    );
}
