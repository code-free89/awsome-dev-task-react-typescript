import React from 'react';
import "./text-input.css";

type Props = {
  label?: string;
  value: string;
  name: string;
  disabled?: boolean;
  className?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
  onChangeValue?: Function;
}

const TextInput: React.FC<Props> = ({
  label = "",
  name,
  disabled = false,
  className = "",
  required = false,
  placeholder = "",
  error = "",
  value,
  onChangeValue = () => {}
}) => {

  return (
    <div className={className}>
      {
        label ? (
          <label htmlFor={name}>
            {label}
          </label>
        ) : null
      }
      <div className="mt-1">
        <input
          tabIndex={0}
          id={name}
          name={name}
          type={"text"}
          required={required}
          placeholder={placeholder}
          className=""
          disabled={disabled}
          value={value}
          onChange={(e: any) => onChangeValue(e.target.value)}
        />
      </div>
      {
        error !== "" && (
          <div className={"error"}>
            {error}
          </div>
        )
      }
    </div>
  )
}

export default TextInput