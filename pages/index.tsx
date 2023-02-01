import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        // <div className="bg-slate-400 py-10 px-5 flex flex-col space-y-5">
        <div className="bg-slate-400 py-20 px-5 grid gap-10 min-h-screen">
            <div className="bg-white p-6 rounded-3xl shadow-xl">
                <span className="font-semibold text-3xl">Select Item</span>

                <ul>
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex justify-between my-2 odd:bg-blue-50 even:bg-yellow-500">
                            <span className="text-gray-500">Gray Chair</span>
                            <span className="font-semibold">$19</span>
                        </div>
                    ))}
                </ul>

                {["a", "b", "c", ""].map((c, i) => (
                    <li key={i} className="bg-red-500 py-2 empty:hidden">
                        {c}
                    </li>
                ))}

                <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
                    <span>Total</span>
                    <span className="font-semibold">$10</span>
                </div>

                <button
                    className="block p-3 mx-auto mt-5 bg-blue-500 text-white text-center rounded-xl w-3/4
                hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:bg-red-500 transition"
                >
                    Checkout
                </button>
            </div>

            <div className="bg-white overflow-hidden rounded-2xl shadow-xl">
                <div className="p-6 pb-14 bg-blue-500">
                    <span className="text-white text-2xl">Profile</span>
                </div>

                <div className="rounded-3xl p-6 relative -top-5 bg-white">
                    <div className="flex relative -top-16 items-end justify-between">
                        <div className="flex flex-col items-center">
                            <span className="text-sm text-gray-500">Orders</span>
                            <span className="font-medium">340</span>
                        </div>

                        <div className="h-24 w-24 bg-red-400 rounded-full" />

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

            <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
        </div>
    );
}
