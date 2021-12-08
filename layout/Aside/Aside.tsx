import { Menu } from "../../components/Menu/Menu";
import { IAside } from "./Aside.props";

export const Aside = ({...props}: IAside) => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};