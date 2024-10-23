import { Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem } from "@nextui-org/react";

import { useThemeToggleButton } from "./ThemeToggleButton.hooks";
import {
  type ThemeToggleButtonVariantProps,
  themeToggleButtonVariants,
} from "./ThemeToggleButton.variants";

type ThemeToggleButtonProps = ThemeToggleButtonVariantProps;

const ThemeToggleButton = (props: ThemeToggleButtonProps): JSX.Element => {
  const { size, ...otherProps } = props;
  const {
    state: { theme, isLoading },
    action: { switchTheme },
  } = useThemeToggleButton();

  const { themeIcon } = themeToggleButtonVariants({ size, ...otherProps });

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly isLoading={isLoading} size={size} variant="light">
          {theme && <theme.Icon className={themeIcon()} />}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        selectedKeys={theme && [theme.key]}
        selectionMode="single"
        onAction={(key) => switchTheme(key as string)}
      >
        <DropdownItem key="light">Light</DropdownItem>
        <DropdownItem key="dark">Dark</DropdownItem>
        <DropdownItem key="system">System</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export { ThemeToggleButton };
