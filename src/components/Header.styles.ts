import { Theme } from '@material-ui/core/styles';

export default (theme: Theme) => ({
    root: {
      flexGrow: 1,
      '& a:-webkit-any-link': {
        textDecoration: 'none',
        paddingRight: theme.spacing(1)
      }
    },
    home: {
      padding: theme.spacing(0, 4),
      flexGrow: 1,
      '& .MuiTypography-root': {
        color: 'white',
      }
    },
  })