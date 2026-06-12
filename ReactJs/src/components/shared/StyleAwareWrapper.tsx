
interface Props {
  children: React.ReactNode;
  lyraClassName: string;
  defaultClassName?: string;
}

const StyleAwareWrapper = ({ children, lyraClassName }: Props) => {
  return (
    <div className={lyraClassName}>
      {children}
    </div>
  );
};

export default StyleAwareWrapper;
