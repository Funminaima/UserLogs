interface Prop {
  onClick: () => void;
}
const Backdrop = ({ onClick }: Prop) => {
  return <div className="backdrop" onClick={onClick}></div>;
};

export default Backdrop;
