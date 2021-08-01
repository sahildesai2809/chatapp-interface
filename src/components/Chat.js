import React, { useState, useEffect } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import "./Chat.css";
import fire from "../fire";
import Navbar from './Navbar'

function Chat() {
  const [msg, setMsg] = useState("");
  const [msgs, setMsgs] = useState([]);
  const handleChange = (e) => {
    setMsg(e.target.value);
  };

  useEffect(() => {
    readMsg();
  }, []);
  const handleClick = () => {
    fire.database().ref("/chat").push({
      message: msg,
      user: "user",
    });
  };

  const readMsg = () => {
    fire
      .database()
      .ref("/chat")
      .on("value", (snapshot) => {
        const messagesArray = [];
        const messagesObject = snapshot.val();
        for (let key in messagesObject) {
          messagesArray.push(messagesObject[key]);
        }
        setMsgs(messagesArray);
      });
  };
  console.log("messages", msgs);
  return (
    <>
      <Navbar  />
      <div className="content">
        <Grid container justify="center" className="chatContainer">
          <Grid
            item
            xs={6}
            style={{ border: "1px solid black", padding: "8px" }}
          >
            <Grid container>
              <Grid
                item
                xs={12}
                style={{
                  backgroundColor: "tomato",
                  padding: "10px",
                  color: "#fff",
                }}
              >
                User
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} style={{ height: "40vh", overflow: "auto" }}>
                {msgs.length > 0
                  ? msgs.map((msg, i) => {
                      return (
                        <p key={i}>
                          {msg.message}--{msg.user}
                        </p>
                      );
                    })
                  : null}
              </Grid>
            </Grid>
            <Grid
              container
              justify="center"
              alignItems="center"
              style={{ padding: 10 }}
              spacing={2}
            >
              <Grid item xs={9}>
                {" "}
                <TextField
                  style={{ widht: "100%" }}
                  id="standard-basic"
                  label="Standard"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={3}>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleClick}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Chat;
