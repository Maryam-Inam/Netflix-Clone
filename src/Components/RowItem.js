import React from "react";
import classes from "./RowItem.module.css";
import Card from "./UI/Card";
function RowItem(props) {
  return (
    <Card className={classes.row_item} img={props.src}>
      {props.name}
    </Card>
  );
}

export default RowItem;
