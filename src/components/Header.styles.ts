import { Theme } from '@material-ui/core/styles';

export default (theme: Theme) => ({
    root: {
      flexGrow: 1,
      '& a:-webkit-any-link': {
        textDecoration: 'none'
      }
    },
    title: {
      flexGrow: 1,
    },
    buttonText: {
      color: 'white',
    },
  })