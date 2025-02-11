import { useDisclosure } from "@heroui/react";

import { assets } from "@/apps/srsim-app/assets";
import { Container, HStack, Section } from "@/components/ui";

import {
  TeamMemberCard,
  TeamMemberCardHeader,
  TeamMemberSelectionModal,
  TeamMemberCardBody,
} from "./components/model/teamMember";

const TopPage = (): React.JSX.Element => {
  // prettier-ignore
  const characters: {
    id: string;
    rarity: 4 | 5;
    imgSrc: string;
    isTeamMember: boolean;
    isShow: boolean;
    selectionType: "Add" | "Remove" | "Switch";
  }[] = [
    { id: "1208", rarity: 5, imgSrc: assets.img[1208], isTeamMember: true, isShow: true, selectionType: "Remove" },
    { id: "1214", rarity: 4, imgSrc: assets.img[1214], isTeamMember: true, isShow: true, selectionType: "Switch" },
    { id: "1306", rarity: 5, imgSrc: assets.img[1306], isTeamMember: true, isShow: true, selectionType: "Switch" },
    { id: "1303", rarity: 5, imgSrc: assets.img[1303], isTeamMember: true, isShow: true, selectionType: "Switch" },
    { id: "1217", rarity: 5, imgSrc: assets.img[1217], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1211", rarity: 5, imgSrc: assets.img[1211], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1203", rarity: 5, imgSrc: assets.img[1203], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "8004", rarity: 5, imgSrc: assets.img[8004], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "8003", rarity: 5, imgSrc: assets.img[8003], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1104", rarity: 5, imgSrc: assets.img[1104], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1307", rarity: 5, imgSrc: assets.img[1307], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1006", rarity: 5, imgSrc: assets.img[1006], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1005", rarity: 5, imgSrc: assets.img[1005], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1004", rarity: 5, imgSrc: assets.img[1004], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1101", rarity: 5, imgSrc: assets.img[1101], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1302", rarity: 5, imgSrc: assets.img[1302], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1204", rarity: 5, imgSrc: assets.img[1204], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1003", rarity: 5, imgSrc: assets.img[1003], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1305", rarity: 5, imgSrc: assets.img[1305], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1209", rarity: 5, imgSrc: assets.img[1209], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1112", rarity: 5, imgSrc: assets.img[1112], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1102", rarity: 5, imgSrc: assets.img[1102], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "8002", rarity: 5, imgSrc: assets.img[8002], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "8001", rarity: 5, imgSrc: assets.img[8001], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1213", rarity: 5, imgSrc: assets.img[1213], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1212", rarity: 5, imgSrc: assets.img[1212], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1205", rarity: 5, imgSrc: assets.img[1205], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1107", rarity: 5, imgSrc: assets.img[1107], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1110", rarity: 4, imgSrc: assets.img[1110], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1105", rarity: 4, imgSrc: assets.img[1105], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1210", rarity: 4, imgSrc: assets.img[1210], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1106", rarity: 4, imgSrc: assets.img[1106], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1215", rarity: 4, imgSrc: assets.img[1215], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1207", rarity: 4, imgSrc: assets.img[1207], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1202", rarity: 4, imgSrc: assets.img[1202], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1009", rarity: 4, imgSrc: assets.img[1009], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1001", rarity: 4, imgSrc: assets.img[1001], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1111", rarity: 4, imgSrc: assets.img[1111], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1108", rarity: 4, imgSrc: assets.img[1108], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1201", rarity: 4, imgSrc: assets.img[1201], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1103", rarity: 4, imgSrc: assets.img[1103], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1013", rarity: 4, imgSrc: assets.img[1013], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1206", rarity: 4, imgSrc: assets.img[1206], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1002", rarity: 4, imgSrc: assets.img[1002], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1312", rarity: 4, imgSrc: assets.img[1312], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1109", rarity: 4, imgSrc: assets.img[1109], isTeamMember: false, isShow: true, selectionType: "Add" },
    { id: "1008", rarity: 4, imgSrc: assets.img[1008], isTeamMember: false, isShow: true, selectionType: "Add" },
  ];

  const { isOpen: isOpen1, onOpen: onOpenModal1, onOpenChange: onOpenChange1 } = useDisclosure();
  const { isOpen: isOpen2, onOpen: onOpenModal2, onOpenChange: onOpenChange2 } = useDisclosure();
  const { isOpen: isOpen3, onOpen: onOpenModal3, onOpenChange: onOpenChange3 } = useDisclosure();
  const { isOpen: isOpen4, onOpen: onOpenModal4, onOpenChange: onOpenChange4 } = useDisclosure();

  /* Event handlers */
  const handleSelectItem1 = (item: { id: string }) => {
    console.log(item.id);
  };

  return (
    <Container as="main">
      <Section headingAs="h2" title="パーティ">
        <HStack gap="sm">
          <TeamMemberCard>
            <TeamMemberCardHeader
              headerImageSrc={assets.img[1208]}
              rarity={5}
              onOpenModal={onOpenModal1}
            />
            <TeamMemberSelectionModal
              characters={characters}
              defaultCharacterId={"1208"}
              isOpen={isOpen1}
              onOpenChange={onOpenChange1}
              onSelectItem={handleSelectItem1}
            />
            <TeamMemberCardBody />
          </TeamMemberCard>
          <TeamMemberCard>
            <TeamMemberCardHeader
              headerImageSrc={assets.img[1214]}
              rarity={4}
              onOpenModal={onOpenModal2}
            />
            <TeamMemberSelectionModal
              characters={characters}
              defaultCharacterId={"1214"}
              isOpen={isOpen2}
              onOpenChange={onOpenChange2}
            />
            <TeamMemberCardBody />
          </TeamMemberCard>
          <TeamMemberCard>
            <TeamMemberCardHeader
              headerImageSrc={assets.img[1306]}
              rarity={5}
              onOpenModal={onOpenModal3}
            />
            <TeamMemberSelectionModal
              characters={characters}
              defaultCharacterId={"1306"}
              isOpen={isOpen3}
              onOpenChange={onOpenChange3}
            />
            <TeamMemberCardBody />
          </TeamMemberCard>
          <TeamMemberCard>
            <TeamMemberCardHeader
              headerImageSrc={assets.img[1303]}
              rarity={5}
              onOpenModal={onOpenModal4}
            />
            <TeamMemberSelectionModal
              characters={characters}
              defaultCharacterId={"1303"}
              isOpen={isOpen4}
              onOpenChange={onOpenChange4}
            />
            <TeamMemberCardBody />
          </TeamMemberCard>
        </HStack>
      </Section>
      <Section headingAs="h2" title="戦略"></Section>
      <Section headingAs="h2" title="計算結果">
        <HStack>
          <Section headingAs="h3" title="クリアラウンド数" grow="1" />
          <Section headingAs="h3" title="アクション回数" grow="1" />
        </HStack>
        <Section headingAs="h3" title="ダメージ割合" />
        <HStack>
          <Section headingAs="h3" title="回復割合" grow="1" />
          <Section headingAs="h3" title="被回復割合" grow="1" />
        </HStack>
        <Section headingAs="h3" title="有効シールド" />
        <Section headingAs="h3" title="被弾回数" />
      </Section>
    </Container>
  );
};

export { TopPage };
