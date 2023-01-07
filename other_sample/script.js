var user1 ={
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var user2 = {                               
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var users=[user1,user2];
var numberOfUsers=users.length;

//take details from url if user1 then user1 details if user2 then user2 details will be shown
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]"+name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
        
   
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var dynamicContent = getParameterByName('user');

for (var i=0;i<numberOfUsers;i++){
        if(dynamicContent==='user'+(i+1)) {
                var user=users[i];
        }
        else if( dynamicContent===null){
            var user=users[0];
        }
    }

// to change numbers in million (M) and thousands (K) 
function numFormatter(num) {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return num; // if value < 1000, nothing to do
    }
};

// to change date for mate like twitter
function changeDateFormat(tweetDate){
    var b = tweetDate.split(/[: /]/g);
    var date = b[1];
    var month =b[0]; 
    var year =b[2];
    var monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    
    var dateWithFullMonthName = monthNames[month-1] + " " + date + ", " + year;
    return dateWithFullMonthName;
}


//html section 
 var numberOfTweetOfUser=user.tweets.length;

    var mainDiv=document.getElementsByClassName('center-data')[0];
    var topDiv=document.createElement('div');
    topDiv.classList.add('name-tweets');
 
    topDiv.innerHTML=`
    <button class="previous">&#8592;</button>
    <span class="name">${user.displayName}<p class="total-tweets"> 13.6K Tweets</p></span>
    `;
    mainDiv.appendChild(topDiv);
    var profileDiv=document.createElement('div');
    profileDiv.classList.add('profile-info');
    profileDiv.innerHTML=`
    <div class="img-section">
        <div class="two-images">
            <img class="cover-img" src=${user.coverPhotoURL}> 
            <img class="profile-img" src=${user.avatarURL}>
        </div> 
        <button class="follow-btn"> Following</button>   
        <div class="username-info">
            <p class="name-2">${user.displayName}</p>
            <p class="username">${user.userName} <br> 
                <span id="joined"> &nbsp &nbsp &nbsp Joined ${user.joinedDate}</span>
            </p>
            <p class="follow-numbers">
                <span class="numbers">${numFormatter(user.followingCount)}</span> 
                Following &nbsp &nbsp 
                <span class="numbers">${numFormatter(user.followerCount)}</span> 
                Followers
            </p>
        </div>
    </div> 
         
    `;
    mainDiv.appendChild(profileDiv);

    var menuDiv=document.createElement('div');
    menuDiv.classList.add('tweets-sections');
    menuDiv.innerHTML=`
    <div class="tweet-menu">
        <ul class="menu-bar">
        <li id="tweets">Tweets</li>
        <li id="tweetsANDreplies">Tweets & replies</li>
        <li id="media">Media</li>
        <li id="likes">Likes</li>
        </ul>
    </div>
    `;

    mainDiv.appendChild(menuDiv);
    
    function timeElapsedFunction(tweetTimeStamp){
        let past = new Date(tweetTimeStamp);
        let now = new Date();
        let elapsed = (now - past);
    
        let secondsElapsed=elapsed/(1000);
        let minutesElapsed=elapsed/(1000*60);
        let hoursElapsed=elapsed/(1000*60*60);
        let daysElapsed=elapsed/(1000*60*60*24);
        if(secondsElapsed<1){
            let timeElapsed='now';
            return timeElapsed;
        }
        else if( secondsElapsed<60){
            timeElapsed=secondsElapsed;
            return timeElapsed;
        }
        else if( minutesElapsed<60){
            timeElapsed=Math.round(minutesElapsed);
            return timeElapsed;
        }
        else if( hoursElapsed<24){
            timeElapsed=Math.round(hoursElapsed);
            return timeElapsed;
        }
    
        else if( daysElapsed<365){
            timeElapsed=changeDateFormat(tweetTimeStamp);
            return timeElapsed.slice(0,-6);
        }
        else if( daysElapsed>365){
            timeElapsed=changeDateFormat(tweetTimeStamp);
            return timeElapsed;
        }
    }
    
    for(var i=0;i<numberOfTweetOfUser;i++){
        var tweetsDiv=document.createElement('div');
        tweetsDiv.classList.add('content');
    
        tweetsDiv.innerHTML=`
    
        <div class="last-tweet">
            <img class="profile-img-2" src=${user.avatarURL}>
            <div class="name-tweet-text">
                <span class="name-3">${user.displayName}</span>
                <span class="username-2">${user.userName}</span>
                <span class="tweet-date username-2">&nbsp${timeElapsedFunction(user.tweets[i].timestamp)}</span>
                <span class="option-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                 <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/> 
                </svg></span>
                                
                <p class="tweet-text">${user.tweets[i].text}</p>
                <div class="comment-share-like">
                
                    <svg class="share-btn comment-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 72">
                        <path d="M41 31h-9V19c0-1.14-.647-2.183-1.668-2.688-1.022-.507-2.243-.39-3.15.302l-21 16C5.438 33.18 5 34.064 5 35s.437 1.82 1.182 2.387l21 16c.533.405 1.174.613 1.82.613.453 0 .908-.103 1.33-.312C31.354 53.183 32 52.14 32 51V39h9c5.514 0 10 4.486 10 10 0 2.21 1.79 4 4 4s4-1.79 4-4c0-9.925-8.075-18-18-18z"/>
                    </svg>
                    <svg class="share-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 72">
                        <path d="M70.676 36.644C70.166 35.636 69.13 35 68 35h-7V19c0-2.21-1.79-4-4-4H34c-2.21 0-4 1.79-4 4s1.79 4 4 4h18c.552 0 .998.446 1 .998V35h-7c-1.13 0-2.165.636-2.676 1.644-.51 1.01-.412 2.22.257 3.13l11 15C55.148 55.545 56.046 56 57 56s1.855-.455 2.42-1.226l11-15c.668-.912.767-2.122.256-3.13zM40 48H22c-.54 0-.97-.427-.992-.96L21 36h7c1.13 0 2.166-.636 2.677-1.644.51-1.01.412-2.22-.257-3.13l-11-15C18.854 15.455 17.956 15 17 15s-1.854.455-2.42 1.226l-11 15c-.667.912-.767 2.122-.255 3.13C3.835 35.365 4.87 36 6 36h7l.012 16.003c.002 2.208 1.792 3.997 4 3.997h22.99c2.208 0 4-1.79 4-4s-1.792-4-4-4z"/>
                    </svg>
                    
                    <svg class="share-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 72">
                        <path d="M38.723,12c-7.187,0-11.16,7.306-11.723,8.131C26.437,19.306,22.504,12,15.277,12C8.791,12,3.533,18.163,3.533,24.647 C3.533,39.964,21.891,55.907,27,56c5.109-0.093,23.467-16.036,23.467-31.353C50.467,18.163,45.209,12,38.723,12z"/>
                    </svg>
                    <svg class="share-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 72">
                    <path d="M70.676 36.644C70.166 35.636 69.13 35 68 35h-7V19c0-2.21-1.79-4-4-4H34c-2.21 0-4 1.79-4 4s1.79 4 4 4h18c.552 0 .998.446 1 .998V35h-7c-1.13 0-2.165.636-2.676 1.644-.51 1.01-.412 2.22.257 3.13l11 15C55.148 55.545 56.046 56 57 56s1.855-.455 2.42-1.226l11-15c.668-.912.767-2.122.256-3.13zM40 48H22c-.54 0-.97-.427-.992-.96L21 36h7c1.13 0 2.166-.636 2.677-1.644.51-1.01.412-2.22-.257-3.13l-11-15C18.854 15.455 17.956 15 17 15s-1.854.455-2.42 1.226l-11 15c-.667.912-.767 2.122-.255 3.13C3.835 35.365 4.87 36 6 36h7l.012 16.003c.002 2.208 1.792 3.997 4 3.997h22.99c2.208 0 4-1.79 4-4s-1.792-4-4-4z"/>
                
                    </svg>
            
                </div>
               
            </div>
        </div>
    `;

    mainDiv.appendChild(tweetsDiv);
}
