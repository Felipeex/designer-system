import { Container } from "./styles.css";
export { Input } from "./styles.css";

export interface RootProps {
  children: React.ReactNode;
}

function Root(props: RootProps) {
  return <Container>{props.children}</Container>;
}

function Icon(props: RootProps) {
  return <>{props.children}</>;
}

export { Root, Icon };
