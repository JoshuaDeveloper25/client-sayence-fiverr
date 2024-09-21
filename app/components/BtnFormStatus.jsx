"use client";

import { useFormStatus } from "react-dom";

const BtnFormStatus = ({ styles, buttonText }) => {
  const status = useFormStatus();

  return (
    <button className={styles} type="submit" disabled={status.pending}>
      {status.pending ? "Loading..." : buttonText}
    </button>
  );
};

export default BtnFormStatus;
