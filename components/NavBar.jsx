import './NavBar.css'

function NavBar(){
    const nickname = "변성우"
    const userId = "b2ong222"
    return (
        <>
            <div className='NavBar'>
                <div className='logo'>
                    <img src="/ORATO.png" alt="Orato logo" />
                </div>

                <div className='choice'>
                    <div>
                        <button className='choiceBtn'>발표 분석</button>
                    </div>

                    <div>
                        <button className='choiceBtn'>기록</button>
                    </div>
                    <div>
                        <button className='choiceBtn'>마이페이지</button>
                    </div>
                </div>
                

                <div className='userInf'>
                    <div id='user'>
                        <div id='profilePicture'></div>
                        <div>
                            <p id='nickname'>{nickname} 님</p>
                            <p id='userId'>@{userId}</p>
                        </div>
                    </div>
                    
                    <div><button id='logOut'>로그아웃</button></div>
                </div>                

            </div>
        </>
    )
}

export default NavBar