import {Grid, Hidden, makeStyles, SvgIcon} from "@material-ui/core";
import Item from "./sliderItem";
import {useRef, useState} from "react";

const useStyle = makeStyles({
    horizontalList: {
        width: "100%",
        marginTop: "30px"
    },
    horizontalListHeader: {
        marginBottom: "10px",
        textAlign: "left",
        "& .title": {
            fontSize: "20px",
            fontWeight: 700
        }
    },
    '@keyframes blinker-in': {
        "0%": {
            opacity: "1",
            transform: "scale(.1)",
        },
        "50%": {
            opacity: "1",
            transform: "scale(1.05)",
        },
        "70%": {
            opacity: "1",
            transform: "scale(.9)",
        },
        "100%": {
            opacity: "1",
            transform: "scale(1)",
        }
    },
    '@keyframes blinker-out': {
        "0%": {
            opacity: "1",
            transform: "scale(1)",
        },
        "50%": {
            opacity: "1",
            transform: "scale(0.9)",
        },
        "70%": {
            opacity: "1",
            transform: "scale(1.05)",
        },
        "100%": {
            transform: "scale(0.1)",
            opacity: "0"
        }
    },
    list: {
        display: "inline-block",
        width: "100%",
        position: "relative",
        "& .list-container": {
            // transform: "translateX(-5px)",
            overflow: "hidden",
            paddingRight: "50px",
            "& .list-controller": {
                whiteSpace: "nowrap",
                flexWrap: "nowrap",
                padding: "0 0 10px",
                transition: "transform .5s cubic-bezier(.74,0,.35,.96),-webkit-transform .5s cubic-bezier(.74,0,.35,.96)",
            },
            "& .control-container": {
                position: "absolute",
                top: 0,
                display: "flex",
                height: "100%",
                width: "65px",
                alignItems: "center",
                "& .MuiButtonBase-root": {
                    flex: "0 0 auto",
                    color: "rgba(0, 0, 0, 0.54)",
                    padding: "12px",
                    overflow: "visible",
                    fontSize: ".5rem",
                    textAlign: "center",
                    transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                    borderRadius: "50%",
                },
                "& .control": {
                    backgroundColor: "#026764 !important",
                    color: "#fff",
                    padding: "8px",
                    display: "inline-block",
                    opacity: "0",
                },
                "& .control.showBtn": {
                    opacity: "1"

                }
            },
            "& .control-container.prev": {
                // left: "-65px"
                "& .icon": {
                    transform: "rotate(180deg)"
                }
            },
            "& .control-container.next": {
                right: "-36px"
            },
            '@media (max-width: 960px)': {
                overflow: "scroll",
            }
        }
    },

    showButtons: {
        animationName: '$blinker-in',
        animationDuration: '0.4s',
        animationTimingFunction: 'linear',
        animationIterationCount: '1',
        animationDirection: "normal",
        animationFillMode: "forwards"

    },
    hideButtons: {
        animationName: '$blinker-out',
        animationDuration: '0.4s',
        animationTimingFunction: 'linear',
        animationIterationCount: '1',
        animationDirection: "normal",
        animationFillMode: "forwards"

    },
    scrollBar: {
        width: "100%",
        margin: "10px 0 20px",
        paddingRight: "30px",
        position: "relative",
        height: "1px",
        backgroundColor: "#d7d7d7",
        "& .cursor": {
            transition: "left .5s cubic-bezier(.74,0,.35,.96)",
            position: "absolute",
            width: "30px",
            height: "2px",
            backgroundColor: "#000",
            opacity: ".9"
        }
    },
    sectionBox:{
        '@media (max-width: 960px)': {
            padding: "0 10px",
        }
    }
})

function Slider(props) {
    const classes = useStyle()
    const [showButtons, setShowButtons] = useState(false);
    const [scroll, setScroll] = useState(false);
    // const [scrollIndicate, setScrollIndicate] = useState(0);
    const mainScroll = useRef()

    const onScroll = () => {
        // setScrollIndicate(mainScroll.current.scrollLeft)
    }

    return <>
        <Grid lg={11} md={11} xl={11} xs={12} sm={12} alignItems="center" justify="center" item container
              style={{
                  flexGrow: 0,
                  maxWidth: "100%",
                  flexBasis: "100%"
              }}>
            <Grid lg={11} md={11} xl={11} xs={12} sm={12} item container className={classes.sectionBox}
                  alignContent="center" justify="center" onMouseOver={() => {
                setShowButtons(true)
            }} onMouseLeave={() => {
                setShowButtons(false)
            }}>
                <div className={classes.horizontalList}>
                    <div className={classes.horizontalListHeader}>
                        <div className="title">{props.title}</div>
                    </div>
                </div>
                <div className={classes.scrollBar}>
                    <div className="bar">
                        <div className="cursor" style={{left: scroll ? '100%' : '0%'}}></div>
                    </div>
                </div>
                <div className={classes.list}>
                    <div className="list-container" ref={mainScroll} onScroll={onScroll}>
                        <Grid item container className="list-controller"
                              style={{transform: scroll ? "translateX(-97%)" : "translateX(0%)"}}
                              alignContent="center" justify="flex-start">
                            {props.items ? props.items.map(obj => {
                                return <Item itemObj={obj}/>
                            }) : null}
                        </Grid>
                        <Hidden smDown>
                            {scroll ? <div className="control-container prev" onClick={() => {
                                setScroll(false)
                            }}>
                                <button
                                    className={`MuiButtonBase-root MuiIconButton-root control show ${showButtons ? classes.showButtons : classes.hideButtons}`}
                                    tabIndex="0" type="button">
                                            <span className="MuiIconButton-label">
                                                <SvgIcon className="icon">
                                                    <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path>
                                                </SvgIcon>
                                            </span>
                                    <span className="MuiTouchRipple-root"/>
                                </button>
                            </div> : <div className="control-container next" onClick={() => {
                                setScroll(true)
                            }}>
                                <button
                                    className={`MuiButtonBase-root MuiIconButton-root control show ${showButtons ? classes.showButtons : classes.hideButtons}`}
                                    tabIndex="0" type="button">
                                            <span className="MuiIconButton-label">
                                                <SvgIcon className="icon">
                                                    <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/>
                                                </SvgIcon>
                                            </span>
                                    <span className="MuiTouchRipple-root"/>
                                </button>
                            </div>}
                        </Hidden>
                    </div>
                </div>
            </Grid>
        </Grid>
    </>
}

export default Slider
