"use client";
import { useFormContext } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea"; // ShadCN's Textarea

interface IProps {
  required?: boolean;
  label: string;
  name: string;
  placeholder: string;
  rows?: number;
}

const ReusableTextarea = ({ label, name, placeholder, required = false, rows = 4 }: IProps) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="font-medium">
        {label}
      </label>
      <Textarea
        id={name}
        {...register(name, { required: required ? `${label} is required` : false })}
        placeholder={placeholder}
        rows={rows}
        className={`block w-full px-3 py-2 border ${errors[name] ? 'border-red-500' : ''}`}
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

export default ReusableTextarea;
