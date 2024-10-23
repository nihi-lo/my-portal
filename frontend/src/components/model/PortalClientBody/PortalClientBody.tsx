import {
  type PortalClientBodyVariantProps,
  portalClientBodyVariants,
} from "./PortalClientBody.variants";

type PortalClientBodyProps = PortalClientBodyVariantProps & {
  children: React.ReactNode;
};

const PortalClientBody = (props: PortalClientBodyProps): JSX.Element => {
  const { children } = props;

  const { base, inner } = portalClientBodyVariants();

  return (
    <div className={base()}>
      <div className={inner()}>{children}</div>
    </div>
  );
};

export { PortalClientBody };
