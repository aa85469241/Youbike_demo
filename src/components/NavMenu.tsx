import Link from "next/link";

interface NavMenuProps {
    isOpen: boolean;
    setOpen: React.Dispatch<boolean>;
}

export const NavMenu = ({ isOpen, setOpen }: NavMenuProps) => {
    const handleClick = () => {
        if (isOpen) {
            setOpen(false);
        }
    }

    return (
        <div className={`fixed inset-0 max-h-screen bg-success ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 pt-[65px] z-20`}>
            <div className="p-8 flex flex-col justify-between h-full">
                <ul className="list-none">
                    <li className="navLink">
                        <Link href="/directions" onClick={handleClick}>
                            使用說明
                        </Link>
                    </li>
                    <li className="navLink">
                        <Link href="/charge" onClick={handleClick}>
                            收費說明
                        </Link>
                    </li>
                    <li className="navLink">
                        <Link href="/stepInfo" onClick={handleClick}>
                            站點資訊
                        </Link>
                    </li>
                    <li className="navLink">
                        <Link href="/news" onClick={handleClick}>
                            最新消息
                        </Link>
                    </li>
                    <li className="navLink">
                        <Link href="/activity" onClick={handleClick}>
                            活動專區
                        </Link>
                    </li>
                </ul>
                <div>
                    <button
                        type="button"
                        className="bg-white py-[10px] px-6 rounded-3xl text-[18px] text-success font-bold"
                    >
                        登入
                    </button>
                </div>
            </div>
        </div>
    )
}