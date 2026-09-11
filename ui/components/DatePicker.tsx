import { IconChevronDown, IconClockFilled } from "@tabler/icons-react";

export default function DatePicker() {
    return (
        <button className="py-3 bg-gray-200 hover:bg-gray-200/80 transition-all rounded-full flex items-center gap-x-2 px-6 w-64 cursor-pointer">
            <div className="flex-1 flex items-center gap-x-2.5">
                <IconClockFilled size={16} strokeWidth={2.25} />
                <span className="text-md">Next 12 hours</span>
            </div>
            <IconChevronDown size={18} />
        </button>
    )
}