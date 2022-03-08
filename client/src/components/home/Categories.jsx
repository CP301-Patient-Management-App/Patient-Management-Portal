
import { Button, Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { categories } from '../../constants/data';

const useStyle = makeStyles({
    table: {
        border: '1px solid rgba(224, 224, 224, 1)',
        
    },
    write: {
        margin: 20,
        width: '85%',
        background: '#6495ED',
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'Bold',
        fontSize: 15

    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    },
    cell : {
        fontSize: 15,
        fontWeight: 'Bold'
    }
})

const Categories = ({ match }) => {
    const classes = useStyle();
    // const location = useLocation();
    // let params = new URLSearchParams(location.search);
    return (
        <>
            <Link to='/create' className={classes.link}>
                <Button variant="contained" className={classes.write} >Create New</Button>
            </Link>
            
            <Table className={classes.table}>
                <TableHead>
                    <TableCell className = {classes.cell}>
                        {/* <Link to={"/"} className={classes.link}> */}
                            General
                        {/* </Link> */}
                    </TableCell>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow>
                                <TableCell className = {classes.cell}>
                                    {/* <Link to={`/?category=${category}`} className={classes.link}> */}
                                        {category}
                                    {/* </Link> */}
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