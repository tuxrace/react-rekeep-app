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
    buttonsContainer: {
       [theme.breakpoints.down('sm')]: {
           flexFlow: 'column-reverse',
       },
       '& .MuiGrid-item': {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
       }
    },
    buttons: {
       height: theme.spacing(7),
    }
})
