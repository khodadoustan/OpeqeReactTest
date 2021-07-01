import {Grid, makeStyles} from "@material-ui/core";
import {Timer} from "@material-ui/icons";

const useStyle = makeStyles({
    listItem: {
        padding: "0 5px",
        height: "100%"
    },
    foodCard: {
        textAlign: "left !important",
        width: "100%",
        height: "100%",
        "& .image": {
            position: "relative",
            overflow: "hidden",
            width: "100%",
            marginBottom: "10px"
        },
        "& .info": {
            flexGrow: 1,
            flexWrap: "nowrap",
            padding: "5px 4px",
            width: "100%",
            boxSizing: "border-box",
            "& .title": {
                fontSize: "18px",
                width: "100%"
            },
            "& .sub-title": {
                fontSize: "15px",
                "& *": {
                    display: "inline-block",
                    textDecoration: "none"
                },
                "& .main": {
                    color: "#026764"
                },
                "& .sub": {
                    color: "#696969",
                    "&:after": {
                        content: "' . '",
                        paddingRight: "5px"
                    }
                }
            }
        },
        "& .extra": {
            fontSize: "14px",
            "& .tag": {
                display: "inline-block",
                margin: "1px",
                padding: "2px",
                "& svg": {
                    fontSize: "14px"
                }
            },
            "& .light": {
                backgroundColor: "#f5f5f5",

            },
            "& .dark": {
                backgroundColor: "#d7d7d7"
            },
            "& .green": {
                color: "#026764"
            }
        }
    },
})

function SliderItem(props) {
    const classes = useStyle();

    const getPreparationText = (preparation) => {
        if (preparation >= 4 && preparation < 7) {
            return "4-6 Mins"
        }else if (preparation >= 7 && preparation < 10){
            return "7-10 Mins"
        }else if (preparation >= 10 && preparation < 22){
            return "10-22 Mins"
        }else if (preparation >= 22 && preparation < 40){
            return "22-40 Mins"
        }else if (preparation >= 40 && preparation < 60){
            return "40-60 Mins"
        }else{
            return "+60 Mins"
        }
    }

    return (
        <Grid item md={4} sm={12} xs={12}>
            <div className={classes.listItem}>
                <Grid container direction-xs-column className={classes.foodCard}>
                    <div className="image" style={{
                        borderRadius: "5px",
                        height: "220px"
                    }}>
                        <a href="#">
                            <img src={props.itemObj.image} alt={props.itemObj.title}/>
                        </a>
                    </div>
                    <Grid direction-xs-column justify-xs-space-between className="info">
                        <div className="title">{props.itemObj.title}</div>
                        <div className="sub-title">
                            <a className="main"
                               href="/location/opeqe-san-francisco/search/menu/taco">{props.itemObj.menuType.title}</a>
                            <br/>
                            <a
                                className="sub"
                                href="/location/opeqe-san-francisco/search/cuisine/mexican">{props.itemObj.cuisineType.title}</a><a
                            className="sub" href="/location/opeqe-san-francisco/search/course/main-course">
                            {props.itemObj.courseType.title}</a><a className="sub"
                                                                   href="/location/opeqe-san-francisco/search/meal/lunch-&amp;-dinner">{props.itemObj.mealType.title}</a>
                        </div>
                    </Grid>
                    <Grid container justify-xs-space-between className="extra MuiGrid-justify-xs-space-between">
                        <span>
                            <span className="tag light">
                                <Timer fontSize="small"/>
                                {getPreparationText(props.itemObj.preparation)}
                            </span>
                            <span className="tag dark">${props.itemObj.price}</span>
                        </span>
                        <span className="tag green light">Free Pickup</span>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
}

export default SliderItem
