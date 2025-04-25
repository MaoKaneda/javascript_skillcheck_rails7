// 非同期投稿機能の実装
function post (){
  console.log("非同期投稿を実装");
};

// ページ読み込み時にpost関数を実行
window.addEventListener('turbo:load', post); 