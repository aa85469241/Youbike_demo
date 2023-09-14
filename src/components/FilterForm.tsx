'use client';

import { AiFillCaretDown, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { taichungAreas, KaohsiungAreas } from '@/data/youbikeData';
import { CheckBoxForm } from './CheckBoxForm';
import { useState } from 'react';
import { getAreaList } from '@/libs/getAreaList';

interface FilterFormProps {
    search: string;
    setSearch: React.Dispatch<string>;
    currentCity: string;
    setCurrentCity: React.Dispatch<string>;
    data: YouBike[];
}

export const FilterForm = ({
    search,
    setSearch,
    currentCity,
    setCurrentCity,
    data
}: FilterFormProps) => {
    const taipeIAreasData = data.map(_data => _data.sarea);
    const taipeiAreas = getAreaList(taipeIAreasData);

    const TaiwanCityList: TaiwanCity[] = [
        { id: 1, name: "台北市", areas: taipeiAreas },
        { id: 2, name: "台中市", areas: taichungAreas },
        { id: 3, name: "高雄市", areas: KaohsiungAreas },
    ]

    const [isOpen, setOpen] = useState(false);

    const areaList = TaiwanCityList.filter((city) => city.name === currentCity)[0]?.areas

    const handleOnClick = () => {
        setCurrentCity("")
        if (!isOpen) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }

    return (
        <form className="mt-4">
            <div>
                <label className="text-2xl text-success font-bold">站點資訊</label>
            </div>
            <div className="flex gap-4 mt-2">
                {/* city select list */}
                <div className="relative max-w-[175px] bg-secondary">
                    <input
                        required
                        type="text"
                        className="w-full rounded-lg bg-secondary text-lg font-semibold pl-4 py-2"
                        value={currentCity}
                        onChange={(e) => setCurrentCity(e.target.value)}
                        onClick={() => setOpen(true)}
                    />
                    <button type="button" className="absolute top-1/2 right-10 -translate-y-1/2 opacity-10 hover:opacity-100 cursor-pointer" onClick={() => setCurrentCity("")}>
                        <AiOutlineClose />
                    </button>
                    <button
                        id="dropdown-button"
                        type="button"
                        className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
                        onClick={handleOnClick}
                    >
                        <AiFillCaretDown size={12} />
                    </button>
                    {isOpen
                        ? <ul
                            id="dropdown-menu"
                            className="w-full absolute bottom-0 left-0 translate-y-full bg-white z-10 shadow-lg"
                        >
                            {TaiwanCityList
                                .filter((city) => {
                                    return currentCity === ""
                                        ? city.name
                                        : city.name.includes(currentCity)
                                })
                                .map((city) =>
                                    <li
                                        key={city.id}
                                        className="cursor-pointer text-lg font-semibold p-4 hover:bg-secondary"
                                        onClick={() => {
                                            setCurrentCity(city.name)
                                            setOpen(!isOpen)
                                        }}
                                    >
                                        {city.name}
                                    </li>
                                )}
                        </ul> : ""}
                </div>
                {/* search area */}
                <div className="relative">
                    <input
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search === "" ? "" : search}
                        className="bg-secondary text-lg font-semibold rounded-lg px-4 py-2"
                        placeholder='搜索站點'
                    />
                    {search === ""
                        ? <span className="absolute right-4 top-1/2 -translate-y-1/2">
                            <AiOutlineSearch color="#AEAEAE" size={18} />
                        </span>
                        : <span
                            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                            onClick={() => setSearch("")}
                        >
                            <AiOutlineClose color="#AEAEAE" size={18} />
                        </span>
                    }
                </div>
            </div>
            <CheckBoxForm
                areaList={areaList}
            // currentCity={currentCity}
            // cityList={TaiwanCityList}
            />
        </form >
    )
}