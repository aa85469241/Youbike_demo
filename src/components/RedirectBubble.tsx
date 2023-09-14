import Link from "next/link"

export const ReDirectBubble = () => {
    return (
        <Link href="/questions">
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg overflow-hidden opacity-50 hover:opacity-100 cursor-pointer">
                <span>Q&A</span>
            </div>
        </Link>
    )
}