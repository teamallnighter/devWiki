$.getScript('https://www.gstatic.com/firebasejs/3.4.0/firebase.js', function () {
    // Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAlaldokVSS_zA51fbcmDSu_Kl88PjqnQ0",
  authDomain: "webdevbible.firebaseapp.com",
  databaseURL: "https://webdevbible.firebaseio.com",
  projectId: "webdevbible",
  storageBucket: "webdevbible.appspot.com",
  messagingSenderId: "539841029824",
  appId: "1:539841029824:web:6da7c3f7679c6d498d6f25"
};
firebase.initializeApp(config);

firebase.initializeApp(config);
var rootRef = firebase.database().ref();
var postComments = rootRef.child('postComments');
var link = $("link[rel='canonical']").attr("href");
var pathkey = decodeURI(link.replace(new RegExp('\\/|\\.', 'g'),"_"));
var postRef = postComments.child(pathkey);
$("#comment").submit(function() {
    postRef.push().set({
        name: $("#name").val(),
        message: $("#message").val(),
        md5Email: md5($("#email").val()),
        postedAt: firebase.database.ServerValue.TIMESTAMP
    });
    $("input[type=text], textarea").val("");
    return false;
});    
postRef.on("child_added", function(snapshot) {
    var newComment = snapshot.val();
    var converter = new showdown.Converter({ extensions: ['xssfilter'] });
    converter.setFlavor('github');
    var markedMessage = converter.makeHtml(newComment.message);
    var html = "<div class='comment'>";
    html += "<h4>" + newComment.name + "</h4>";
    html += "<div class='profile-image'><img src='https://www.gravatar.com/avatar/" + newComment.md5Email + "?s=100&d=retro'/></div>";
    html += "<span class='date'>" + jQuery.timeago(newComment.postedAt) + "</span>"
    html += "<p>" + markedMessage  + "</p></div>";
    $("#comments-container").prepend(html);
});
}
So far, I’ve changed the commens backend to LeanCloud, a similar service provider based in China. The above method might still working, but you should probably go though the updated Cloud Firestore documents.

