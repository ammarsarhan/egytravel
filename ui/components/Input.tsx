import cn from "@/lib/cn";
import { IconChevronDown, IconEye, IconEyeOff } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import {
    ChangeEvent,
    HTMLInputTypeAttribute,
    InputHTMLAttributes,
    ReactNode,
    forwardRef,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";

interface BaseInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    placeholder: string;
    label?: string;
    containerStyle?: string;
    className?: string;
    type?: HTMLInputTypeAttribute | "phone";
    leftElement?: ReactNode;
    rightElement?: ReactNode;
}

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(function BaseInput({ placeholder, label, containerStyle, className, type = "text", leftElement, rightElement, ...rest }, ref) {
    const inputType = type === "phone" ? "text" : type;

    return (
        <div className={cn("flex flex-col gap-y-2", containerStyle)}>
            {label && <span className="text-sm">{label}</span>}
            <div className={cn("flex items-center w-full rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-gray-300", className)}>
                {leftElement && (
                    <div className="pl-6 flex items-center shrink-0">
                        {leftElement}
                    </div>
                )}
                <input
                    ref={ref}
                    type={inputType}
                    className={cn(
                        "flex-1 min-w-0 py-3 text-md bg-transparent outline-none",
                        leftElement ? "pl-3" : "pl-6",
                        rightElement ? "pr-3" : "pr-6"
                    )}
                    placeholder={placeholder}
                    {...rest}
                />
                {rightElement && (
                    <div className="pr-6 flex items-center shrink-0">
                        {rightElement}
                    </div>
                )}
            </div>
        </div>
    );
});

interface PasswordInputProps {
    placeholder: string;
    label?: string;
    containerStyle?: string;
    className?: string;
}

export function PasswordInput({ placeholder, label, containerStyle, className }: PasswordInputProps) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <BaseInput
            placeholder={placeholder}
            label={label}
            containerStyle={containerStyle}
            className={className}
            type={isVisible ? "text" : "password"}
            rightElement={
                <button
                    type="button"
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    className="relative grid size-4.5 place-items-center cursor-pointer"
                    onClick={() => setIsVisible((prev) => !prev)}
                >
                    <AnimatePresence initial={false}>
                        {isVisible ? (
                            <motion.span
                                key="eye-off"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                className="absolute inset-0 grid place-items-center"
                            >
                                <IconEye size={18} strokeWidth={2.25} />
                            </motion.span>
                        ) : (
                            <motion.span
                                key="eye"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                className="absolute inset-0 grid place-items-center"
                            >
                                <IconEyeOff size={18} strokeWidth={2.25} />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </button>
            }
        />
    );
}

const countries = [
    { code: "EG", dial: "+20", label: "🇪🇬 +20" },
    { code: "SA", dial: "+966", label: "🇸🇦 +966" },
    { code: "US", dial: "+1", label: "🇺🇸 +1" },
    { code: "GB", dial: "+44", label: "🇬🇧 +44" },
] as const;

interface PhoneInputProps {
    placeholder?: string;
    label?: string;
    containerStyle?: string;
    className?: string;
    value?: string;
    onValueChange?: (fullNumber: string) => void;
}

export function PhoneInput({
    placeholder = "Phone number",
    label,
    containerStyle,
    className,
    value,
    onValueChange,
}: PhoneInputProps) {
    const [country, setCountry] = useState<(typeof countries)[number]>(countries[0]);
    const [open, setOpen] = useState(false);
    const [number, setNumber] = useState(value ?? "");
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    function handleNumberChange(e: ChangeEvent<HTMLInputElement>) {
        const next = e.target.value.replace(/[^\d]/g, "");
        setNumber(next);
        onValueChange?.(`${country.dial}${next}`);
    }

    function handleCountrySelect(c: (typeof countries)[number]) {
        setCountry(c);
        setOpen(false);
        onValueChange?.(`${c.dial}${number}`);
    }

    return (
        <BaseInput
            type="phone"
            placeholder={placeholder}
            label={label}
            containerStyle={containerStyle}
            className={className}
            value={number}
            onChange={handleNumberChange}
            leftElement={
                <div className="relative" ref={containerRef}>
                    <button
                        type="button"
                        className="flex items-center gap-x-1 text-sm cursor-pointer"
                        onClick={() => setOpen((prev) => !prev)}
                    >
                        <span>{country.label}</span>
                        <motion.span
                            animate={{ rotate: open ? 180 : 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            <IconChevronDown size={14} strokeWidth={2.25} />
                        </motion.span>
                    </button>
                    <AnimatePresence>
                        {
                            open && (
                                <motion.ul
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -4 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute top-full left-0 mt-2 w-32 rounded-lg bg-white shadow-lg py-1 z-50"
                                >
                                    {
                                        countries.map((item) => (
                                            <li key={item.code}>
                                                <button
                                                    type="button"
                                                    className="w-full text-left px-3 py-1.5 text-sm hover:bg-gray-100 cursor-pointer"
                                                    onClick={() => handleCountrySelect(item)}
                                                >
                                                    {item.label}
                                                </button>
                                            </li>
                                        ))
                                    }
                                </motion.ul>
                            )
                        }
                    </AnimatePresence>
                </div>
            }
        />
    );
}