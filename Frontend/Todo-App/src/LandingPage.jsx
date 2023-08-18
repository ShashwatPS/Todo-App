import {Grid} from "@mui/material";
import "./LandingPageCSS.css"
export function LandingPage(){
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item lg={6}>
                    <div className={"containerLeft"}>
                    <div>
                        TODO APP
                    </div>
                    <div>
                        Stay organized and efficient with our sleek ToDo App. Easily manage tasks,
                        set due dates, and track progress. Experience productivity like never before.
                        Try it now!
                    </div>
                    </div>
                </Grid>
                <Grid item lg={6}>

                </Grid>
            </Grid>
        </div>
    )
}

export default LandingPage;