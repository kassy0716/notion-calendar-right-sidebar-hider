# Notion Calendar Right Sidebar Hider
> **Unofficial extension – not affiliated with Notion Labs, Inc.**

Hide/show the right sidebar (context panel) in Notion Calendar with a toolbar icon or **Ctrl / ⌘ + Shift + P**.  
ワンクリック／ショートカットで Notion Calendar の右サイドバーを表示・非表示し、作業領域を最大化します。

---

## Features / 主な機能
- **Hide / show** the 268-px right column and expand the main view.  
  右サイドバー（幅 268 px）を消してメインビューを全幅表示。  
- Instant toggle via toolbar icon or shortcut.  
  アイコンまたはショートカットで即時トグル。  
- Only two permissions: `activeTab`, `scripting`.  
  必要権限は `activeTab`, `scripting` のみ。  
- **No data collection** – nothing is stored or sent anywhere.  
  データ収集ゼロ。  
- Open-source under the MIT license.  
  MIT ライセンスのオープンソース。  

---

## Installation / インストール
1. Install from the **[Chrome Web Store](https://chromewebstore.google.com/detail/notion-calendar-right-pan/pmpfhihhoafelkldmbkomjkljfebhnem?hl=ja)**.  
   **[Chrome ウェブストア](https://chromewebstore.google.com/detail/notion-calendar-right-pan/pmpfhihhoafelkldmbkomjkljfebhnem?hl=ja)**からインストール。  
2. Reload Notion Calendar.  
   Notion Calendar を再読み込みします。  
3. Click the extension icon or press **Ctrl / ⌘ + Shift + P** to toggle.  
   アイコンをクリック、または **Ctrl / ⌘ + Shift + P** でトグル。  

---

## Permissions / 権限
| Permission / 権限 | Why it is needed / 必要な理由 |
|------------|------------------|
| `activeTab` | Inject CSS **only in the active Notion Calendar tab** to hide/show the sidebar.<br>**アクティブなNotion Calendarタブでのみ**CSSを注入してサイドバーの表示・非表示を制御。 |
| `scripting` | Use `chrome.scripting.executeScript` to toggle the CSS variable `--context-panel-width`.<br>`chrome.scripting.executeScript`を使用してCSS変数`--context-panel-width`を切り替え。 |

---

## Privacy Policy / プライバシーポリシー
This extension does **not** collect, store, or transmit any personal data.  
この拡張機能は個人データの収集、保存、送信を**一切行いません**。

Permissions used are limited to `activeTab` and `scripting`, required solely to manipulate CSS in the open Notion Calendar tab.  
使用権限は`activeTab`と`scripting`に限定され、開いているNotion CalendarタブのCSS操作のためのみに使用されます。

No analytics, tracking, or remote code is executed.  
分析、追跡、リモートコードの実行は一切行われません。

---

## Support / サポート
GitHub Issues: <https://github.com/kassy0716/notion-calendar-right-sidebar-hider/issues>  
Bug reports and feature requests are welcome.  
不具合・要望は上記 Issues へお気軽にどうぞ。

---

## License / ライセンス
MIT License © 2025 TK