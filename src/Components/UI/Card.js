import classes from "./Card.module.css";
const Card = (props) => {
  return (
    <div
      className={`${classes.card} ${props.className}`}
      style={{
        backgroundImage: `url(${props.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {props.children}
    </div>
  );
};
export default Card;
