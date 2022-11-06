import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 200,
    cursor: 'pointer',
    backgroundSize: 'contain',
  },
  cardContent: {
    paddingBottom: 0,
  },
  description: {
    marginTop: '0.2em',
    color: 'cadetBlue',
    fontSize: '10px',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  accordion: {
    padding: theme.spacing(1, 2),
  },
  typography: {
    fontSize: '12px',
    width: '250px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    color: '#27bda1',
  },
  title: {
    fontSize: '16px',
    color: '#ffbf0b',
    backgroundColor: 'black',
    borderRadius: '4px',
    textTransform: 'none',
    marginRight: '10px',
  },
}));
