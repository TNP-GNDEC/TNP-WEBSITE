import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Linkedin from '@material-ui/icons/LinkedIn';
import Insta from '@material-ui/icons/Instagram';
import Github from '@material-ui/icons/GitHub';
import Twitter from '@material-ui/icons/Twitter';
import Mail from '@material-ui/icons/Mail';
import Member1 from '../../../../images/Genconians/kirti.jpeg';
import Member2 from '../../../../images/Genconians/lakshay.jpeg';
import Member3 from '../../../../images/Genconians/riya.jpeg';
import Member4 from '../../../../images/Genconians/anurag.png';
import Member5 from '../../../../images/Genconians/arsh.png';

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
              <div class="card con-card">
                <div class="card-body text-center">
                  <p>
                    <img
                      class="img-fluid img-round"
                      src={Member1}
                      alt="card image"
                    />
                  </p>
                  <h4 class="card-title">Kirti Gautam</h4>
                  <p class="card-subtitle">Developer</p>
                  <p class="card-text">
                    He is a B.Tech student in Computer Science &amp; Engineering
                    of 2017-21 batch.
                  </p>
                  <ul class="list-inline" id="list-link">
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://www.linkedin.com/in/kirti-gautam-1706232"
                      >
                        <Linkedin />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://www.instagram.com/__.kirti.___/"
                      >
                        <Insta />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://github.com/KirtiGautam"
                      >
                        <Github />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="mailto:gautamkirti8c@gmail.com"
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
              <div class="card con-card">
                <div class="card-body text-center">
                  <p>
                    <img
                      class="img-fluid img-round"
                      src={Member2}
                      alt="card image"
                    />
                  </p>
                  <h4 class="card-title">Lakshay Chopra</h4>
                  <p class="card-subtitle">Developer</p>
                  <p class="card-text">
                    He is a B.Tech student in Computer Science &amp; Engineering
                    of 2017-21 batch. He is administrator of T &amp; P Cell.
                  </p>
                  <ul class="list-inline" id="list-link">
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://www.linkedin.com/in/lakshay-chopra/"
                      >
                        <Linkedin />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://github.com/lakshaychopra"
                      >
                        <Github />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="mailto:lakshaychopra21@gmail.com"
                      >
                        <Mail />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        <div class="col-xs-12 col-sm-12 col-md-4 pad">
            <div class="frontside">
              <div class="card con-card">
                <div class="card-body text-center">
                  <p>
                    <img
                      class="img-fluid img-round"
                      src={Member3}
                      alt="card image"
                    />
                  </p>
                  <h4 class="card-title">Riya Singh</h4>
                  <p class="card-subtitle">Developer</p>
                  <p class="card-text">
                    She is a B.Tech student in Computer Science &amp; Engineering
                    of 2017-21 batch.
                  </p>
                  <ul class="list-inline" id="list-link">
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://www.linkedin.com/in/riya-singh-b5a241187/"
                      >
                        <Linkedin />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://www.instagram.com/___.riya.___/"
                      >
                        <Insta />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://github.com/RiyaSingh15"
                      >
                        <Github />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="mailto:r.riyasingh.s15@gmail.com"
                      >
                        <Mail />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        <div class="col-xs-12 col-sm-12 col-md-4 pad">
            <div class="frontside">
              <div class="card con-card">
                <div class="card-body text-center">
                  <p>
                    <img
                      class="img-fluid img-round"
                      src={Member4}
                      alt="card image"
                    />
                  </p>
                  <h4 class="card-title">Anurag Kumar</h4>
                  <p class="card-subtitle">Developer</p>
                  <p class="card-text">
                    He is a B.Tech student in Computer Science &amp; Engineering
                    of 2017-21 batch.
                  </p>
                  <ul class="list-inline" id="list-link">
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://www.linkedin.com/in/anuragk539/"
                      >
                        <Linkedin />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://www.instagram.com/anuragk539/"
                      >
                        <Insta />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://github.com/anuragk539"
                      >
                        <Github />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="mailto:anuragk539@gmail.com"
                      >
                        <Mail />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        <div class="col-xs-12 col-sm-12 col-md-4 pad">
            <div class="frontside">
              <div class="card con-card">
                <div class="card-body text-center">
                  <p>
                    <img
                      class="img-fluid img-round"
                      src={Member5}
                      alt="card image"
                    />
                  </p>
                  <h4 class="card-title">Arsh Gupta</h4>
                  <p class="card-subtitle">Developer</p>
                  <p class="card-text">
                    He is a B.Tech student in Computer Science &amp; Engineering
                    of 2017-21 batch.
                  </p>
                  <ul class="list-inline" id="list-link">
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://www.linkedin.com/in/arshgu09/"
                      >
                        <Linkedin />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://twitter.com/ArshGupta07"
                      >
                        <Twitter />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="mailto:arsh.gupta8@gmail.com"
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