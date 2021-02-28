import React, { useState } from "react";
import "./App.css";
import {
  makeStyles,
  Typography,
  Input,
  Button,
  List,
  ListItemIcon,
  Checkbox,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  list: {
    maxWidth: 300,
  },
}));

function App() {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [isChecked, setIsChecked] = useState([]);

  const onAdd = () => {
    if (input) {
      setTodos([...todos, input]);
      setIsChecked([...isChecked, false]);
    } else {
      setTodos([...todos]);
    }
    setInput("");
  };

  const onCheck = (index) => {
    isChecked.splice(index, 1, !isChecked[index]);
    setIsChecked([...isChecked]);
  };

  const onDelete = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
    isChecked.splice(index, 1);
    setIsChecked([...isChecked]);
  };

  console.log(isChecked);
  return (
    <div className="App">
      <Typography variant="h4">TODO</Typography>
      <Input
        onChange={(e) => setInput(e.target.value)}
        placeholder="enter todo"
        value={input}
      ></Input>
      <Button onClick={() => onAdd()} variant="contained" color="primary">
        Add
      </Button>

      <List className={classes.list}>
        {todos
          ? todos.map((item, index) => (
              <ListItem key={item} button onClick={() => onCheck(index)}>
                <ListItemIcon>
                  <Checkbox checked={isChecked[index]} />
                </ListItemIcon>
                <ListItemText>{item}</ListItemText>
                <ListItemSecondaryAction>
                  <IconButton onClick={() => onDelete(index)}>
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))
          : ""}
      </List>
    </div>
  );
}

export default App;
