'use client';
import { useEffect, useState } from 'react';

interface CheckBoxFormProps {
    // currentCity: string;
    // cityList: TaiwanCity[];
    areaList: string[];
}

export const CheckBoxForm = ({ areaList }: CheckBoxFormProps) => {
    const [checkAll, setCheckAll] = useState(true);
    const [isCheck, setIsCheck] = useState<string[]>(areaList);

    const handleAllCheck = () => {
        setCheckAll(!checkAll)
        if (checkAll) {
            setIsCheck([]);
        } else {
            setIsCheck(areaList)
        }
    }

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { value, checked } = e.target;

        if (checked && isCheck) {
            setIsCheck([...isCheck, value]);
        } else {
            setIsCheck(isCheck?.filter(val => val !== value))
        }
    }

    return (
        <div className="mt-2">
            <span className="flex gap-4 items-center p-2 select-none">
                <input
                    type="checkbox"
                    checked={checkAll}
                    onChange={handleAllCheck}
                    className="checkbox"
                />
                <label className="text-base md:text-lg font-normal text-[#323232] whitespace-nowrap">全部選取</label>
            </span>
            <div className="grid grid-cols-3 md:grid-cols-4 items-center">
                {areaList !== undefined
                    ? areaList.map((area, index) => (
                        <span
                            key={index}
                            className="flex gap-4 items-center p-2 select-none"
                        >
                            <input
                                type="checkbox"
                                value={area}
                                className="checkbox"
                                checked={isCheck?.includes(area)}
                                onChange={handleCheck}
                            />
                            <label className="text-base md:text-lg font-normal text-[#323232] whitespace-nowrap">{area}</label>
                        </span>
                    ))
                    : ""
                }
            </div>
        </div>
    )
}