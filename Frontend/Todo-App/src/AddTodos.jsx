import {useEffect, useState} from "react";
import {Button, TextField} from "@mui/material";

function AddTodos() {
    const [Todo, SetTodo] = useState([]);
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");

    const fetchTodos = ()=>{
        fetch("http://localhost:3000/todos", {
            method: "GET",
        }).then((res) => {
            res.json().then((data) => {
                SetTodo(data.Todos);
            });
        });
    }

    useEffect(() => {
        fetch("http://localhost:3000/todos", {
            method: "GET",
        }).then((res) => {
            res.json().then((data) => {
                SetTodo(data.Todos);
            });
        });
    }, []);

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "350px",
                }}
            >
                <div
                    style={{
                        marginBottom: "35px",
                    }}
                >
                    <TextField
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        style={{
                            marginRight: "50px",
                        }}
                        id="title"
                        label="Title"
                        variant="standard"
                    />
                    <TextField
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        style={{
                            marginRight: "35px",
                        }}
                        id="description"
                        label="Description"
                        variant="standard"
                    />
                    <Button
                        onClick={() => {
                            function callback2(data) {
                                fetchTodos();
                                console.log(data);
                            }

                            function callback1(res) {
                                res.json().then(callback2);
                            }

                            fetch("http://localhost:3000/todos", {
                                method: "POST",
                                body: JSON.stringify({
                                    title: Title,
                                    description: Description,
                                }),
                                headers: {
                                    "Content-type": "application/json",
                                },
                            }).then(callback1);
                        }}
                    >
                        Add Todo
                    </Button>
                </div>
            </div>
        </>
    );
}

export default AddTodos;