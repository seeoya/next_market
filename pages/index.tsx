import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        // <div className="bg-slate-400 py-10 px-5 flex flex-col space-y-5">
        <div className="bg-slate-400 py-20 px-5 grid gap-10">
            <div className="bg-white p-6 rounded-3xl shadow-xl">
                <span className="font-semibold text-3xl">Select Item</span>

                <div className="flex justify-between my-2">
                    <span className="text-gray-500">Gray Chair</span>
                    <span className="font-semibold">$19</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-500">Gray Chair</span>
                    <span className="font-semibold">$19</span>
                </div>

                <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
                    <span>Total</span>
                    <span className="font-semibold">$10</span>
                </div>

                <div className="p-3 mx-auto mt-5 bg-blue-500 text-white text-center rounded-xl w-1/2">Checkout</div>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
            <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
            <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
        </div>
    );
}
