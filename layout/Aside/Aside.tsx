import { IAside } from "./Aside.props";

export const Aside = ({...props}: IAside) => {
  return (
    <div {...props}>
      aside
    </div>
  );
};