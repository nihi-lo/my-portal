import { CardBody, Input, Tab, Tabs } from "@heroui/react";

import { assets } from "@/apps/srsim-app/assets";
import { HStack, VStack } from "@/components/ui";

import {
  type TeamMemberCardBodyVariantProps as VariantProps,
  teamMemberCardBodyVariants as variants,
} from "./variants";

type TeamMemberCardBodyProps = VariantProps;

const TeamMemberCardBody = ({ ...props }: TeamMemberCardBodyProps): React.JSX.Element => {
  /* ClassName variants */
  const { base } = variants();

  return (
    <CardBody className={base()} {...props}>
      <Tabs fullWidth variant="underlined">
        {/* 光円錐タブ */}
        <Tab
          key="light-cone"
          title={
            <HStack align="center" gap="xs">
              <div
                className="size-5 bg-default-500 group-data-[selected=true]:bg-foreground"
                style={{
                  WebkitMaskImage: `url(${assets.icon.sign.LightCone})`,
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",

                  maskImage: `url(${assets.icon.sign.LightCone})`,
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              />
              <span className="hidden lg:block">{"Light Cone"}</span>
            </HStack>
          }
        >
          <VStack gap="md">
            <Input isRequired label="Email" placeholder="Enter your email" type="email" />
            <Input isRequired label="Password" placeholder="Enter your password" type="password" />
          </VStack>
        </Tab>
        {/* 遺物タブ */}
        <Tab
          key="relics"
          title={
            <HStack align="center" gap="xs">
              <div
                className="size-5 bg-default-500 group-data-[selected=true]:bg-foreground"
                style={{
                  WebkitMaskImage: `url(${assets.icon.sign.Relics})`,
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",

                  maskImage: `url(${assets.icon.sign.Relics})`,
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              />
              <span className="hidden lg:block">{"Relics"}</span>
            </HStack>
          }
        >
          <VStack gap="md">
            <Input isRequired label="Name" placeholder="Enter your name" type="password" />
            <Input isRequired label="Email" placeholder="Enter your email" type="email" />
            <Input isRequired label="Password" placeholder="Enter your password" type="password" />
          </VStack>
        </Tab>
      </Tabs>
    </CardBody>
  );
};
TeamMemberCardBody.displayName = "TeamMemberCardBody";

export { type TeamMemberCardBodyProps, TeamMemberCardBody };
