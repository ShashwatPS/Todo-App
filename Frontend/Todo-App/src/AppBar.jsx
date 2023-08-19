import {AppBar, Button} from "@mui/material";
import "./CSS/AppBarCSS.css"

function Appbar(){
    return(
        <div>
            <AppBar position="sticky"
                    sx={{
                color: "white",
                bgcolor: "black",
                height: "38px",
            }} className={"bar"}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <div className={"title"}
                    onClick={()=>{
                        window.location="/";
                    }}
                    >
                        TODO APP
                    </div>
                    <div style={{
                        display: "flex",
                    }}>
                    <Button variant="text" sx={{color: "white"}}
                        onClick={() => {
                        window.location = "/showtodo";
                    }}
                    >SHOW</Button>
                    <Button variant="text" sx={{color: "white"}}
                            onClick={() => {
                                window.location = "/addtodo";
                            }}
                    >ADD</Button>
                    </div>
                </div>
            </AppBar>
        </div>
    )
}

export default Appbar;