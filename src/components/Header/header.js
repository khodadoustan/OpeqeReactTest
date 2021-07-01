import {Grid, Hidden, IconButton, Link, makeStyles} from "@material-ui/core";
import {useEffect, useState} from "react";
import {ShoppingBasket} from "@material-ui/icons"

const useStyle = makeStyles({
    header: {
        position: "fixed",
        zIndex: 1000,
        top: 0,
        width: "100%",
        left: 0,
        textAlign: "center",
        transition: "background-color .4s",
        padding: "10px",

    },
    link: {
        textDecoration: "none",
        padding: ".5rem",
        margin: ".5rem",
        transition: "all .2s ease-in",
        "&:hover": {
            textDecoration: "none",
            color: "#FFF",
            backgroundColor: "#000",
            borderRadius: "30px"
        }
    },
    login: {
        padding: ".5rem",
        borderRadius: "30px",
        border: "1.5px solid #000",
        fontSize: "12px",
        textDecoration: "none",
        "&:hover": {
            textDecoration: "none",
        }
    },
    signUp: {
        padding: ".5rem",
        margin: "10px",
        borderRadius: "30px",
        border: "none",
        fontSize: "12px",
        textDecoration: "none",
        backgroundColor: "#000",
        color: "#fff",
        "&:hover": {
            textDecoration: "none",
        }
    }
});

function Header(props) {
    const [changeColor, setChangeColor] = useState(false);
    const classes = useStyle()

    const listenScrollEvent = (e) => {
        if (window.scrollY > 100) {
            setChangeColor(true)
        } else {
            setChangeColor(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
    }, [])


    return <>
        <Hidden smUp>
            <header className={classes.header} style={{backgroundColor: "#FFF", paddingLeft: 0}}>
                <Grid container justify="center">
                    <Grid container md={12} sm={12} xs={12} alignItems="center" justify="center">
                        <div>
                            <a href="/" style={{width: "100%"}}>
                                <img src="https://cdn.opeqe.com/image/Logo/opeqe-logo.svg" alt="Opeqq"
                                     style={{width: "150px", height: "50px"}}/>
                            </a>
                        </div>

                    </Grid>
                </Grid>
            </header>
        </Hidden>
        <Hidden smDown>
            <header className={classes.header} style={{backgroundColor: changeColor ? "#FFF" : "rgb(255,210,0)"}}>
                <Grid container justify="center">
                    <Grid container md={11} alignItems="center" justify="space-between">
                        <div>
                            <a href="/" style={{width: "100%"}}>
                                <img src="https://cdn.opeqe.com/image/Logo/opeqe-logo.svg" alt="Opeqq"
                                     style={{width: "150px", height: "50px"}}/>
                            </a>
                        </div>
                        <span>
                            <Link href="#" color="inherit" className={classes.link}>Orders</Link>
                            <Link href="#" color="inherit" className={classes.link}>Locations</Link>
                            <Link href="#" color="inherit" className={classes.login}>Log In</Link>
                            <Link href="#" color="inherit" className={classes.signUp}>Sign Up</Link>
                            <IconButton aria-label="Basket" component="span" style={{color: "#000"}}>
                              <ShoppingBasket/>
                            </IconButton>
                        </span>
                    </Grid>
                </Grid>
            </header>
        </Hidden>

    </>
}

export default Header
