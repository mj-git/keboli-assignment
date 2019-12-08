import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Widget from './components/Widget';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    maxHeight: '100vh'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  content: {
    flexGrow: 1,
    textAlign: 'center',
    padding: theme.spacing(3)
  },
  widgetGrid: {
    maxHeight: '50%',
    overflow: 'auto',
    marginBottom: '0px'
  },
  tableHeader: {
    margin: '12px 0',
    textAlign: 'left',
    padding: '15px 15px'
  }
}));

function withAuth(Component) {
  return props => {
    const [token, setToken] = React.useState('');
    React.useEffect(() => {
      const token = sessionStorage.getItem('token');
      setToken(token);
      if (!token) props.history.push('/login');
    }, []);
    return token && <Component {...props} />;
  };
}

function App(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = React.useState([]);
  const [widgetData, setWidgetData] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const response = await fetch('../response.json');
      const { data } = await response.json();
      setRows(data);
    };
    getData();
  }, []);

  React.useEffect(() => {
    let widgetRows = [{ primaryText: 'Total Candidates', count: rows.length }];
    const groupBy = function(collection, key) {
      return collection.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };
    if (rows.length) {
      const group = groupBy(rows, 'domain');
      const r = Object.keys(group).map(g => ({
        primaryText: g,
        count: group[g].length
      }));
      widgetRows = widgetRows.concat(r);
    }
    setWidgetData(widgetRows);
  }, [rows]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    props.history.push('/login');
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {[
          { text: 'Dashboard', icon: <DashboardIcon /> },
          { text: 'Logout', icon: <ExitToAppIcon />, action: logout }
        ].map(({ text, icon, action = () => void 0 }) => (
          <ListItem button key={text} onClick={() => action()}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            KEBOLI MRC
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={3} className={classes.widgetGrid}>
          {widgetData.map((data, index) => (
            <Grid item xs={3} key={index}>
              <Widget {...data} />
            </Grid>
          ))}
        </Grid>

        <Paper className={classes.tableHeader}>
          <Typography component="p" color="primary">
            Scheduled List
          </Typography>
        </Paper>

        <Paper>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Candidate Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Domain</TableCell>
                <TableCell align="right">Years of Exp</TableCell>
                <TableCell align="right">Recruiter Name</TableCell>
                <TableCell align="right">Interview Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.candidateId}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.domain}</TableCell>
                    <TableCell align="right">{row.yearOfExperience}</TableCell>
                    <TableCell align="right">{row.recruiterName}</TableCell>
                    <TableCell align="right">{row.interviewType}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  rowsPerPageOptions={[]}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </Paper>
      </main>
    </div>
  );
}

export default withAuth(App);
