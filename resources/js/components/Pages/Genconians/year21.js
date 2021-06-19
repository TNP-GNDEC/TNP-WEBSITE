import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Linkedin from '@material-ui/icons/LinkedIn';
import Insta from '@material-ui/icons/Instagram';
import Github from '@material-ui/icons/GitHub';
import Twitter from '@material-ui/icons/Twitter';
import Medium from '@material-ui/icons/Web';
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
        <div class="col-xs-12 col-sm-12 col-md-6">
            <div class="frontside">
              <div class="card con-card">
                <div class="card-body text-center">
                  {/* <p>
                    <img
                      class="img-fluid img-round"
                      src={Member1}
                      alt="card image"
                    />
                  </p> */}
                  <h4 class="card-title">Vikalp Kaushik</h4>
                  <p class="card-subtitle">Full Stack Developer</p>
                  <p class="card-text">
                    He is a B.Tech student in Computer Science &amp; Engineering
                    of 2018-22 batch.
                  </p>
                  <ul class="list-inline" id="list-link">
                  <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://vikalpkaushik99.medium.com"
                      >
                        <Medium />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://www.linkedin.com/in/vikalp-kaushik-99966a1ab"
                      >
                        <Linkedin />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://www.instagram.com/vikalp._.kaushik"
                      >
                        <Insta />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://github.com/vikalp2502"
                      >
                        <Github />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://twiiter.com/kaushik_vikalp"
                      >
                        <Twitter />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="mailto:vikalpkaushik99@gmail.com"
                      >
                        <Mail />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
            <div class="frontside">
              <div class="card con-card">
                <div class="card-body text-center">
                  {/* <p>
                    <img
                      class="img-fluid img-round"
                      src={Member2}
                      alt="card image"
                    />
                  </p> */}
                  <h4 class="card-title">Palak Thapar</h4>
                  <p class="card-subtitle">Full Stack Developer</p>
                  <p class="card-text">
                    She is a B.Tech student in Computer Science &amp; Engineering
                    of 2018-22 batch.
                  </p>
                  <ul class="list-inline" id="list-link">
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://www.linkedin.com/in/palak-thapar/"
                      >
                        <Linkedin />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://www.instagram.com/_palak.thapar/"
                      >
                        <Insta />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://github.com/palak199"
                      >
                        <Github />
                      </a>
                    </li> 
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="mailto:p.thapar99@gmail.com"
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
                  {/* <p>
                    <img
                      class="img-fluid img-round"
                      src={Member3}
                      alt="card image"
                    />
                  </p> */}
                  <h4 class="card-title">Suryansh Chopra</h4>
                  <p class="card-subtitle">Developer</p>
                  <p class="card-text">
                    He is a B.Tech student in Computer Science &amp; Engineering
                    of 2018-22 batch.
                  </p>
                  <ul class="list-inline" id="list-link">
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://www.linkedin.com/in/suryanshchopra/"
                      >
                        <Linkedin />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://www.instagram.com/choprasuryansh/"
                      >
                        <Insta />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://github.com/SuryanshChopra"
                      >
                        <Github />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="mailto:suryanshchopra987@gmail.com"
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
                  {/* <p>
                    <img
                      class="img-fluid img-round"
                      src={Member4}
                      alt="card image"
                    />
                  </p> */}
                  <h4 class="card-title">Mahin Mittal</h4>
                  <p class="card-subtitle">Developer</p>
                  <p class="card-text">
                    He is a B.Tech student in Computer Science &amp; Engineering
                    of 2018-22 batch.
                  </p>
                  <ul class="list-inline" id="list-link">
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://www.linkedin.com/in/mahinmittal651/"
                      >
                        <Linkedin />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://www.instagram.com/mahin651/"
                      >
                        <Insta />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://github.com/mahin651"
                      >
                        <Github />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://twitter.com/MahinMittal"
                      >
                        <Twitter />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="mailto:mahinmittal2018@gmail.com"
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
                  {/* <p>
                    <img
                      class="img-fluid img-round"
                      src={Member5}
                      alt="card image"
                    />
                  </p> */}
                  <h4 class="card-title">Gurkipal Singh</h4>
                  <p class="card-subtitle">UI/UX Designer</p>
                  <p class="card-text">
                    He is a B.Tech student in Computer Science &amp; Engineering
                    of 2018-22 batch.
                  </p>
                  <ul class="list-inline" id="list-link">
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://www.linkedin.com/in/gurkipal-singh-79778a191/"
                      >
                        <Linkedin />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://instagram.com/gurrii_ramgarhia"
                      >
                        <Insta />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="https://twitter.com/gurkipal013"
                      >
                        <Twitter />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon"
                        target="_blank"
                        href="mailto:mgurkirpal013@gmail.com"
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
                  {/* <p>
                    <img
                      class="img-fluid img-round"
                      src={Member5}
                      alt="card image"
                    />
                  </p> */}
                  <h4 class="card-title">Gursidak Singh</h4>
                  <p class="card-subtitle">Developer</p>
                  <p class="card-text">
                    He is a B.Tech student in Computer Science &amp; Engineering
                    of 2018-22 batch.
                  </p>
                  {/* <ul class="list-inline" id="list-link">
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
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    )
}
