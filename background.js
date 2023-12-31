// 拡張機能をインストールした時に１度だけ実行
chrome.runtime.onInstalled.addListener(() => {
  // コンテキストメニューを追加
  chrome.contextMenus.create({
    id: 'custom-context-menu',
    title: 'カスタムコンテキストメニュー',
    contexts: ['all'],
  })
})

// コンテキストメニューのメニューをクリックしたら実行
chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === 'custom-context-menu') {
    console.log('カスタムコンテキストメニューがクリックされました。')
  }
})
