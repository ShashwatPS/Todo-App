import {AppBar, Typography} from "@mui/material";
import "./AppBarCSS.css"

function Appbar(){
    return(
        <div>
            <AppBar position="sticky"
                    sx={{
                color: "white",
                bgcolor: "black",
                height: "29px",
            }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <div style={{
                        marginTop: "4px"
                    }}>
                        TODO APP
                    </div>
                </div>
            </AppBar>
        </div>
    )
}

export default Appbar;