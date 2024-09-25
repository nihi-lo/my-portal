import { Button, Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";

import { assets } from "@/apps/gakusim-app/assets";
import { Container, HStack, Section, VStack } from "@/components/ui";

import { ContestSimulateButton } from "./components/ContestSimulateButton";
import { PlanDropdown } from "./components/PlanDropdown";

const TopPage = (): JSX.Element => {
  return (
    <Container as="main">
      <Section headingAs="h2" title="ユニット編成">
        <VStack align="center" gap="md">
          <HStack gap="md" className="grid w-full grid-cols-1 xl:grid-cols-3">
            {/* ステージ１ */}
            <Card className="max-w-[400px]">
              <CardHeader>
                <HStack align="start" justify="center" gap="md" className="w-full">
                  <HStack align="center" gap="md">
                    {/* ステージ */}
                    <VStack align="end" justify="between" gap="xs" className="h-16">
                      <p className="text-large font-semibold text-content1-foreground">
                        ステージ１
                      </p>
                      <PlanDropdown />
                    </VStack>

                    {/* Pアイテム */}
                    <Button isIconOnly className="h-16 w-16 border-medium border-default">
                      <Image
                        alt="アプリアイコン"
                        radius="md"
                        src={assets.img.PItems0001}
                        width={64}
                      />
                    </Button>
                  </HStack>

                  <VStack align="start" justify="between" gap="xs" className="h-16">
                    {/* ターン数 */}
                    <HStack align="center" justify="end" gap="sm">
                      <HStack
                        align="center"
                        justify="center"
                        px="md"
                        className="h-6 rounded-tr-lg bg-primary"
                      >
                        <p className="text-small text-primary-foreground">ターン</p>
                      </HStack>
                      <p className="text-large font-semibold text-content1-foreground">8</p>
                    </HStack>

                    {/* 総合力 */}
                    <HStack align="center" justify="end" gap="sm">
                      <HStack
                        align="center"
                        justify="center"
                        px="md"
                        className="h-6 rounded-tr-lg bg-primary"
                      >
                        <p className="text-small text-primary-foreground">総合力</p>
                      </HStack>
                      <p className="text-large font-semibold text-content1-foreground">27906</p>
                    </HStack>
                  </VStack>
                </HStack>
              </CardHeader>
              <Divider />
              <CardBody></CardBody>
            </Card>

            {/* ステージ２ */}
            <Card className="max-w-[400px]">
              <CardHeader>
                <HStack align="start" justify="center" gap="md" className="w-full">
                  <HStack align="center" gap="md">
                    {/* ステージ */}
                    <VStack align="end" justify="between" gap="xs" className="h-16">
                      <p className="text-large font-semibold text-content1-foreground">
                        ステージ２
                      </p>
                      <PlanDropdown />
                    </VStack>

                    {/* Pアイテム */}
                    <Button isIconOnly className="h-16 w-16 border-medium border-default">
                      <Image
                        alt="アプリアイコン"
                        radius="md"
                        src={assets.img.PItems0002}
                        width={64}
                      />
                    </Button>
                  </HStack>

                  <VStack align="start" justify="between" gap="xs" className="h-16">
                    {/* ターン数 */}
                    <HStack align="center" justify="end" gap="sm">
                      <HStack
                        align="center"
                        justify="center"
                        px="md"
                        className="h-6 rounded-tr-lg bg-primary"
                      >
                        <p className="text-small text-primary-foreground">ターン</p>
                      </HStack>
                      <p className="text-large font-semibold text-content1-foreground">8</p>
                    </HStack>

                    {/* 総合力 */}
                    <HStack align="center" justify="end" gap="sm">
                      <HStack
                        align="center"
                        justify="center"
                        px="md"
                        className="h-6 rounded-tr-lg bg-primary"
                      >
                        <p className="text-small text-primary-foreground">総合力</p>
                      </HStack>
                      <p className="text-large font-semibold text-content1-foreground">27906</p>
                    </HStack>
                  </VStack>
                </HStack>
              </CardHeader>
              <Divider />
              <CardBody></CardBody>
            </Card>

            {/* ステージ３ */}
            <Card className="max-w-[400px]">
              <CardHeader>
                <HStack align="start" justify="center" gap="md" className="w-full">
                  <HStack align="center" gap="md">
                    {/* ステージ */}
                    <VStack align="end" justify="between" gap="xs" className="h-16">
                      <p className="text-large font-semibold text-content1-foreground">
                        ステージ３
                      </p>
                      <PlanDropdown />
                    </VStack>

                    {/* Pアイテム */}
                    <Button isIconOnly className="h-16 w-16 border-medium border-default">
                      <Image
                        alt="アプリアイコン"
                        radius="md"
                        src={assets.img.PItems0003}
                        width={64}
                      />
                    </Button>
                  </HStack>

                  <VStack align="start" justify="between" gap="xs" className="h-16">
                    {/* ターン数 */}
                    <HStack align="center" justify="end" gap="sm">
                      <HStack
                        align="center"
                        justify="center"
                        px="md"
                        className="h-6 rounded-tr-lg bg-primary"
                      >
                        <p className="text-small text-primary-foreground">ターン</p>
                      </HStack>
                      <p className="text-large font-semibold text-content1-foreground">8</p>
                    </HStack>

                    {/* 総合力 */}
                    <HStack align="center" justify="end" gap="sm">
                      <HStack
                        align="center"
                        justify="center"
                        px="md"
                        className="h-6 rounded-tr-lg bg-primary"
                      >
                        <p className="text-small text-primary-foreground">総合力</p>
                      </HStack>
                      <p className="text-large font-semibold text-content1-foreground">27906</p>
                    </HStack>
                  </VStack>
                </HStack>
              </CardHeader>
              <Divider />
              <CardBody></CardBody>
            </Card>
          </HStack>
          <ContestSimulateButton />
        </VStack>
      </Section>
      <Section headingAs="h2" title="対戦結果">
        <p>まだ対戦していません。</p>
      </Section>
    </Container>
  );
};

export { TopPage };
