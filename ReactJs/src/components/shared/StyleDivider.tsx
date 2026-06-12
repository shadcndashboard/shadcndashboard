

import Divider from "./divider";



interface Props {
  wrapperClassName?: string;
}

const StyleDivider = ({ wrapperClassName }: Props) => {
  if (wrapperClassName) {
    return (
      <div className={wrapperClassName}>
        <Divider noContainer />
      </div>
    );
  }
  return <Divider noContainer />;
};

export default StyleDivider;
