import cn from "@/lib/cn";
import { IconX, ReactNode } from "@tabler/icons-react";

interface LocationPickerProps {
    icon: ReactNode;
    label?: string;
    sublabel: string;
    target?: string;
}

export default function LocationPicker({ icon, label, sublabel, target } : LocationPickerProps) {
    return (
        <div className={cn("flex flex-col gap-y-2")}>
            {label && <span className="text-sm">{label}</span>}
            <div className="flex items-center gap-x-3 py-3 px-5 bg-gray-200 hover:bg-gray-200/80 rounded-lg cursor-pointer transition-all w-sm">
                {icon}
                <div className="flex flex-col flex-1">
                    <span className="text-sm text-left text-gray-700">{sublabel}</span>
                    {
                        target ?
                            <span className="text-md text-left">{target}</span> :
                            <div className="h-4"></div>
                    }
                </div>
                {
                    target &&
                    <div className="size-5 rounded-full border-[1.5px] border-black flex items-center justify-center">
                        <IconX size={12} strokeWidth={2.5}/>
                    </div>
                }
            </div>
        </div>
    )
}