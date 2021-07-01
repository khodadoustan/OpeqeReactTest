import Header from "../components/Header/header";
import {ButtonBase, Grid, Hidden, makeStyles} from "@material-ui/core";
import {useEffect, useState} from "react";
import menuResp from "../mocks/menus.json"
import Slider from "../components/slider/slider"
import Footer from "../components/Footer/footer";

const useStyle = makeStyles({
    bgImage: {
        position: "fixed",
        top: 70,
        width: "100%",
        height: "60%",
        zIndex: 99,
        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover"
        },
    },
    pageBody: {
        width: "100%",
        marginTop: "480px",
        backgroundColor: "#FFF",
        zIndex: 100,
        '@media (max-width: 960px)': {
            marginTop: "400px",
        }
    },
    orderOptions: {
        boxShadow: "1px 0 10px -5px #a5a5a5",
        padding: "10px",
        zIndex: 1000,
        backgroundColor: "#FFF",
        "& a": {
            textAlign: "center",
            color: "#a5a5a5",
            textDecoration: "none",
            fontWeight: "500"
        }
    },
    infoSection:{
        '@media (max-width: 960px)': {
            justifyContent: "center",
        }
    },
    mode: {
        color: "#f79f1f",
        '@media (max-width: 960px)': {
            color: "#000",
        }
    },
    addrDesc:{
        '@media (max-width: 960px)': {
            fontSize: "12px",
        }
    },
    btn: {
        display: "inline-block",
        margin: "0 20px",
        "& button": {
            borderRadius: "30px",
            backgroundColor: "#000",
            padding: "10px",
            fontSize: "12px",
            fontWeight: "400",
            color: "#FFF"
        }
    },
    selectType: {
        display: "inline-block",
        position: "relative"

    },
    marker: {
        position: "absolute",
        bottom: "-5px",
        left: 0,
        width: 0,
        height: "2px",
        backgroundColor: "#026764",
        transition: "transform .4s,width .2s,-webkit-transform .4s",

    },
    item: {
        display: "inline-block",
    },
    separator: {
        display: "inline-block",
        margin: "0 6px",
        color: "#a5a5a5"
    },
    divider: {
        display: "inline-block",
        height: "30px",
        width: "2px",
        margin: "0 10px",
        backgroundColor: "#d7d7d7",
    },
    stickyOrderBar: {
        position: "sticky",
        top: 70
    }
})

function Home(props) {
    const classes = useStyle()
    const [toolbarSticky, setToolbarSticky] = useState(false);

    const menuFilterByCuisineType = (cuisineType) => {
        let result = []
        for (let menuIdx in menuResp.items) {
            if (menuResp.items[menuIdx].cuisineType.title === cuisineType) {
                result.push(menuResp.items[menuIdx])
            }
        }
        return result
    }

    const menuFilterByMenuType = (menuType) => {
        let result = []
        for (let menuIdx in menuResp.items) {
            if (menuResp.items[menuIdx].menuType.title === menuType) {
                result.push(menuResp.items[menuIdx])
            }
        }
        return result
    }

    const menuFilterByMealType = (mealType) => {
        let result = []
        for (let menuIdx in menuResp.items) {
            if (menuResp.items[menuIdx].mealType.title === mealType) {
                result.push(menuResp.items[menuIdx])
            }
        }
        return result
    }

    const listenScrollEvent = (e) => {
        if (window.scrollY > 100) {
            setToolbarSticky(true)
        } else {
            setToolbarSticky(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
    }, [])


    return <>
        <Header/>
        <Grid container justify="center">
            <div className={classes.bgImage}>
                <img src="https://demo.opeqe.com/static/media/HomeHeader.0d61a544.jpg"/>
            </div>
            <div className={classes.pageBody}>
                <Grid container justify="center"
                      className={`${classes.orderOptions} ${toolbarSticky ? classes.stickyOrderBar : ""}`}>
                    <Grid md={11} lg={11} xl={12} sm={12} xs={12} container alignItems="center" item className={classes.infoSection}>
                        <a href="#">
                            <div className={classes.mode}>ASAP Pickup</div>
                            <div className={classes.addrDesc}>Opeqe San Francisco - 235 Montgomery Street</div>
                        </a>
                        <Hidden smDown>
                            <div className={classes.btn}>
                                <ButtonBase TouchRippleProps>Change</ButtonBase>
                            </div>
                            <div className={classes.selectType}>
                                <div className={classes.marker} style={{width: "47px", transform: "translateX(85px)"}}/>
                                <div className={classes.item}>Delivery</div>
                                <div className={classes.separator}>or</div>
                                <div className={classes.item}>Pickup</div>
                            </div>
                            <div className={classes.divider}/>
                        </Hidden>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Slider title="Lunch & Dinner" items={menuFilterByMealType("Lunch & Dinner")}/>
                    <Slider title="Mexican" items={menuFilterByCuisineType("Mexican")}/>
                    <Slider title="Japanese" items={menuFilterByCuisineType("Japanese")}/>
                    <Slider title="Pizza" items={menuFilterByMenuType("Pizza")}/>
                    <Slider title="Sandwich" items={menuFilterByMenuType("Sandwich")}/>
                    <Slider title="Breakfast" items={menuFilterByMealType("Breakfast")}/>
                    <Slider title="Salad" items={menuFilterByMenuType("Salad")}/>
                    <Slider title="Soup" items={menuFilterByMenuType("Soup")}/>
                </Grid>
                <Footer/>
            </div>
        </Grid>
    </>
}

export default Home
