import React from "react";

export const FormError = (props) => {
  return (
    <p className="text-xs font-medium text-red-500 block">{props.children}</p>
  );
};
