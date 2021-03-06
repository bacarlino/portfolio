// Refactor into one object

var QUOTES = [
    ['I like school and fighting with my sister Aubrielle Carlino ', 'Maddox Carlino'],
    ['I love math, reading, and of course piano!', 'Aubrielle Carlino'],
    ['Life is about making an impact, not making an income.', 'Kevin Kruse'],
    ['Whatever the mind of man can conceive and believe, it can achieve.', 'Napoleon Hill'],
    ['Strive not to be a success, but rather to be of value.', 'Albert Einstein'],
    ['Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.', 'Robert Frost'],
    ['I attribute my success to this: I never gave or took any excuse.', 'Florence Nightingale'],
    ['You miss 100% of the shots you don’t take.', 'Wayne Gretzky'],
    ['I\'ve missed more than 9000 shots in my career. I\'ve lost almost 300 games. 26 times I\'ve been trusted to take the game winning shot and missed. I\'ve failed over and over and over again in my life. And that is why I succeed.', 'Michael Jordan'],
    ['The most difficult thing is the decision to act, the rest is merely tenacity.', 'Amelia Earhart'],
    ['Every strike brings me closer to the next home run.', 'Babe Ruth'],
    ['Definiteness of purpose is the starting point of all achievement.', 'W. Clement Stone'],
    ['Life isn\'t about getting and having, it\'s about giving and being.', 'Kevin Kruse'],
    ['Life is what happens to you while you’re busy making other plans.', 'John Lennon'],
    ['We become what we think about.', 'Earl Nightingale'],
    ['Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.', 'Mark Twain'],
    ['Life is 10% what happens to me and 90% of how I react to it.', 'Charles Swindoll']
]


function rand_num(min, max) {
  return Math.floor(Math.random() * (max-min)) + min;
}

function get_quote() {
  var quote_i = rand_num(0, QUOTES.length);
  return ['"' + QUOTES[quote_i][0] + '"<br><hr><small>~' + QUOTES[quote_i][1] + '~</small>', quote_i];
}

function build_twitter_params(index) {
  return 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(QUOTES[index][0] + ' -' + QUOTES[index][1]);
}

$(document).ready(function() {
  var quote = get_quote()
  $('.quote-box p').html(quote[0]);
  $('.quote-box a').attr('href', build_twitter_params(quote[1]));
  $('.quote-box button').click(function() {
    var quote = get_quote();
    $('.quote-box p').fadeOut('slow', function() {
      $('.quote-box p').html(quote[0]).fadeIn('slow');
      $('.quote-box a').attr('href', build_twitter_params(quote[1]));
    });
  });
});
