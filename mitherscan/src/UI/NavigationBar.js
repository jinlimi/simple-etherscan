import { Link } from "react-router-dom";
import classes from './NavigationBar.module.css'


const NavigationBar = () => {
    return(
        <ul className={classes.ul}>
            <li className={classes.li}>
                <Link to='/' className={classes.text} style={{ textDecoration: 'none' }}>Home</Link>
            </li>
            <li className={classes.li}>
                <Link to='/balance' className={classes.text} style={{ textDecoration: 'none' }}>Account</Link>
            </li>
            <li className={classes.li}>
                <Link to='/transactions' className={classes.text} style={{ textDecoration: 'none' }}>Transactions</Link>
            </li>
            <li className={classes.li}>
                <Link to='/blocks' className={classes.text} style={{ textDecoration: 'none' }}>Blocks</Link>
            </li>
        </ul>     
    )
};

export default NavigationBar;