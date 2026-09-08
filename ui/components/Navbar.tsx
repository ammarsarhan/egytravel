import Link from "next/link";
import Button from "@/components/Button";
import { IconChevronDown, IconMenu, IconWorld } from "@tabler/icons-react";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between py-4 px-8 lg:px-20 bg-black">
            <div className="flex items-center gap-x-16">
                <Link href="/">
                    <div className="size-6 bg-white"></div>
                </Link>
                <div className="hidden lg:flex items-center gap-x-3">
                    <Link href="/">
                        <Button variant="primary">
                            <span>Contact</span>
                        </Button>
                    </Link>
                    <Link href="/">
                        <Button variant="primary">
                            <span>About</span>
                        </Button>
                    </Link>
                    <Link href="/">
                        <Button variant="primary">
                            <div className="flex items-center gap-x-1.5">
                                <span>FAQ</span>
                                <IconChevronDown size={16} strokeWidth={2.5} />
                            </div>
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="flex items-center gap-x-3">
                <div className="hidden lg:flex items-center gap-x-2">
                    <Link href={"/"}>
                        <Button variant="primary">
                            <div className="flex items-center gap-x-1.5">
                                <IconWorld size={16} strokeWidth={2.5} />
                                <span>EN</span>
                            </div>
                        </Button>
                    </Link>
                    <Link href={"/"}>
                        <Button variant="primary">Help</Button>
                    </Link>
                </div>
                <div className="flex items-center gap-x-3">
                    <Link href={"/auth/sign-in"}>
                        <Button variant="primary">Log In</Button>
                    </Link>
                    <Link href={"/auth/sign-up"}>
                        <Button variant="secondary">Sign Up</Button>
                    </Link>
                </div>
                <button className="flex lg:hidden items-center justify-center size-10 cursor-pointer rounded-full text-white bg-black hover:bg-gray-900 transition-all">    
                    <IconMenu size={20} strokeWidth={2.5}/>
                </button>   
            </div>
        </nav>
    )
}