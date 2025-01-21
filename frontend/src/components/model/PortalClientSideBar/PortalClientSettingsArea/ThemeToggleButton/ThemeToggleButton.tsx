import { Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem } from "@nextui-org/react";

import { useThemeToggleButton } from "./ThemeToggleButton.hooks";
import { type ThemeToggleButtonVariantProps } from "./ThemeToggleButton.variants";

type ThemeToggleButtonProps = ThemeToggleButtonVariantProps;

const ThemeToggleButton = (props: ThemeToggleButtonProps): React.JSX.Element => {
  const { size } = props;
  const {
    state: { theme, isLoading, tvSlots },
    action: { switchTheme },
  } = useThemeToggleButton({ size });

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly isLoading={isLoading} size={size} variant="light">
          {theme && <theme.Icon className={tvSlots.themeIcon()} />}
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
