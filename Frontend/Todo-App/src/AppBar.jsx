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
                    <FormControlLabel
                        value="end"
                        control={<Switch color="default" />}
                        label="THEME"
                        labelPlacement="end"
                    />
                </div>
            </AppBar>
        </div>
    )
}

export default Appbar;