import {Button, Typography} from "@mui/material";
import {useEffect, useState} from "react";

function Todos(){
    const [Todo, SetTodo] = useState([]);
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


    return(
        <div>
            {Todo.map((data) => {
                return (
                    <div
                        key={data.id}
                        style={{
                            display: "flex",
                        }}
                    >
                        <div
                            style={{
                                paddingRight: "110px",
                                marginRight: "0px",
                            }}
                        >
                            <Typography variant={"h6"}>Title - {data.title}</Typography>
                        </div>
                        <div
                            style={{
                                paddingLeft: "0px",
                                marginRight: "50px",
                            }}
                        >
                            <Typography variant={"h6"}>
                                Description - {data.description}
                            </Typography>
                        </div>
                        <Button
                            onClick={() => {
                                function callback2(data) {
                                    console.log(data);
                                }
                                function callback1(res) {
                                    fetchTodos();
                                    res.json().then(callback2);
                                }
                                fetch(`http://localhost:3000/todos/${data.id}`, {
                                    method: "DELETE",
                                    headers: {
                                        "Content-type": "application/json",
                                    },
                                }).then(callback1);
                            }}
                        >
                            Delete
                        </Button>
        </div>)})}
            </div>)
}


export default Todos;