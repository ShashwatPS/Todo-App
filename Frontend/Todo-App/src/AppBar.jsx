import {AppBar, FormControlLabel, Switch, Typography} from "@mui/material";

function Appbar(){
    return(
        <div>
            <AppBar position="sticky">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography
                        variant={"h6"}
                        style={{
                            marginLeft: "10px",
                        }}
                    >
                        TODO APP
                    </Typography>
                </div>
            </AppBar>
        </div>
    )
}

export default Appbar;