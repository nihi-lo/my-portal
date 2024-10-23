import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { type ContainerHook } from "@/utils/containerHook";

import { type PageForwardButton, type PageBackButton } from "./WindowNavigationButtonGroup.types";

interface State {
  pageBackButton: PageBackButton;
  pageForwardButton: PageForwardButton;
}

interface Action {
  backPage: () => void;
  forwardPage: () => void;
}

const useWindowNavigationButtonGroup: ContainerHook<State, Action> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [canGoBackPage, setCanGoBackPage] = useState(false);
  const [canGoForwardPage, setCanGoForwardPage] = useState(false);

  useEffect(() => {
    setCanGoBackPage(location.key !== "default");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    setCanGoForwardPage(window.history.length > window.history.state.idx + 1);
  }, [location.key]);

  return {
    state: {
      pageBackButton: {
        isDisabled: !canGoBackPage,
      },
      pageForwardButton: {
        isDisabled: !canGoForwardPage,
      },
    },
    action: {
      backPage: () => navigate(-1),
      forwardPage: () => navigate(1),
    },
  };
};

export { useWindowNavigationButtonGroup };
