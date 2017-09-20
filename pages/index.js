/**
 * Created by zhangheng on 2017/9/15.
 */
import React from 'react'
import {Alert} from 'antd'
import Layout from '../layouts/main.js'
import BasePage from '../components/BasePage'


export default class extends BasePage {
  /* eslint no-undefined: "error" */
  static async getInitialProps({req}) {
    // Inherit standard props from the BasePage (i.e. with session data)
    return await super.getInitialProps({req})
  }

  render() {
    let desc=`Kevin Maurice Garnett (born May 19, 1976) is an American former professional basketball player who played for 21 seasons in the National Basketball Association (NBA). He played the power forward and center positions. In high school, Garnett was a 1995 McDonald's All-American at Farragut Career Academy and won a national player of the year award.[1][2] He entered the 1995 NBA draft, where he was selected with the fifth overall pick by the Minnesota Timberwolves and became the first NBA player drafted directly out of high school in 20 years.
Garnett made an immediate impact with the Minnesota Timberwolves, leading them to eight consecutive playoff appearances. In 2004, he led the Timberwolves to the Western Conference Finals and won the NBA Most Valuable Player Award. Garnett has been named to 15 All-Star Games, winning the All-Star MVP award in 2003, and is currently tied for third-most All-Star selections in NBA history.[n 1] He was named the NBA Defensive Player of the Year in 2007–08, and has been selected nine times for All-NBA Teams and 12 times for All-Defensive Teams.[3] Garnett also holds several Timberwolves franchise records.
In 2007, after 12 seasons with the Timberwolves, Garnett joined the Boston Celtics in a blockbuster trade. In his first year with the Celtics, he helped lead them to the NBA championship, while also finishing in third place for the MVP award.[4] In 2013, Garnett was included in a second headline trade that sent him to the Brooklyn Nets with longtime Celtic Paul Pierce. In 2015, Garnett was traded back to Minnesota. He announced his retirement from professional basketball in September 2016.`;
    let achieves=(
    <div className="achieve">
    <p>Garnett has a long list of achievements and records, including:<sup id="cite_ref-stats_4-7" className="reference"><a href="#cite_note-stats-4">[3]</a></sup></p>
      <ul>
        <li><b>Only NBA player to reach at least 25,000 points, 10,000 rebounds, 5,000 assists, 1,500 steals and 1,500 blocks</b></li>
        <li><b>Only NBA player to average at least 20 points, 10 rebounds and 5 assists per game for 6 consecutive seasons</b>: <a href="/wiki/1999%E2%80%932000_NBA_season" title="1999–2000 NBA season">1999–2000</a>–<a href="/wiki/2004%E2%80%9305_NBA_season" title="2004–05 NBA season">2004–05</a></li>
        <li><b>Only NBA player to average at least 20 points, 10 rebounds and 4 assists per game for 9 consecutive seasons</b>: <a href="/wiki/1998%E2%80%9399_NBA_season" title="1998–99 NBA season">1998–99</a>–<a href="/wiki/2006%E2%80%9307_NBA_season" title="2006–07 NBA season">2006–07</a></li>
        <li><b>Seasons leading the league in defensive rebounds</b>: 5 (<a href="/wiki/2002%E2%80%9303_NBA_season" title="2002–03 NBA season">2002–03</a>–<a href="/wiki/2006%E2%80%9307_NBA_season" title="2006–07 NBA season">2006–07</a>)
          <ul>
            <li>Broken by <a href="/wiki/Dwight_Howard" title="Dwight Howard">Dwight Howard</a> (<a href="/wiki/2007%E2%80%9308_NBA_season" title="2007–08 NBA season">2007–08</a>–<a href="/wiki/2012%E2%80%9313_NBA_season" title="2012–13 NBA season">2012–13</a>)</li>
          </ul>
        </li>
        <li><b>Consecutive seasons leading the league in defensive rebounds</b>: 5 (<a href="/wiki/2002%E2%80%9303_NBA_season" title="2002–03 NBA season">2002–03</a>–<a href="/wiki/2006%E2%80%9307_NBA_season" title="2006–07 NBA season">2006–07</a>)
          <ul>
            <li>Broken by <a href="/wiki/Dwight_Howard" title="Dwight Howard">Dwight Howard</a> (<a href="/wiki/2007%E2%80%9308_NBA_season" title="2007–08 NBA season">2007–08</a>–<a href="/wiki/2012%E2%80%9313_NBA_season" title="2012–13 NBA season">2012–13</a>)</li>
          </ul>
        </li>
        <li><b>First NBA player to win the NBA Player of the Month Award four times in a single season</b>: <a href="/wiki/2003%E2%80%9304_NBA_season" title="2003–04 NBA season">2003–04 season</a>
          <ul>
            <li>Also achieved by <a href="/wiki/LeBron_James" title="LeBron James">LeBron James</a>, who has achieved this twice</li>
          </ul>
        </li>
        <li><b>Third NBA player to lead his team in all five major statistics (points, rebounds, assists, steals, blocks) in the same season</b>: Minnesota Timberwolves, <a href="/wiki/2002%E2%80%9303_NBA_season" title="2002–03 NBA season">2002–03</a>
          <ul>
            <li>Also achieved by <a href="/wiki/Dave_Cowens" title="Dave Cowens">Dave Cowens</a> (Boston Celtics, <a href="/wiki/1977%E2%80%9378_NBA_season" title="1977–78 NBA season">1977–78</a>), <a href="/wiki/Scottie_Pippen" title="Scottie Pippen">Scottie Pippen</a> (Chicago Bulls, <a href="/wiki/1994%E2%80%9395_NBA_season" title="1994–95 NBA season">1994–95</a>), <a href="/wiki/LeBron_James" title="LeBron James">LeBron James</a> (Cleveland Cavaliers, <a href="/wiki/2008%E2%80%9309_NBA_season" title="2008–09 NBA season">2008–09</a>), and <a href="/wiki/Giannis_Antetokounmpo" title="Giannis Antetokounmpo">Giannis Antetokounmpo</a> (Milwaukee Bucks, <a href="/wiki/2016%E2%80%9317_NBA_season" title="2016–17 NBA season">2016–17</a>)</li>
          </ul>
        </li>
        <li><b>Tied for <a href="/wiki/List_of_National_Basketball_Association_seasons_played_leaders" title="List of National Basketball Association seasons played leaders">most seasons played in the NBA</a></b>: 21 seasons
          <ul>
            <li>Also achieved by <a href="/wiki/Robert_Parish" title="Robert Parish">Robert Parish</a> and <a href="/wiki/Kevin_Willis" title="Kevin Willis">Kevin Willis</a></li>
          </ul>
        </li>
        <li><b>Achievements</b>:</li>
        <li><b>NBA champion</b>: 2008</li>
        <li><b>Olympic gold medal</b>: 2000</li>
        <li><b><a href="/wiki/NBA_Most_Valuable_Player_Award" title="NBA Most Valuable Player Award">NBA Most Valuable Player</a></b>: 2004</li>
        <li><b><a href="/wiki/NBA_Defensive_Player_of_the_Year_Award" title="NBA Defensive Player of the Year Award">NBA Defensive Player of the Year</a></b>: 2008</li>
        <li><b><a href="/wiki/NBA_All-Star_Game_Most_Valuable_Player_Award" title="NBA All-Star Game Most Valuable Player Award">NBA All-Star Game MVP</a></b>: 2003</li>
        <li><b>15-time <a href="/wiki/NBA_All-Star" className="mw-redirect" title="NBA All-Star">NBA All-Star</a></b>: 1997–2011, 2013
          <ul>
            <li>Selected to 14 consecutive All-Star teams (<a href="/wiki/1997_NBA_All-Star_Game" title="1997 NBA All-Star Game">1997</a>–<a href="/wiki/2011_NBA_All-Star_Game" title="2011 NBA All-Star Game">2011</a>) (no game in 1999 due to lockout)</li>
            <li>Selected in <a href="/wiki/2008_NBA_All-Star_Game" title="2008 NBA All-Star Game">2008</a>, but did not play due to injury</li>
          </ul>
        </li>
        <li><b>9-time <a href="/wiki/All-NBA_Team" title="All-NBA Team">All-NBA</a> selection</b>:
          <ul>
            <li><b>First Team</b>: 2000, 2003, 2004, 2008</li>
            <li><b>Second Team</b>: 2001, 2002, 2005</li>
            <li><b>Third Team</b>: 1999, 2007</li>
          </ul>
        </li>
        <li><b>12-time All-Defensive</b>:
          <ul>
            <li><b>First Team</b>: 2000–2005, 2008–2009, 2011</li>
            <li><b>Second Team</b>: 2006–2007, 2012</li>
          </ul>
        </li>
        <li><b>NBA <a href="/wiki/NBA_All-Rookie_Team" title="NBA All-Rookie Team">All-Rookie</a> selection</b>:
          <ul>
            <li><b>Second team: 1996</b></li>
          </ul>
        </li>
        <li><b>J. Walter Kennedy Citizenship Award</b>: 2006</li>
      </ul></div>
    );
    return (
      <Layout session={this.props.session}>
        <div className="home-content">
          <Alert
            message="Kevin Garnett"
            description={desc}
            type="info"
          />
          <ul>
            <li><img src="../static/images/kg1.png"/></li>
            <li><img src="../static/images/kg2.jpg"/></li>
            <li><img src="../static/images/kg3.jpg"/></li>
            <li><img src="../static/images/kg4.jpg"/></li>
            <li><img src="../static/images/kg5.jpg"/></li>
            <li><img src="../static/images/kg6.jpg"/></li>
          </ul>
          <Alert
            message="Achievements and records"
            description={achieves}
            type="success"
            showIcon
          />
        </div>
        <style jsx>{`
          .home-content{
            width:1000px;

          }
          .home-content li{
            display:inline-block;
            margin:10px;
            width:450px;
            height:400px
            border:1px solid orange;

          }
          .home-content li img{
            width:430px;
          }
          .achieve ul{
            list-style-type: disc;
          }

          .achieve ul li {
            display: list-item;
            text-align: -webkit-match-parent;
        }
        `}
        </style>
      </Layout>
    )
  }
}
