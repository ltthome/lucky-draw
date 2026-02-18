# Lucky Draw - 36 Animals Game

## 1. Overview

A web-based lucky draw game featuring 36 animals, designed as a betting/lottery management tool. The operator inputs bets placed by buyers on each animal square and tracks winnings.

## 2. UI Reference

![UI Reference](images/ui-reference.png)

The main screen displays a **6x6 grid** (36 cells). Each cell contains:

- **Row 1**: Other Name in subtle gray (e.g., CHIẾM KHÔI) + Animal Name bold (e.g., CÁ TRẮNG)
- **Row 2**: List of individual bet amounts, space-separated (e.g., `50 30 20`)
- **Row 3**: Total bet amount as plain number (e.g., `100`)
- **Row 4**: Tags in blue badge (e.g., `1S, 2C`) — optional
- **Row 5**: Notes in yellow badge — optional, last row of the cell

The toolbar ("3 cột / 6 cột", "Ván mới", game selector) is fixed at the **bottom** of the page.

## 3. Tech Stack

| Layer        | Technology                         |
| ------------ | ---------------------------------- |
| Frontend     | React JS                           |
| Data Storage | IndexedDB (local, no backend needed) |

## 4. Target Devices / Browsers

- Samsung Galaxy A23 and above
- iPhone 13 and above
- Mobile-first responsive design

## 5. The 36 Animals

The animals should be stored in a CMS-like editable configuration so names, order, and display can be updated without code changes.

| #  | Name     | Other Name   |
| -- | -------- | ------------ |
| 1  | CÁ TRẮNG | CHIẾM KHÔI   |
| 2  | ỐC       | BẢN QUẾ      |
| 3  | NGỖNG    | VINH SANH    |
| 4  | CÔNG     | PHÙNG XUÂN   |
| 5  | TRÙN     | CHÍ CAO      |
| 6  | CỌP      | KHÔN SƠN     |
| 7  | HEO      | CHÁNH THUẬN  |
| 8  | THỎ      | NGUYỆT BỬU   |
| 9  | TRÂU     | HỚN VÂN      |
| 10 | RỒNG BAY | GIANG TỪ     |
| 11 | CHÓ      | PHƯỚC TÔN    |
| 12 | NGỰA     | QUANG MINH   |
| 13 | VOI      | HỮU TÀI      |
| 14 | MÈO      | CHỈ ĐẮC      |
| 15 | CHUỘT    | TẤT KHẮC     |
| 16 | ONG      | MẬU LÂM      |
| 17 | HẠC      | TRỌNG TIÊN   |
| 18 | KỲ LÂN   | THIÊN THÂN   |
| 19 | BƯỚM     | CẤN NGỌC     |
| 20 | HÒN ĐÁ   | TRÂN CHÂU    |
| 21 | ÉN       | THƯỢNG CHIÊU |
| 22 | CU       | SONG ĐỒNG    |
| 23 | KHỈ      | TAM HÒE      |
| 24 | ẾCH      | HIỆP HẢI     |
| 25 | QUẠ      | CỬU QUAN     |
| 26 | RỒNG NẰM | THÁI BÌNH    |
| 27 | RÙA      | HỎA DIỆM    |
| 28 | GÀ       | NHỰT THĂNG   |
| 29 | LƯƠN     | ĐỊA LƯƠNG    |
| 30 | CÁ ĐỎ   | TỈNH LỢI     |
| 31 | TÔM      | TRƯỜNG THỌ   |
| 32 | RẮN      | VẠN KIM      |
| 33 | NHỆN     | THANH TIỀN   |
| 34 | NAI      | NGUYÊN KIẾT  |
| 35 | DÊ       | NHỨT PHẨM    |
| 36 | YÊU      | AN SỸ        |

## 6. Core Features

### 6.1 Game Board (Main Screen)

- Switchable layout: **6 columns** (compact) or **3 columns** (larger, easier to read)
  - Toggle via the toolbar button at bottom
  - Both modes feature visual grouping for better readability
  - **3-column mode**: Every 2 rows (6 cells) have alternating backgrounds
    - Rows 1-2, 5-6, 9-10 share one style (white background)
    - Rows 3-4, 7-8, 11-12 share another style (light gray background)
  - **6-column mode**: Every 2 rows (12 cells) have alternating backgrounds
    - Rows 1-2, 5-6 share one style (white background)
    - Rows 3-4 share another style (light gray background)
  - 3-column mode scales up all fonts for readability
- Each square shows:
  - **Other Name** in subtle gray (less dominant)
  - **Animal Name** bold below it
  - **Bet amounts** as a space-separated list of individual bets (e.g., `50 30 20`)
  - **Total** as a plain number (no "K" suffix)
  - **Tags** as individual rounded pills with blue border below total (e.g., `1S` `2C`) — optional, comma-separated input, multiple per cell
  - **Notes** in yellow badge as the last row — optional per cell
- Tapping/clicking a square opens an input form for that animal

### 6.2 Bet Input Per Square

- **Multiple bets per square** — different buyers can bet on the same animal
- Each bet entry is a **money amount** only (no per-bet notes)
- Each bet entry has a **Delete** button to remove it
- **Tags per cell** — comma-separated labels (e.g., `1S, 1C, 2S, 2C`), each displayed as a rounded blue pill badge
- **One note per cell** — a free-text note attached to the animal square itself (e.g., "winner yesterday morning"), displayed in yellow as the last row

### 6.3 Multi-Game Management

- The app supports **multiple games** (rounds) stored simultaneously
- Each game contains only **bet numbers** — animals, tags, and notes are global (not per-game)
- **Game operations:**
  - **Create**: "Ván mới" button creates a new game (auto-named "Ván N") and switches to it
  - **Switch**: Tap the game name button in toolbar to open the game manager, then tap a game to switch
  - **Rename**: Edit a game's name inline in the game manager
  - **Copy**: Duplicate all bets from an existing game to a new game (appends " (bản sao)" to name)
  - **Delete**: Remove a game and all its bets (with confirmation dialog). Cannot delete the last remaining game
- **Game Manager Dialog**: A bottom-sheet modal (same pattern as bet dialog) listing all games sorted newest-first
  - Active game shown with a green dot indicator
  - Each game row has action buttons: "Đổi tên" (Rename), "Chép" (Copy), "Xoá" (Delete)
- **Data model:**
  - `games` table: `id` (auto-increment), `name`, `createdAt`
  - `settings` table: key-value store for app settings (e.g., `activeGameId`)
  - `bets` table: each bet has a `gameId` foreign key linking to the active game

### 6.4 Toolbar (Bottom)

- Fixed at the **bottom** of the page
- Contains: **"3 cột / 6 cột"** (layout toggle), **"Ván mới"** (New Round), **Game Name ▾** (game selector)
- "3 cột / 6 cột" button toggles between 3-column and 6-column layouts
- "Ván mới" creates a new game and switches to it
- Game name button shows the active game's name and opens the Game Manager dialog

### 6.5 Data Persistence

- All bets and configuration stored in **IndexedDB**
- Data survives page refreshes and browser restarts
- No backend / server required

## 7. Decisions

- No "draw result" feature — this is a bet-tracking tool only
- No maximum bet limit per square
- Multiple bets allowed per square (different buyers)
- Currency displayed as plain numbers (no "K" suffix on the grid)
- Grid is always 36 animals (switchable between 3-column and 6-column layout)
- Vietnamese only — no multi-language support needed
- No payout/multiplier calculation (may add later)
- Multiple games can be stored and switched between
- Games contain only bet data; animal config (tags, notes) is global
- No data export (may add later)

## 8. Future Enhancements

- Payout / multiplier calculation
- Bet history tracking across rounds (notes-based)
- Data export (CSV, PDF)

---

*This document is a living spec. Update it as requirements evolve.*
