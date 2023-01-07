
var tweetsDiv=document.getElementsByClassName('tweetsTimeline')[0];

//to seperate tweets and user details so i can use it for sorting with tweets
let newUser1 = (({ userName,displayName,joinedDate,followingCount,followerCount,avatarURL,coverPhotoURL }) => ({ userName,displayName,joinedDate,followingCount,followerCount,avatarURL,coverPhotoURL }))(user1);
let newUser2 = (({ userName,displayName,joinedDate,followingCount,followerCount,avatarURL,coverPhotoURL }) => ({ userName,displayName,joinedDate,followingCount,followerCount,avatarURL,coverPhotoURL }))(user2);

var numberOfTweetOfUser=user.tweets.length;
var tweetsOfUser1=users[0].tweets;
var tweetsOfUser2=users[1].tweets;

//combine twwets and newuser (without tweets part)
for (i=0;i<numberOfTweetOfUser;i++){
     Object.assign(tweetsOfUser1[i], newUser1);
     Object.assign(tweetsOfUser2[i], newUser2);
 }

 //combine both users all details and sort them
allTweets=tweetsOfUser1.concat(tweetsOfUser2);
// you can uncomment below line and can see what i am trying to do is give username and other details of profile to every tweet of that person so when i sort they stay together and i can call them for html
//console.log(allTweets);
allTweets.sort(function(a, b){
        return new Date(b.timestamp) - new Date(a.timestamp)}
    );

allTweets.forEach((tweet) => {
        
        var usersTweets=document.createElement('div');
        usersTweets.classList.add('content');
        usersTweets.innerHTML=`
        
        <div class="last-tweet">
        <img class="profile-img-2" src=${tweet.avatarURL}>
        <div class="name-tweet-text">
            <span class="name-3">${tweet.displayName}</span>
            <span class="username-2">${tweet.userName}</span>
            <span class="tweet-date username-2">&nbsp${timeElapsedFunction(tweet.timestamp)}</span>
            <span class="option-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
             <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/> 
            </svg></span>
                            
            <p class="tweet-text">${tweet.text}</p>
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
    
    tweetsDiv.appendChild(usersTweets);
    }
    
    );