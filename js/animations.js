 $(document).ready(function(){ 
	//Step One
	//make the tweet button hide once the page loads
	$('#tweet-controls').hide();

	//Step Two
	//when you click on the text bar it expands.
	$('.tweet-compose').on('click', function(){
		$('#tweet-controls').toggle();
	});
	//Step Three
	//declare a variable that will 
		var number = 0;
		$('.tweet-compose').keydown(function(){
		number = $('.tweet-compose').val().length;
		$('#char-count').html(140 - number);			
		//if statement that will change the text color once you type 129chars
		if(number > 129){
			$('#char-count').css({color:"red"});
			} else{  $('#char-count').css({color:'#999'});}
	//step 4
	//if statement that will disable tweet button @ 140 chars
		if(number >= 140){
		$('#tweet-submit').attr('disabled', 'disabled');
		} else {$('#tweet-submit').removeAttr('disabled');
	}
	});

	//Step 5
	/*<!-- STEP 5: When the user successfully inputs characters and 
	clicks the “Tweet” button, a new tweet should be created and added to the tweet stream in 
	the main column, using the user’s fake profile image in the top left and username/fullname. -->
					<!-- HINT: jQuery ".prepend" method -->*/

	$('#tweet-submit').on('click', function(){
		var tweet = $('newTweet').clone(true);
		var newImg = $('profile-summary .avatar').attr('src');
		var fullName = $('profile-summary p').html();

		tweet.removeAttr('id');
		tweet.css({display: 'inline-block'});
		$('#stream').prepend(tweet);
		$('#newTweetText').text($('.tweet-compose').val());
		$('.tweet:first .avatar').attr('src', newImg);
		$('.tweet:first .fullName').html(fullName);
		$('.tweet:first .username').html('@RyanLeeHamblin');
		$('.tweet-compose').val('');
		$('.tweet-compose').animate({height:"3em"}, 500);
		$('#tweet-controls').hide();
	})


		$('.tweet').find('.tweet-actions').hide();

	$('.tweet').hover(
		function() {
			$(this).find('.tweet-actions')
			.show()
			.slideDown({height: 25}, 400);
		}, function() {
			$(this).find('.tweet-actions')
			.slideUp(400);
		}
	);

	$('.tweet').find('.stats').hide();
	var showStats = false;
	$('.tweet').click(function() {
		if(showStats == false) {
			$(this).find('.stats')
			.slideDown({height: 75}, 500);
			showStats = true;
		} else {
			$(this).find('.stats')
			.slideUp(500);
			showStats = false;
		}

	});

});



	
