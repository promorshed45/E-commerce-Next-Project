import { useFormContext } from 'react-hook-form';
import ReusableInput from '@/components/ReusableInput';

interface InventoryInputProps {
  name: string;
  label?: string;
}

const InventoryInput: React.FC<InventoryInputProps> = ({ name, label }) => {
  const { register } = useFormContext();

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">{label || 'Inventory'}</label>
        <ReusableInput
          name={`${name}.quantity`}
          label="Quantity"
          placeholder="Enter quantity"
        />
      </div>
    </div>
  );
};

export default InventoryInput;
