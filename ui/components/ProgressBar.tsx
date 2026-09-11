export default function ProgressBar() {
    return (
        <div className="flex items-center">
            <div className="relative">
                <div className="flex flex-col items-center gap-y-1.5">
                    <div className="size-3 rounded-full bg-white"></div>
                    <span className="text-md">Hello</span>
                </div>
                <div className="absolute left-1/2 top-1 h-0.5 w-16 bg-white">

                </div>
            </div>
            <div className="relative">
                <div className="flex flex-col items-center gap-y-1.5">
                    <div className="size-3 rounded-full bg-white"></div>
                    <span className="text-md">Hello</span>
                </div>
                <div className="absolute left-1/2 top-1 h-0.5 w-16 bg-white">

                </div>
            </div>
            <div className="relative">
                <div className="flex flex-col items-center gap-y-1.5">
                    <div className="size-3 rounded-full bg-white"></div>
                    <span className="text-md">Hello</span>
                </div>
                <div className="absolute left-1/2 top-1 h-0.5 w-16 bg-white">

                </div>
            </div>
        </div>
    )
}