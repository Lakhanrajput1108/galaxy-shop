import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: 400 + theme.spacing(3) * 2,
  },
  slider: {
    marginBottom: theme.spacing(1.25),
    fontSize: '0.925rem',
    fontWeight: '600',
  },
}));
