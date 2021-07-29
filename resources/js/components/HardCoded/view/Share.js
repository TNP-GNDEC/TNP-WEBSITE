import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Copy from '@material-ui/icons/FilterNone';
import Copied from '@material-ui/icons/LibraryAddCheck';
import { CopyToClipboard} from 'react-copy-to-clipboard';
import {FacebookShareButton, FacebookIcon,
WhatsappShareButton, WhatsappIcon,
LinkedinShareButton, LinkedinIcon,
TwitterShareButton,TwitterIcon,
EmailShareButton,EmailIcon} from 'react-share';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: "15px",
    marginBottom: "20px",
    textAlign: "center",
    borderRadius: "16px",
    boxShadow: "0px 15px 30px #8a959e33",
    ['@media (min-width:1600px)']: {
      paddingTop: "20px"
  },
  },
  heading:{
    fontSize: "18px",
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: theme.palette.primary.dark,
    paddingTop: "5px",
    ['@media (min-width:1600px)']: {
      fontSize: "20px",
      paddingTop: "12px"
    },
  },
  subheading:{
      fontSize: "13px",
      fontFamily: "Open Sans",
      fontWeight: "600",
      color: theme.palette.primary.text,
      ['@media (min-width:1600px)']: {
        fontSize: "16px"
    },
  },
  subheading2:{
    fontSize: "14px",
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: theme.palette.primary.main,
    ['@media (min-width:1600px)']: {
      fontSize: "16px"
    },
  },
  linkDiv:{
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  mediaDiv:{
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: "10px",
    marginBottom: "15px"
  },
  Button:{
    width: "100%",
  },
  Icon: {
    width: "34px",
    height: "34px",
    borderRadius: "50px",
    ['@media (min-width:1600px)']: {
      width: "42px",
      height: "42px"
    },
  },
  linkDiv2:{
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "12px",
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: theme.palette.primary.accent,
    color: theme.palette.primary.main,
    marginBottom: "20px"
  },
  paraDiv:{
    width: "75%",
    paddingLeft: "15px",
    paddingTop: "15px",
    textAlign: "left"
  },
  iconDiv:{
    width: "20%",
  },
  para:{
    wordBreak: "break-all",
    lineHeight: "20px",
    fontSize: "14px",
    fontFamily: "Open Sans",
    fontWeight: "400",
    ['@media (min-width:1600px)']: {
      fontSize: "16px"
    },
  },
  icon2:{
    height: "30px",
    cursor: "poinrer",
    ['@media (min-width:1600px)']: {
      height: "40px"
    },
  },
}));

export default function Share(props) {
  const classes = useStyles();
  const [click, setClick] = React.useState(false);
  const handleClick = () => {
    setClick(true);
  }
  const {id} = props;
  const shareLink = "https://tnpgndec.com/showPost/" + id;
  return (
    <Card className={classes.root}>
      <h1 className={classes.heading}>
        Share this post
      </h1>
      <h3 className={classes.subheading}>
        via Social Media
      </h3>
      <div className={classes.linkDiv}>
        <div className={classes.mediaDiv}>
          <FacebookShareButton className={classes.Button} url={shareLink}>
            <FacebookIcon className={classes.Icon} />
          </FacebookShareButton>
          <WhatsappShareButton className={classes.Button} url={shareLink}>
            <WhatsappIcon className={classes.Icon} />
          </WhatsappShareButton>
          <LinkedinShareButton className={classes.Button} url={shareLink}>
            <LinkedinIcon className={classes.Icon} />
          </LinkedinShareButton>
          <TwitterShareButton className={classes.Button} url={shareLink}>
            <TwitterIcon className={classes.Icon} />
          </TwitterShareButton>
          <EmailShareButton className={classes.Button} url={shareLink}>
            <EmailIcon className={classes.Icon} />
          </EmailShareButton>
        </div>
        <div className={classes.linkDiv2}>
          <div className={classes.paraDiv}>
          <p className={classes.para}>{shareLink}</p>
          </div>
          <div className={classes.iconDiv}>
            <CopyToClipboard text={shareLink} onCopy={handleClick}>
              {click ? <Copied className={classes.icon2} /> :<Copy className={classes.icon2} />}
            </CopyToClipboard>
          </div>
        </div>
      </div> 
    </Card>
  );
}
