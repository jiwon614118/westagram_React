import React from 'react';
import "./Main.css";

function Main(){
    return(
        <div className="main-page">
            <header className="banner-border-container">
            <span className="banner">
                <img className="instagram-log" src="public/images/instagram.png" />
                    <h1>Westagram</h1>
                    <input className="search-bar" type="text" placeholder="검색" />
            </span>
            <div className="nav-container">
                <nav>
                    <img className="explore-img" src="public/images/explore.png" alt="탐색" />
                    <img className="heart-img" src="public/images/heat.png" alt="최근 활동" />
                    <img className="profile-img" src="public/images/progile.png" alt="나의 정보" />
                </nav>
            </div>
        </header>
        <div className="main">
            <div class="main-feed-border">
                <article className="main-feed">
                    <span class="profile-picture">
                        <img className="my-profile-picture" src="public/images/feedprofile.jpg" alr="나의 프로필 사진" />
                        <span class="my-name">2jiwon_</span>
                    </span>
                    <div className="feed-picture">
                        <img className="mt-feed-picture" src="public/images/feedimg.jpg" alt="나의 피드 사진" />
                    </div>
                    <span class="receive-like">
                        <img className="liker-profile" src="public/images/likeprofile.jpg" alt="좋아요 누른 사람들" />
                        <span className="liker-name">goodpeople_1</span>
                        <span className="text">님 외</span>
                        <span className="liker-number">77명</span>
                        <span className="text">이 좋아합니다.</span>
                        <br />
                    </span>
                    <br />
                    <span className="feed-info">2jiwon_</span>
                    <span className="text">오늘 저녁 뭐 먹지 ?...</span>
                    <a href="#!" style="text-decoration: none"><p className="more">더 보기..</p></a>
                    <br />
                    <span className="user-name">badpeople</span>
                    <span className="text">미역줄기 볶음밥 먹자</span>
                    <br />
                    <p className="time">17분 전</p>
                    <br />
                    <div className="comment-container">
                        <input className="comment-area" type="text" placeholder="댓글 달기.." />
                        <button class="comment-add">게시</button>
                    </div>
                </article>
                <div className="main-right-container">
                    <div className="main-right-story-border">
                        <span className="story">스토리</span>
                        <span className="view-all">모두 보기</span>
                        <ul>
                            <img className="story-img1" src="public/images/story1.jpg" alt="스토리 사진" /> 
                            <img className="story-img2" src="public/images/story2.jpg" alt="스토리 사진" />
                            <img className="story-img3" src="public/images/story3.jpg" alt="스토리 사진" />
                            <img className="story-img4" src="public/images/story4.jpg" alt="스토리 사진" />
                        </ul>
                        <ul className="story-name">
                            <li class="story-list1">xvcjk_992</li>
                            <span class="story-time1">1분 전</span>
                            <li class="story-list2">rqwiu_edo-mxnaqw1</li>
                            <span class="story-time2">17분 전</span>
                            <li class="story-list3">zxhyuf_14</li>
                            <span class="story-time3">26분 전</span>
                            <li class="story-list4">qxk_0</li>
                            <span class="story-time4">39분 전</span>
                        </ul>
                    </div>
                    <div className="main-right-add-friend-border">
                        <span className="add-friend-text">회원님을 위한 추천</span>
                        <span className="view-all2">모두 보기</span>
                            <ul>
                            <img className="story-img5" src="public/images/story5.jpg" />
                            <img className="story-img6" src="public/images/story6.jpg" />
                            <img className="story-img7" src="public/images/story7.jpg" />
                            </ul>
                            <ul>
                                <li className="add-friend-list1">wowowowo12</li>
                                <button className="follow1">팔로우</button>
                                <li className="add-friend-list2">asdnj__1</li>
                                <button className="follow1">팔로우</button>
                                <li className="add-friend-list3">mjfi_0921</li>
                                <button className="follow1">팔로우</button>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    )
}

export default Main;