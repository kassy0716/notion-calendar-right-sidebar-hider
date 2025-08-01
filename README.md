# Notion Calendar Right-Pane Toggle
> **Unofficial extension – not affiliated with Notion Labs, Inc.**

Toggle the right sidebar (context panel) in Notion Calendar with a toolbar icon or **Ctrl / ⌘ + Shift + P**.  
ワンクリック／ショートカットで Notion Calendar の右サイドバーを表示・非表示し、作業領域を最大化します。

---

## ✨ Features / 主な機能
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

## ▶️ Installation / インストール
1. Install from the **Chrome Web Store** (link will appear after publication).  
   公開後、Chrome ウェブストアからインストール。  
2. Reload Notion Calendar.  
   Notion Calendar を再読み込みします。  
3. Click the extension icon or press **Ctrl / ⌘ + Shift + P** to toggle.  
   アイコンをクリック、または **Ctrl / ⌘ + Shift + P** でトグル。  

---

## 🔧 Permissions
| Permission | Why it is needed |
|------------|------------------|
| `activeTab` | Inject CSS **only in the active Notion Calendar tab** to hide/show the sidebar. |
| `scripting` | Use `chrome.scripting.executeScript` to toggle the CSS variable `--context-panel-width`. |

---

## ## Privacy Policy
This extension does **not** collect, store, or transmit any personal data.  
Permissions used are limited to `activeTab` and `scripting`, required solely to manipulate CSS in the open Notion Calendar tab.  
No analytics, tracking, or remote code is executed.

---

## 🐞 Support / サポート
GitHub Issues: <https://github.com/kassy0716/notion-rightpane-toggle/issues>  
Bug reports and feature requests are welcome.  
不具合・要望は上記 Issues へお気軽にどうぞ。

---

## 📜 License / ライセンス
MIT License © 2025 TK