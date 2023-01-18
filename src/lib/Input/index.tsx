import { Container, ContainerIcon, position } from "./styles.css";
export { Input } from "./styles.css";

export interface RootProps {
  children: React.ReactNode;
}

function Root(props: RootProps) {
  return <Container>{props.children}</Container>;
}

export interface IconProps extends RootProps {
  position: keyof typeof position;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function Icon(props: IconProps) {
  return (
    <ContainerIcon position={props.position}>{props.children}</ContainerIcon>
  );
}

export { Root, Icon };
