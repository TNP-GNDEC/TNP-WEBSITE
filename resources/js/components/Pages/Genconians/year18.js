import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Linkedin from '@material-ui/icons/LinkedIn';
import Insta from '@material-ui/icons/Instagram';
import Github from '@material-ui/icons/GitHub';
import Twitter from '@material-ui/icons/Twitter';
import Facebook from '@material-ui/icons/Facebook';
import Mail from '@material-ui/icons/Mail';
import Member1 from '../../../../images/Genconians/sanjam.jpeg';
import Member2 from '../../../../images/Genconians/karamveer.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto"
    },
}));

export default function Genconians(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 pad">
            <div class="frontside">
              <div class="card">
                <div class="card-body text-center">
                  <p>
                    <img
                      class="img-fluid img-round"
                      src={Member1}
                      alt="card image"
                    />
                  </p>
                  <h4 class="card-title">Sanjampreet singh</h4>
                  <p class="card-subtitle">Developer</p>
                  <p class="card-text">
                    He is a B.Tech student in Information Technology of 2015-19
                    batch. He was Co-Cordinator of Training and Placement Cell.
                    He has worked as Developer on the PWA and Restful APIs.
                  </p>
                  <ul class="list-inline" id="list-link">
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://www.facebook.com/sanjampreet.singh1"
                      >
                        <Facebook />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://twitter.com/Itzrealsanjam"
                      >
                        <Twitter />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://www.linkedin.com/in/sanjampreetsingh/"
                      >
                        <Linkedin />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://www.instagram.com/sanjampreetsingh_/"
                      >
                       <Insta />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="mailto:sanjam531@gmail.com"
                      >
                        <Mail />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        <div class="col-xs-12 col-sm-12 col-md-6 pad">
            <div class="frontside">
              <div class="card">
                <div class="card-body text-center">
                  <p>
                    <img
                      class="img-fluid img-round"
                      src={Member2}
                      alt="card image"
                    />
                  </p>
                  <h4 class="card-title">Karamveer Singh</h4>
                  <p class="card-subtitle">Developer</p>
                  <p class="card-text">
                    He is a B.Tech student in Computer Science and Engineering
                    of 2015-19 batch. He has worked as Developer on the SPA and
                    Vue.js.
                  </p>
                  <ul class="list-inline" id="list-link">
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://www.facebook.com/loveforeverKM"
                      >
                        <Facebook />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://www.twitter.com/kmvsingh007"
                      >
                        <Twitter />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://www.linkedin.com/in/singh-karamveer/"
                      >
                        <Linkedin />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://www.instagram.com/honey_singh008/"
                      >
                       <Insta />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="mailto:kmvsingh007@gmail.com"
                      >
                       <Mail />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}