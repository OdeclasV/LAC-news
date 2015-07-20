// var feedcontainer=document.getElementById("feed")
// var feedurl="http://www.npr.org/rss/rss.php?id=1006"
// var feedlimit=10
// var rssoutput="<h2>Latest NPR Business News:</h2><ul>"


// function rssfeedsetup(){
// var feedpointer=new google.feeds.Feed(feedurl)
// feedpointer.setNumEntries(feedlimit) 
// feedpointer.load(displayfeed) 
// }

// function displayfeed(result){
// if (!result.error){
// var thefeeds=result.feed.entries
// for (var i=0; i<thefeeds.length; i++)
// rssoutput+="<li><a href='" + thefeeds[i].link + "'>" + thefeeds[i].title + "</a></li>"
// rssoutput+="</ul>"
// feedcontainer.innerHTML=rssoutput
// }
// else
// alert("Error fetching feeds!")
// }

// window.onload=function(){
// rssfeedsetup()
// }


 <script type="text/javascript">
        
    // var feeds = {
    //     elSalvador: "http://www.laprensagrafica.com/Generales/Rss?rss=Politica",
    //     venezuela: "http://www.eluniversal.com/rss/pol_avances.xml",
    //         }
        var feedcontainer= document.getElementById("feed");
        var feedurl= "http://www.eluniversal.com/rss/pol_avances.xml";
        var feedlimit= 10;
        var rssoutput= "<ul><h2>El Universal</h2>";

        
        // feedcontainer=document.getElementById("feed2");
        // feedurl = "http://www.laprensagrafica.com/Generales/Rss?rss=Politica";
        // feedlimit=10;
        // rssoutput="<h2>El Salvador</h2><ul>";


        function rssfeedsetup(){
        var feedpointer = new google.feeds.Feed(feedurl)
        feedpointer.setNumEntries(feedlimit) 
        feedpointer.load(displayfeed) 
        };


        function displayfeed(result){
        if (!result.error){
        var thefeeds = result.feed.entries;
        for (var i=0; i<thefeeds.length; i++)
        rssoutput+="<li><a href='" + thefeeds[i].link + "'>" + thefeeds[i].title + "</a></li>"
        rssoutput+="</ul>"
        feedcontainer.innerHTML=rssoutput
        }
        else
        alert("Error fetching feeds!")
        }

        window.onload=function(){
        rssfeedsetup()
        }

    </script>