/**
 * Created by zhangheng on 2017/9/15.
 */
import React from 'react';
import BasePage from '../components/BasePage'
import Layout from '../layouts/main'
import {Anchor} from 'antd';

const {Link} = Anchor;

export default class extends BasePage {
  static async getInitialProps({req}) {
    // Inherit standard props from the BasePage (i.e. with session data)
    return await super.getInitialProps({req})
  }

  render() {
    return (
      <Layout session={this.props.session}>
        <div>
          <Anchor affix={false}>
            <Link href="#intro" title="Intro"/>
            <Link href="#basic" title="Basic"/>
            <Link href="#experience" title="Experience">
              <Link href="#childhood" title="Childhood"/>
              <Link href="#high-school" title="High School"/>
            </Link>
            <Link href="#career" title="Career"/>
            <Link href="#nba-data" title="NBA Data"/>
            <Link href="#winning-record" title="Winning Record"/>
          </Anchor>
          <div className="grey-line about-content">
            <h2 id="intro"><a href="#intro">Intro</a></h2>
            <p>Kevin Garnett (Kevin Garnett), born on May 19, 1976 in South Carolina , former US professional basketball
              player, chief power forward / center , nickname Garnett (Timberwolves), KG (name abbreviation), The BIG
              TICKET, Da Kid.</p>
            <p>1995 NBA draft , Kevin Garnett first round of the fifth overall by the Minnesota Timberwolves selected,
              2003-04 season won the regular season MVP. In the summer of 2007 to the Boston Celtics , and Ray Allen and
              Paul Pierce together to form a "Celtics Big Three ", 2008 finals beat the Lakers, won the NBA championship
              . In 2013, Garnett was traded to the Brooklyn Nets . 2015 return to Minnesota Timberwolves.</p>
            <p>On September 24, 2016, Kevin Garnett posted a video announcement on Instagram. [1] Kevin Garnett field
              technology is extremely comprehensive, passing superior, defensive very deterrent, has won four NBA
              rebounds, is one of the greatest power forward in history.</p>
          </div>
          <div className="grey-line about-content">
            <h2 id="basic"><a href="#basic">Basic</a></h2>
            <div className="basic-info clearfix">
              <dl className="basicInfo-block basicInfo-left">
                <dt className="basicInfo-item name"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>Chinese name</font></font></dt>
                <dd className="basicInfo-item value"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>
                  Kevin Morris Garnett
                </font></font></dd>
                <dt className="basicInfo-item name"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>Foreign language name</font></font></dt>
                <dd className="basicInfo-item value"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>
                  Kevin Maurice Garnett
                </font></font></dd>
                <dt className="basicInfo-item name"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>Alias</font></font></dt>
                <dd className="basicInfo-item value"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>
                  KG, The BIG TICKET, Da Kid, Garnett
                </font></font></dd>
                <dt className="basicInfo-item name"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>Country of Citizenship</font></font></dt>
                <dd className="basicInfo-item value"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>
                  United States
                </font></font></dd>
                <dt className="basicInfo-item name"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>place of birth</font></font></dt>
                <dd className="basicInfo-item value"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>
                  United States </font></font><a target="_blank"
                                                 href="/item/%E5%8D%97%E5%8D%A1%E7%BD%97%E6%9D%A5%E7%BA%B3"><font
                  style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>South
                  Carolina</font></font></a>
                </dd>
                <dt className="basicInfo-item name"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>date of birth</font></font></dt>
                <dd className="basicInfo-item value"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>
                  May 19, 1976
                </font></font></dd>
                <dt className="basicInfo-item name"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>graduated school</font></font></dt>
                <dd className="basicInfo-item value"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>
                  Faragate High School
                </font></font></dd>
                <dt className="basicInfo-item name"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>Height</font></font></dt>
                <dd className="basicInfo-item value"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>
                  6 feet 11 inches / 2.11 meters
                </font></font></dd>
                <dt className="basicInfo-item name"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>Weight</font></font></dt>
                <dd className="basicInfo-item value"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>
                  253 lbs / 114.8 kg
                </font></font></dd>
                <dt className="basicInfo-item name"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>Sports items</font></font></dt>
                <dd className="basicInfo-item value"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>
                  basketball
                </font></font></dd>
                <dt className="basicInfo-item name"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>Belongs to the sports team</font></font></dt>
                <dd className="basicInfo-item value"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>
                  Has been retired
                </font></font></dd>
                <dt className="basicInfo-item name"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>Professional features</font></font></dt>
                <dd className="basicInfo-item value"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>
                  Both offensive and defensive, good at rebounding and jumper
                </font></font></dd>
              </dl>
              <dl className="basicInfo-block basicInfo-right">
                <dt className="basicInfo-item name"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>Major awards</font></font></dt>
                <dd className="basicInfo-item value"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>
                  NBA Championship Most Valuable Player Award (2004)
                </font></font><br/><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>Olympic
                  Men's Basketball Champion (2000)
                </font></font><br/><a target="_blank"
                                      href="/item/%E6%9C%80%E4%BD%B3%E9%98%B2%E5%AE%88%E7%90%83%E5%91%98"><font
                  style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>Best
                  Defender</font></font></a><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}> (2008)
                </font></font><br/><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>15
                  All-Star (1997-1998; 2000-2011; 2013)
                </font></font><br/><a target="_blank" href="/item/NBA%E6%80%BB%E5%86%A0%E5%86%9B"><font
                  style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>NBA
                  Championship</font></font></a><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}> (2008)
                </font></font></dd>
                <dt className="basicInfo-item name"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>Jersey number</font></font></dt>
                <dd className="basicInfo-item value"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>
                  No. 21, No. 5, No. 2
                </font></font></dd>
                <dt className="basicInfo-item name"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>Field position</font></font></dt>
                <dd className="basicInfo-item value">
                  <a target="_blank" href="/item/%E5%A4%A7%E5%89%8D%E9%94%8B"><font
                    style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>Power
                    forward</font></font></a><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}> / </font></font><a target="_blank"
                                                                         href="/item/%E4%B8%AD%E9%94%8B/29560"
                                                                         data-lemmaid="29560"><font
                  style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>center</font></font></a>
                </dd>
                <dt className="basicInfo-item name"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>NBA draft</font></font></dt>
                <dd className="basicInfo-item value"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>
                  1995 fifth round by the Timberwolves selected
                </font></font></dd>
                <dt className="basicInfo-item name"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>Blood type</font></font></dt>
                <dd className="basicInfo-item value"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>
                  O type
                </font></font></dd>
                <dt className="basicInfo-item name"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>Wingspan</font></font></dt>
                <dd className="basicInfo-item value"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>
                  7 feet 5 inches / 2.2606 meters
                </font></font></dd>
                <dt className="basicInfo-item name"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>Bounce</font></font></dt>
                <dd className="basicInfo-item value"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>
                  Vertical bounce 90 cm
                </font></font></dd>
                <dt className="basicInfo-item name"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>Standing high</font></font></dt>
                <dd className="basicInfo-item value"><font style={{verticalAlign: "inherit"}}><font
                  style={{verticalAlign: "inherit"}}>
                  275CM
                </font></font></dd>
              </dl>
            </div>
          </div>
          <div className="clearfix grey-line about-content">
            <h1 id="experience">Experience</h1>
            <h2 id="childhood"><a href="#childhood">Childhood</a></h2>
            <p>
              Kevin Garnett's parents parted on when he was very young. Garnett's father, named O'Brien Garnett, is a
              talented basketball player, but he has not played the NBA. Only in the army basketball team effectiveness,
              also played the main force. In the impression of Kevin Garnett, the image of Austria has been some vague,
              just remember that he had a few times in the game side, watching his father and his companions with
              training, to help them pick up the ball. Garnett followed the mother, but she did not have much ability to
              support Garnett and Esley. Later, the mother and married people, stepfather is not good to Garnett brother
              and sister.
            </p>
            <p>
              Starting from the age of 13, Garnett had to go out to work every day to make money, breadwinner. He had
              done more than a dozen different jobs, from carrying luggage, to scrub the car, as long as any law allows,
              and can feed his own and sister's errand, and then hard work, Garnett will rush to dry, During the
              holidays he worked for 20 hours a day.
            </p>
            <p>
              After his parents divorced, Garnett's stepfather did not support him to play because he did not want to
              install a basket in his own garage or backyard, which would make the house that was not wide enough.
              Mother does not encourage his son to play, in her view, playing basketball is not the son of the way to
              go, she hoped that his son to study higher education, after graduating from college, and then find decent
              work.
            </p>
          </div>
          <div className="clearfix grey-line about-content">
            <h2 id="high-school"><a href="#high-school">High School</a></h2>
            <p>
              Middle school, Garnett has been the school basketball team coach reuse, began to show the dew. Garnett has
              set a goal for his life, once on the pitch and school teammates fighting, Garnett in the classroom wall
              engraved "KG" words, and vowed not to lose to anyone on the basketball court.
            </p>
            <p>
              During high school, Garnett entered the Farragut Academy HS ( Chicago, IL ) in Chicago's Faragate High
              School . Here, Kevin Garnett met his first legendary teammate - Ronnie Fields . In this genius side,
              Garnett is called "kid". When Garnett entered high school, he had a one-on-one "bullfighting" with Philz,
              and Garnett was beaten by 11 to 1.
            </p>
            <p>
              1994 Garnett was elected South Carolina basketball player, in 1995 was elected " USA Today " the best
              American high school student players, selected the first high school students in the team, was elected Mr.
              Illinois basketball. 4 years high school player career total of 2533 points, 1807 rebounds and 739 blocks.
              In the United States McDonald's star game scored 18 points, 11 rebounds, 4 assists and 3 blocks, was
              elected the most valuable player. [3]
            </p>
          </div>
          <div className="clearfix grey-line about-content">
            <h2 id="career"><a href="#career">Career</a></h2>
            <p>
              1995 NBA draft , Garnett in the first round of the fifth overall by the Minnesota Timberwolves , from high
              school directly into the NBA one of the few players, is also the first 20 years of age in the NBA draft
              was selected High school student. Garnett's growth on the road, Pistons Club's basketball manager John
              Hammond is a key figure. Hewlett-Packard Hammond found Garnett in the high school league and introduced
              him to the 1995 Chicago Camp. Garnett overnight fame, in the same year, he was in the first round of the
              NBA draft, the fifth was picked by the Timberwolves. The Timberwolves signed a huge contract with him,
              became a sensational news.
            </p>
            <p>
              2003-04 season, Garnett for the fifth consecutive season to get averaging 20 +10 +5, NBA history, only
              Larry Bird achieved the same achievements. Respectively, in December, January, February, April four
              degrees was elected the best player in the West, the first person in the history of the NBA, which was
              elected for three consecutive months is the first NBA history, NBA only Garnett and Le Brown James
              received this honor. The season averaged 13.9 rebounds grabbed, for the first time to become the league
              rebounds, and led the team for the first time into the Western Conference finals. Seventh-time All-Star
              team. Harvested the only one of the most valuable players in the regular season ( MVP ) trophy [6] . The
              third team selected for the league's best team, the fifth final league defensive team.
            </p>
            <p>
              2007-08 season, in order to the overall interests of the team Kevin Garnett sacrifice personal data effort
              defense, averaging 32.8 minutes per game averaged 18.8 points and 9.2 rebounds and 1.3 blocked shots and
              1.4 steals and 3.4 assists, Because of its prominent defense, Garnett won the league's best defender
              (DPOY) for the first time, and helped the team win the championship, which is his first championship. The
              eleventh selected All-Star team, the fourth team selected the best team, the seventh final league
              defensive team
            </p>
            <p>
              February 20, 2015, along with Kevin Garnett agreed to waive the contract trade veto transactions between
              the Nets and the Timberwolves will successfully reach, they used Garnett in exchange for a 27-year-old
              striker race Disney Young . After a lapse of 8 years, Garnett finally return to the Timberwolves.
            </p>
          </div>
          <div className="clearfix grey-line about-content">
            <h2 id="nba-data"><a href="#nba-data">NBA Data</a></h2>
            <p>
              Too much to write here!
            </p>
          </div>
          <div className="clearfix grey-line about-content">
            <h2 id="winning-record"><a href="#winning-record">Winning Record</a></h2>
            <p>
              2008 2008-08 NBA championship (winning)
            </p>
            <p>
              2003 Season All-Star Game Most Valuable Player (AMVP) (Award)
            </p>
            <p>
              2004-2003 Season Regular Most Valuable Player (MVP) (Award)
            </p>
            <p>2008 2007-08 season best defensive player (award) </p>
            <p>2008 the 2007-08 season the best team array 1 (winners) </p>
            <p>2007 2006 season best team third (winning) </p>
            <p>2005 the 2004-05 season the best team of the second array (winners) </p>
            <p>2004-2004 season best team first (winning) </p>
          </div>
        </div>
        <style>{`
        .clearfix{
          clear:both;
        }
        .about-content{
          padding-left:10px;
        }
        .about-content p{
          margin-left:10px;
          line-height:2;
        }

            .basic-info {
              margin: 20px 0 35px;
              clear: both;
              background: url(../static/images/basicInfo-bg.png);
          }
          .basic-info .basicInfo-block {
              width: 460px;
              float: left;
          }
          .basic-info .basicInfo-block .basicInfo-item {
              line-height: 26px;
              display: block;
              padding: 0;
              margin: 0;
              float: left;
          }
          .basic-info .basicInfo-block .basicInfo-item.name {
              width: 130px;
              padding: 0 5px 0 5px;
              font-weight: 700;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-wrap: normal;
              color: #999;
          }
          .basic-info .basicInfo-block .basicInfo-item.value {
            zoom: 1;
            color: #333;
            width: 285px;
            float: left;
            position: relative;
        }
        `}</style>
      </Layout>

    )
  }
}
