'use client';

import Image from "next/image";
import Application from "../../../public/images/App.png"
import { useState } from "react";

const First = () => {
    const [integer, setInteger] = useState("");

    function getSum(n: number) {
        let value = 1
        for (let i = 2; i < (n + 1); i++) {
            if (i % 2 === 0) {
                value += i
                // console.log(i)
            } else {
                value -= i
                console.log(i)
            }
        }

        return value;
    }

    const val = getSum(parseInt(integer))

    return (
        <div className="flex w-full h-28 items-center justify-center bg-stone-200">
            <div className="flex items-center justify-center mr-10">
                <label className="text-lg font-medium mr-6 font-noto tracking-wider">Input:</label>
                <input
                    type="text"
                    className="bg-white w-20 h-12 focus:outline-none rounded-lg text-center font-noto"
                    onChange={(e) => setInteger(e.target.value)}
                />
            </div>
            <div>
                <label className="text-lg font-medium mr-6 font-noto tracking-wider">Answer:</label>
                <span className="text-xl font-noto">{val}</span>
            </div>
        </div>
    )
}

const Second = () => {
    const gifts: Gifts[] = [
        { tag: "1", name: "first prize", amount: 1 },
        { tag: "2", name: "second prize", amount: 1 },
        { tag: "3", name: "third prize", amount: 2 },
        { tag: "4", name: "fourth prize", amount: 5 },
        { tag: "5", name: "fifth prize", amount: 11 },
    ]


    function initialPrizes(gifts: Gifts[]) {
        const allPrizes = [];

        for (const gift of gifts) {
            for (let i = 0; i < gift.amount; i++) {
                allPrizes.push(gift.tag);
            }
        }

        return allPrizes;
    }

    let prizes = initialPrizes(gifts);
    let rewards: string[] = [];

    function runLottery(prizes: string[], rewards: string[]) {
        let random = Math.floor(Math.random() * 1000);

        if (random > 0 && random <= 1) {
            const value = prizes.splice(prizes.indexOf("1"), 1);
            rewards.push(value[0])
        }
        if (random > 1 && random <= 24) {
            const value = prizes.splice(prizes.indexOf("2"), 1);
            rewards.push(value[0])
        }
        if (random > 24 && random <= 154) {
            const value = prizes.splice(prizes.indexOf("3"), 1);
            rewards.push(value[0])
        }
        if (random > 154 && random <= 334) {
            const value = prizes.splice(prizes.indexOf("4"), 1);
            rewards.push(value[0])
        }
        if (random > 334 && random <= 584) {
            const value = prizes.splice(prizes.indexOf("5"), 1);
            rewards.push(value[0])
        }

        if (prizes.length === 0) {
            console.log("-------------------------------------------")
            console.log("獎品已抽完....")

        } else {
            console.log("-------------------------------------------")
            console.log("剩餘獎品: " + prizes)
            console.log("已獲得獎品: " + rewards)
        }
    }

    return (
        <div className="w-full h-72 flex flex-col items-center justify-center gap-6">
            <span className="text-lg font-bold capitalize font-noto tracking-wider">-- Please open console --</span>
            <button
                className="text-lg font-bold mr-2 bg-success py-2 px-4 rounded-lg"
                onClick={() => runLottery(prizes, rewards)}
            >
                抽獎
            </button>
        </div>
    )
}

const Third = () => {
    return (
        <div className="w-full bg-stone-200 py-2 px-8 flex gap-16">
            <Image
                src={Application}
                alt="app"
                width={300}
                height={500}
                priority
            />
            <div className="border-2 border-black w-full p-2 flex flex-col">
                <span className="text-xl font-noto font-semibold">
                    1. Layout
                </span>
                <div className="w-full border-2 border-black mt-2 flex justify-between py-2 px-8 bg-black/20">
                    <span className="text-xl font-noto font-semibold">
                        3. NavButton
                    </span>
                    <span className="text-xl font-noto font-semibold">
                        2. Navbar
                    </span>
                    <span className="text-xl font-noto font-semibold">
                        4. Camera
                    </span>
                </div>
                <div className="relative w-full h-full p-2 mt-2 border-2 border-black flex items-center justify-center">
                    <span className="text-xl font-noto font-semibold">
                        5. Main content
                    </span>
                    <div className="absolute top-10 left-10 border-2 border-black p-2">
                        <span className="text-xl font-noto font-semibold mr-8">
                            6. Avatar
                        </span>
                        <span className="text-xl font-noto font-semibold">
                            7. Dialogue
                        </span>
                    </div>
                    <div className="absolute bottom-2 w-[calc(100%-16px)] border-2 border-black p-2 flex justify-between">
                        <span className="text-xl font-noto font-semibold">
                            8. BottomToolbar
                        </span>
                        <span className="text-xl font-noto font-semibold">
                            9. Input
                        </span>
                        <span className="text-xl font-noto font-semibold">
                            10. submitButton
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Questions = () => {
    return (
        <div className="h-full pt-[100px] text-center">
            <First />
            <Second />
            <Third />
        </div>
    )
}

export default Questions