
import { Button, Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Grid } from '@material-ui/core';
import { Link,useLocation } from 'react-router-dom';

import { categories } from '../../constants/data';

const useStyle = makeStyles({
    table: {
        border: '1px solid rgba(224, 224, 224, 1)',
        
    },
    write: {
        margin: 20,
        width: '85%',
        background: '#E7F2F8',
        color: 'black',
        textDecoration: 'none',
        fontSize: 15,
        "&:hover" : {
            background: '#74BDCB',
          }

    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    },
    cell : {
        fontSize: 15,
    }
})

const Categories = ({ match }) => {
    const classes = useStyle();
    const location = useLocation();
    // let params = new URLSearchParams(location.search);
    return (
        <>
            <Link to='/create' className={classes.link}>
                <Button variant="contained" className={classes.write}  >create new</Button>
            </Link>
            
            <Table className={classes.table}>
                <TableHead>
                    <TableCell className = {classes.cell}>
                    {/* <Link to={`/create/${location.search}`} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" className={classes.write}>Create Blog</Button>
                    </Link> */}
                    </TableCell>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow>
                                <TableCell className = {classes.cell}>
                                    <Link to={`/?categories=${category}`} className={classes.link}>
                                        {category}
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default Categories;