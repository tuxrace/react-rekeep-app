import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
    container: {
        padding: theme.spacing(3, 6),
        [theme.breakpoints.down('md')]:{
            padding: theme.spacing(3, 3),
        }
    },
    part: {
        padding: theme.spacing(1, 0)
    },
    buttons: {
       height: theme.spacing(7)
    }
})
