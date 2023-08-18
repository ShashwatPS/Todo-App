import {AppBar, Typography} from "@mui/material";
import "./AppBarCSS.css"

function Appbar(){
    return(
        <div>
            <AppBar position="sticky" sx={{
                color: "white",
                bgcolor: "black",
            }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <div>
                        TODO APP
                    </div>
                </div>
            </AppBar>
        </div>
    )
}

export default Appbar;