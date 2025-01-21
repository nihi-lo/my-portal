import { usePortalClientBody } from "./PortalClientBody.hooks";
import { type PortalClientBodyVariantProps } from "./PortalClientBody.variants";

type PortalClientBodyProps = PortalClientBodyVariantProps & {
  children: React.ReactNode;
};

const PortalClientBody = (props: PortalClientBodyProps): React.JSX.Element => {
  const { children } = props;
  const {
    state: { tvSlots },
  } = usePortalClientBody();

  return (
    <div className={tvSlots.base()}>
      <div className={tvSlots.inner()}>{children}</div>
    </div>
  );
};

export { PortalClientBody };
