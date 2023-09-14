'use client';
import { useState } from "react";

interface CheckBoxProps {
    value?: string;
    children: React.ReactNode;
}

export const CheckBox = ({ value, children }: CheckBoxProps) => {
    return (
        <span className="flex gap-4 items-center p-2 select-none">
            <input
                type="checkbox"
                defaultChecked
                value={value}
                className="checkbox"
            />
            <label
                className="text-base md:text-lg font-normal text-[#323232] whitespace-nowrap"
            >
                {children}
            </label>
        </span>
    )
}