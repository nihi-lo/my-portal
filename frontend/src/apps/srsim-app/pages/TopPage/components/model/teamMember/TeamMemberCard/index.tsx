import { Card } from "@nextui-org/react";

import {
  type TeamMemberCardVariantProps as VariantProps,
  teamMemberCardVariants as variants,
} from "./variants";

interface TeamMemberCardProps extends VariantProps {
  children?: React.ReactNode | React.ReactNode[];
}

const TeamMemberCard = ({ children, ...props }: TeamMemberCardProps): JSX.Element => {
  /* ClassName variants */
  const { base } = variants();

  return (
    <Card radius="none" className={base()} {...props}>
      {children}
    </Card>
  );
};
TeamMemberCard.displayName = "TeamMemberCard";

export { type TeamMemberCardProps, TeamMemberCard };
