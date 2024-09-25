import { useLayoutEffect, useState } from "react";

import { GetOSAsync } from "@wailsjs/go/portalservice/Service";

import { type OS } from "@/types/os";
import { type CustomHook } from "@/utils/customHook";

interface State {
  os: OS;
}

type Action = Record<string, never>;

const useOS: CustomHook<State, Action> = () => {
  const [os, setOS] = useState<OS>("undetermined");

  useLayoutEffect(() => {
    void GetOSAsync().then((os) => {
      switch (os) {
        case "windows":
          setOS("windows");
          break;
        case "macos":
          setOS("macos");
          break;
        default:
          setOS("undetermined");
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

export { type OS, useOS };
