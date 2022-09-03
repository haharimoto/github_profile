(function ($) {
  $.ajax({  // jQueryのajaxでjsonデータを取得しますね
      type: 'GET',
      url: 'https://graph.facebook.com/17841401582209572?access_token=EAAKH4KhSkyEBAC8VUkL0CDrZAq5bWjWepkw68KBog7ePTEamhlhF5sVqZAa9ZB8xxZA6lzaXAl7KGnjKCFHHJQy4bR7l1YyjWrNEmpCCOIDqyMKJXVcgEFH7pkFG8WHbfBx8tPTimOn9iOgrtzyzrgJRZBwgZC4ZBNovzm9VhfGqMDeAm103BAT&fields=name,media{caption,like_count,media_url,permalink,timestamp,username}',
      dataType: 'json',
      success: function (json) {
          const insta = json.media.data;
          for (let i = 0; i < 9; i++) {
            let url = insta[i].media_url; // 動画ソースのURLを取得
            let href = insta[i].permalink; // リンク先URLを取得
            let caption = insta[i].caption; //　投稿のキャプションを取得
            let like = insta[i].like_count; //　いいね！数の取得
            if(url.indexOf('.mp4') <= 0){ // 今回は動画は除外させました .mp4以外を<li>タグで描画します
              $('.insta_list').append(`
                <a href="${href}" target="_blank">
                  <img src="${url}">
                </a>
                `);
              }
          }
      }
  });
})(jQuery);


/* <li>
<a href="${href}" target="_blank">
  <img src="${url}" alt="${caption}">
  <p>${caption}</p>
  <p>💖<span>${like}</span></p>
</a>
</li> */
