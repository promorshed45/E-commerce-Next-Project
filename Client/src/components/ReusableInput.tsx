"user client";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input"; // ShadCN's Input
import { Label } from "./ui/label";

interface IProps {
    required?: boolean;
    type?: string;
    label: string;
    name: string;
    placeholder: string;
}

const ReusableInput = ({ required = false, type = "text", placeholder, label, name }: IProps) => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="space-y-2">
            <Label htmlFor={name} className="font-medium">
                {label}
            </Label>
            <Input
                id={name}
                {...register(name, { required: required ? `${label} is required` : false })}
                type={type}
                placeholder={placeholder}
                className={`block w-full px-3 py-2 border ${errors[name] ? 'border-red-500' : ''} `}
                aria-invalid={!!errors[name]}
            />
            {errors[name] && (
                <p className="mt-1 text-sm text-red-500">
                    {errors[name]?.message as string}
                </p>
            )}
        </div>
    );
};

export default ReusableInput;
