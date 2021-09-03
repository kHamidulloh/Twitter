import "./feed.css"
import { Link } from "react-router-dom"
import LogoTwitter from '../../imgs/logo-twitter.png'
import UserLogo from '../../imgs/user-logo.png'
import Star from "../../imgs/star.png"
import Image from "../../imgs/image.png"
import Gif from "../../imgs/gif.png"
import Stats from "../../imgs/stats.png"
import Smile from "../../imgs/smile.png"
import Schedule from "../../imgs/schedule.png"
import SecondUser from "../../imgs/user-designsta.png"
import Share from "../../imgs/share.png"
import Statistics from "../../imgs/statistics.png"
import User3 from "../../imgs/user-3.png"
import User4 from "../../imgs/user-4.png"
import FoodImg from "../../imgs/home-eat-img.png"
import SearchInput from "../../imgs/search-input.png"
import Settings from "../../imgs/settings.png"
import Mushtariy from "../../imgs/mushtariy.png"
import Shuhratbek from "../../imgs/shuhratbek.png"



export default function HomePage () {

    let data = JSON.parse(localStorage.getItem("token"));

return (
<>
    <div className="container">
        <div className="home-site">
            <div className="home-left">
                <ul className="home-list">
                    <img className="home-twitter__logo" src={LogoTwitter} alt="Logo" />
                    <li className="list-link home-link">Home</li>
                    <li className="list-link explore-link">Explore</li>
                    <li className="list-link not-link">Notifications</li>
                    <li className="list-link messages-link">Messages</li>
                    <li className="list-link bookmarks-link">Bookmarks</li>
                    <li className="list-link lists-link">Lists</li>
                    <Link className="list-link profile-link" to={`/profile/${data.username}`}>Profile</Link>
                    <li className="list-link more-link">More</li>
                    <button className="home-btn" type="submit">Tweet</button>
                </ul>
                <div className="user">
                    <img className="user-logo" src={UserLogo} alt="Logo" />
                    <div className="user-info">
                        <h5 className="user-title">{data.username}</h5>
                        <p className="user-adress">@{data.username}</p>
                    </div>
                    <p className="other">...</p>
                </div>
            </div>

            <div className="home-center">
                <div className="center-top">
                    <h2 className="center-top__title">Home</h2>
                    <img className="logo-star" src={Star} alt="Star" />
                </div>
                <div className="center-top__info">

                    <div className="center-user">
                        <img className="center-user__logo" src={UserLogo} alt="Logo" />
                        <p className="center-user__text">What’s happening</p>
                    </div>

                    <div className="center-logos">
                        <div>
                            <img className="center-logo image" src={Image} alt="logo" />
                            <img className="center-logo" src={Gif} alt="logo" />
                            <img className="center-logo" src={Stats} alt="logo" />
                            <img className="center-logo" src={Smile} alt="logo" />
                            <img className="center-logo" src={Schedule} alt="logo" />
                        </div>
                        <button className="logos-btn" type='submit'>Tweet</button>
                    </div>

                </div>

                <div className="center-second__info">
                    <div className="second-user">
                        <img className="second-user__logo" src={SecondUser} alt="Logo" />

                        <div className="second-user__name">
                            <p className="user-name">Designsta <span className="user-name__span">@inner · 25m</span></p>
                            <p className="user-comment">Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar
                                zerikmadinglarmi?</p>
                        </div>
                    </div>

                    <div className="instruments">
                        <p className="comment">10</p>
                        <p className="retweet">1</p>
                        <p className="like">8</p>
                        <img className="share" src={Share} alt="img" />
                        <img className="statistics" src={Statistics} alt="img" />
                    </div>
                    <p className="second-user__other">...</p>
                </div>

                <div className="center-second__info user-3__info">
                    <div className="second-user">
                        <img className="second-user__logo" src={User3} alt="Logo" />

                        <div className="second-user__name">
                            <p className="user-name">cloutexhibition <span className="user-name__span">@RajLahoti ·
                                    22m</span></p>
                            <p className="user-comment">YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
                                Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi
                                odam.</p>
                        </div>
                    </div>

                    <div className="instruments">
                        <p className="comment"></p>
                        <p className="retweet green">5</p>
                        <p className="like red">9</p>
                        <img className="share" src={Share} alt="img" />
                        <img className="statistics" src={Statistics} alt="img" />
                    </div>
                    <p className="second-user__other">...</p>
                </div>

                <div className="four-user__info">
                    <div className="four-user">
                        <img className="four-user__img" src={User4} alt="img" />
                        <div className="four-user__comment">
                            <p className="four-user__name">CreativePhoto <span
                                    className="user-name__span">@cloutexhibition · 1h</span></p>
                            <p className="four-user__text">Обетда.....</p>
                            <p className="four-user__text">Кечиринглар</p>
                        </div>
                    </div>
                    <img className="food-img" src={FoodImg} alt="img" />

                    <div className="instruments">
                        <p className="comment">10</p>
                        <p className="retweet">1</p>
                        <p className="like">8</p>
                        <img className="share" src={Share} alt="img" />
                        <img className="statistics" src={Statistics} alt="img" />
                    </div>
                </div>

            </div>

            <div className="home-right">
                <div>
                    <img className="search-input" src={SearchInput} alt="img"/>
                </div>
                <div className="right-card">
                    <div className="right-top">
                        <h3 className="right-title">Trends for you</h3>
                        <img className="right-settings" src={Settings} alt="img" />
                    </div>

                    <div className="right-texts">
                        <p className="right-from">Trending in Germany</p>
                        <h4 className="right-type">Revolution</h4>
                        <p className="right-text">50.4K Tweets</p>
                        <p className="right-dots">...</p>
                    </div>

                    <div className="right-texts">
                        <p className="right-from">Trending in Germany</p>
                        <h4 className="right-type">Revolution</h4>
                        <p className="right-text">50.4K Tweets</p>
                        <p className="right-dots">...</p>
                    </div>

                    <div className="right-texts">
                        <p className="right-from">Trending in Germany</p>
                        <h4 className="right-type">Revolution</h4>
                        <p className="right-text">50.4K Tweets</p>
                        <p className="right-dots">...</p>
                    </div>
                    <p className="text-blue">Show more</p>
                </div>

                <div className="right-block">
                    <h3 className="right-block__title">You might like</h3>
                    <div className="block-texts">
                        <img className="block-img" src={Mushtariy} alt="img" />
                        <div>
                            <p className="block-title">Mushtariy</p>
                            <p className="block-text">@Mushtar565266</p>
                        </div>
                        <button className="block-btn" type="submit">Follow</button>
                    </div>

                    <div className="block-texts">
                        <img className="block-img" src={Shuhratbek} alt="img" />
                        <div>
                            <p className="block-title">Shuhratbek</p>
                            <p className="block-text">@mrshukhrat</p>
                        </div>
                        <button className="block-btn" type="submit">Follow</button>
                    </div>
                    <p className="text-blue">Show more</p>
                </div>

                <div className="df">
                    <p className="text-grey">Terms of Service</p>
                    <p className="text-grey text-line">Privacy Policy</p>
                    <p className="text-grey">Cookie Policy</p>
                </div>
                <div className="df">
                    <p className="text-grey">Imprint</p>
                    <p className="text-grey">Ads Info</p>
                    <p className="text-grey">More ···</p>
                    <p className="text-grey">© 2021 Twitter, Inc.</p>
                </div>
            </div>
        </div>
    </div>
</>
)
}