import React from 'react';
import { Input } from 'antd';
import { ICustomInput } from '../../../types/types';

const CustomInput: React.FC<ICustomInput> = ({ label, required, ...props }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-gray-600 text-sm font-medium">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <Input
        {...props}
        className="mt-1 border-b border-gray-300 focus:border-blue-500 focus:ring-0"
      />
    </div>
  );
};

export default CustomInput;
