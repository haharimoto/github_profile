(function ($) {
  $.ajax({  // jQueryのajaxでjsonデータを取得
      type: 'GET',
      url: '',
      dataType: 'json',
      success: function (json) {
          const insta = json.media.data;
          for (let i = 0; i < 9; i++) {
            let url = insta[i].media_url; // 動画ソースのURLを取得
            let href = insta[i].permalink; // リンク先URLを取得
            let caption = insta[i].caption; //　投稿のキャプションを取得
            let like = insta[i].like_count; //　いいね！数の取得
            if(url.indexOf('.mp4') <= 0){ // 今回は動画は除外 .mp4以外を<li>タグで描画
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
