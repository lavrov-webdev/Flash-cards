import React, { ChangeEventHandler, FC } from 'react'

type CustomRadioButtonProps = {
  clickHandler: ChangeEventHandler<HTMLInputElement>,
  checked: boolean,
  name: string,
}

const CustomRadioButton: FC<CustomRadioButtonProps> = ({
  clickHandler,
  checked,
  name,
  children
}) => {

  return (
    <li className="buttonsItem">
      <label>
        <input onChange={clickHandler} checked={checked} name={name} type="radio" />
        <span>{children}</span>
      </label>
    </li>
  )
}

export default CustomRadioButton