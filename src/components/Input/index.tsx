import { forwardRef } from "react";
import { InputContainer } from "./styles";

export const Input = forwardRef<HTMLInputElement>((props, ref) => {
  return <InputContainer ref={ref} {...props} />;
});