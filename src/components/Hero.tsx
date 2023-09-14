'use client';

import Image from "next/image";
import Decoration from "../../public/images/Decoration.svg";
import { FilterForm } from "./FilterForm";
import { Table } from "./Table";
import { useState } from "react";
import { ReDirectBubble } from "./RedirectBubble";

interface HeroProps {
    data: YouBike[];
}

const Hero = ({ data }: HeroProps) => {
    const [search, setSearch] = useState("");
    const [currentCity, setCurrentCity] = useState("台北市")

    return (
        <div className="main-container relative h-full grid grid-rows-2">
            <div>
                <div className="flex">
                    <FilterForm
                        data={data}
                        search={search}
                        currentCity={currentCity}
                        setCurrentCity={setCurrentCity}
                        setSearch={setSearch}
                    />
                    <div className="relative flex-1 hidden lg:block self-end">
                        <Image
                            src={Decoration}
                            alt="decoration"
                            width={501}
                            height={171}
                            className="h-44 w-auto m-auto"
                        />
                    </div>
                </div>
            </div>
            <Table data={data} search={search} currentCity={currentCity} />

            <ReDirectBubble />
        </div>
    )
}

export default Hero;