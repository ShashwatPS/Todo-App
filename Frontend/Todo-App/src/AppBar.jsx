import {AppBar, Typography} from "@mui/material";
import "./AppBarCSS.css"

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
                    <div className={"title"}>
                        TODO APP
                    </div>
                </div>
            </AppBar>
        </div>
    )
}

export default Appbar;