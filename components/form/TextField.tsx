import clsx from 'clsx';
import FormFieldContainer from './FormFieldContainer';
export default function TextField({
  register,
  required = false,
  name,
  label,
  errors,
  type = 'text',
}: {
  register: Function;
  required?: boolean;
  name: string;
  label: string;
  errors?: any;
  type?: string;
}) {
  return (
    <FormFieldContainer>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={clsx(
          'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
          { 'border-red-500': errors[name], 'border-gray-300': !errors[name] }
        )}
        type={type}
        name={name}
        {...register(name, { required })}
      />
      {errors[name] && (
        <p className="text-red-500 text-xs italic mt-2">
          {errors[name].message}
        </p>
      )}
    </FormFieldContainer>
  );
}
