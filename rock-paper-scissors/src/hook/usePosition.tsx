import { SignType, UserChoice } from "@/app/type/global";
import { useState } from "react";

const usePositionClasses = (): [string, (sign: SignType) => void] => {
  const [className, setClassName] = useState<string>("");

  const updateClassName = (sign: UserChoice) => {
    switch (sign) {
      case "rock":
        setClassName(
          "absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        );
        break;
      case "paper":
        setClassName("absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2");
        break;
      case "scissors":
        setClassName("absolute top-0 right-0 translate-x-1/2 -translate-y-1/2");
        break;
      default:
        setClassName("");
        break;
    }
  };

  return [className, updateClassName];
};

export default usePositionClasses;
