import { useLayoutEffect, useState } from "react";

import { GetOSAsync } from "@wailsjs/go/portalservice/Service";

import { OS } from "@/types/enum/os";
import { type CustomHook } from "@/utils/customHook";

interface State {
  os: OS;
}

type Action = Record<string, never>;

const useOS: CustomHook<State, Action> = () => {
  const [os, setOS] = useState<OS>(OS.Undetermined);

  useLayoutEffect(() => {
    void GetOSAsync().then((os) => {
      switch (os) {
        case "windows":
          setOS(OS.Windows);
          break;
        case "macos":
          setOS(OS.Mac);
          break;
        default:
          setOS(OS.Undetermined);
          break;
      }
    });
  }, []);

  return {
    state: {
      os,
    },
    action: {},
  };
};

export { useOS };
