import React from "react";
interface States {
  [index: string]: string | number;
}
export const useInputs = (): [
  Array<States>,
  (e: React.FormEvent<HTMLInputElement>) => void
] => {
  const [inputs, setInputs] = React.useState<States[]>([]);
  const filedHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.currentTarget.name]: e.currentTarget.value });
  };
  return [inputs, filedHandler];
};
