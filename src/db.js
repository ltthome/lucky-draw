import Dexie from 'dexie'

export const db = new Dexie('LuckyDrawDB')

// ============================================================
// SEEDED GAMES — paste exported game JSON objects here to
// pre-load them into all devices on the next GitHub Pages deploy.
// Each entry must have a unique seedId (taken from the export file).
// The app will import each seeded game exactly once per device.
// ============================================================
export const SEEDED_GAMES = [
{
  "seedId": "2-1771395549571",
  "name": "Sáng 2",
  "exportedAt": "2026-02-18T06:50:23.143Z",
  "bets": [
    {
      "animalOrder": 1,
      "amount": 100
    },
    {
      "animalOrder": 1,
      "amount": 50
    },
    {
      "animalOrder": 1,
      "amount": 50
    },
    {
      "animalOrder": 1,
      "amount": 380
    },
    {
      "animalOrder": 7,
      "amount": 30
    },
    {
      "animalOrder": 7,
      "amount": 100
    },
    {
      "animalOrder": 7,
      "amount": 20
    },
    {
      "animalOrder": 13,
      "amount": 120
    },
    {
      "animalOrder": 13,
      "amount": 50
    },
    {
      "animalOrder": 13,
      "amount": 50
    },
    {
      "animalOrder": 19,
      "amount": 30
    },
    {
      "animalOrder": 19,
      "amount": 330
    },
    {
      "animalOrder": 19,
      "amount": 20
    },
    {
      "animalOrder": 19,
      "amount": 50
    },
    {
      "animalOrder": 25,
      "amount": 50
    },
    {
      "animalOrder": 2,
      "amount": 150
    },
    {
      "animalOrder": 2,
      "amount": 30
    },
    {
      "animalOrder": 3,
      "amount": 100
    },
    {
      "animalOrder": 3,
      "amount": 50
    },
    {
      "animalOrder": 3,
      "amount": 300
    },
    {
      "animalOrder": 3,
      "amount": 100
    },
    {
      "animalOrder": 9,
      "amount": 150
    },
    {
      "animalOrder": 9,
      "amount": 20
    },
    {
      "animalOrder": 15,
      "amount": 100
    },
    {
      "animalOrder": 15,
      "amount": 20
    },
    {
      "animalOrder": 15,
      "amount": 50
    },
    {
      "animalOrder": 31,
      "amount": 130
    },
    {
      "animalOrder": 31,
      "amount": 50
    },
    {
      "animalOrder": 31,
      "amount": 150
    },
    {
      "animalOrder": 31,
      "amount": 20
    },
    {
      "animalOrder": 31,
      "amount": 50
    },
    {
      "animalOrder": 8,
      "amount": 20
    },
    {
      "animalOrder": 8,
      "amount": 50
    },
    {
      "animalOrder": 8,
      "amount": 100
    },
    {
      "animalOrder": 14,
      "amount": 100
    },
    {
      "animalOrder": 20,
      "amount": 100
    },
    {
      "animalOrder": 20,
      "amount": 180
    },
    {
      "animalOrder": 20,
      "amount": 100
    },
    {
      "animalOrder": 20,
      "amount": 50
    },
    {
      "animalOrder": 20,
      "amount": 210
    },
    {
      "animalOrder": 20,
      "amount": 20
    },
    {
      "animalOrder": 20,
      "amount": 50
    },
    {
      "animalOrder": 32,
      "amount": 50
    },
    {
      "animalOrder": 32,
      "amount": 550
    },
    {
      "animalOrder": 32,
      "amount": 300
    },
    {
      "animalOrder": 21,
      "amount": 50
    },
    {
      "animalOrder": 21,
      "amount": 300
    },
    {
      "animalOrder": 21,
      "amount": 300
    },
    {
      "animalOrder": 27,
      "amount": 130
    },
    {
      "animalOrder": 27,
      "amount": 100
    },
    {
      "animalOrder": 27,
      "amount": 50
    },
    {
      "animalOrder": 27,
      "amount": 220
    },
    {
      "animalOrder": 27,
      "amount": 20
    },
    {
      "animalOrder": 27,
      "amount": 100
    },
    {
      "animalOrder": 33,
      "amount": 110
    },
    {
      "animalOrder": 33,
      "amount": 100
    },
    {
      "animalOrder": 33,
      "amount": 110
    },
    {
      "animalOrder": 6,
      "amount": 30
    },
    {
      "animalOrder": 6,
      "amount": 50
    },
    {
      "animalOrder": 6,
      "amount": 300
    },
    {
      "animalOrder": 6,
      "amount": 50
    },
    {
      "animalOrder": 6,
      "amount": 20
    },
    {
      "animalOrder": 12,
      "amount": 120
    },
    {
      "animalOrder": 12,
      "amount": 30
    },
    {
      "animalOrder": 18,
      "amount": 50
    },
    {
      "animalOrder": 18,
      "amount": 50
    },
    {
      "animalOrder": 24,
      "amount": 30
    },
    {
      "animalOrder": 30,
      "amount": 30
    },
    {
      "animalOrder": 30,
      "amount": 50
    },
    {
      "animalOrder": 30,
      "amount": 200
    },
    {
      "animalOrder": 30,
      "amount": 330
    },
    {
      "animalOrder": 36,
      "amount": 50
    },
    {
      "animalOrder": 36,
      "amount": 800
    },
    {
      "animalOrder": 11,
      "amount": 100
    },
    {
      "animalOrder": 11,
      "amount": 50
    },
    {
      "animalOrder": 11,
      "amount": 20
    },
    {
      "animalOrder": 17,
      "amount": 100
    },
    {
      "animalOrder": 17,
      "amount": 730
    },
    {
      "animalOrder": 23,
      "amount": 50
    },
    {
      "animalOrder": 23,
      "amount": 100
    },
    {
      "animalOrder": 29,
      "amount": 120
    },
    {
      "animalOrder": 29,
      "amount": 20
    },
    {
      "animalOrder": 35,
      "amount": 50
    },
    {
      "animalOrder": 35,
      "amount": 400
    },
    {
      "animalOrder": 35,
      "amount": 50
    },
    {
      "animalOrder": 4,
      "amount": 30
    },
    {
      "animalOrder": 4,
      "amount": 100
    },
    {
      "animalOrder": 10,
      "amount": 1200
    },
    {
      "animalOrder": 10,
      "amount": 300
    },
    {
      "animalOrder": 10,
      "amount": 20
    },
    {
      "animalOrder": 10,
      "amount": 50
    },
    {
      "animalOrder": 16,
      "amount": 20
    },
    {
      "animalOrder": 16,
      "amount": 30
    },
    {
      "animalOrder": 16,
      "amount": 100
    },
    {
      "animalOrder": 22,
      "amount": 20
    },
    {
      "animalOrder": 22,
      "amount": 30
    },
    {
      "animalOrder": 22,
      "amount": 450
    },
    {
      "animalOrder": 22,
      "amount": 20
    },
    {
      "animalOrder": 22,
      "amount": 50
    },
    {
      "animalOrder": 22,
      "amount": 50
    },
    {
      "animalOrder": 28,
      "amount": 20
    },
    {
      "animalOrder": 28,
      "amount": 100
    },
    {
      "animalOrder": 34,
      "amount": 100
    },
    {
      "animalOrder": 34,
      "amount": 100
    },
    {
      "animalOrder": 3,
      "amount": 170
    },
    {
      "animalOrder": 9,
      "amount": 230
    },
    {
      "animalOrder": 32,
      "amount": 700
    },
    {
      "animalOrder": 1,
      "amount": 400
    },
    {
      "animalOrder": 19,
      "amount": 50
    },
    {
      "animalOrder": 31,
      "amount": 1200
    }
  ],
  "meta": [
    {
      "animalOrder": 1,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 2,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 3,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 4,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 5,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 6,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 7,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 8,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 9,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 10,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 11,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 12,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 13,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 14,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 15,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 16,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 17,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 18,
      "tags": "Sáng 1",
      "notes": ""
    },
    {
      "animalOrder": 19,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 20,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 21,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 22,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 23,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 24,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 25,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 26,
      "tags": "Sáng 29, Chiều 1",
      "notes": ""
    },
    {
      "animalOrder": 27,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 28,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 29,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 30,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 31,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 32,
      "tags": "Chiều 29",
      "notes": ""
    },
    {
      "animalOrder": 33,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 34,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 35,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 36,
      "tags": "",
      "notes": ""
    }
  ]
},
{
  "seedId": "10-1771398237495",
  "name": "Chiều 2",
  "exportedAt": "2026-02-18T14:12:54.231Z",
  "bets": [
    {
      "animalOrder": 1,
      "amount": 200
    },
    {
      "animalOrder": 1,
      "amount": 200
    },
    {
      "animalOrder": 1,
      "amount": 300
    },
    {
      "animalOrder": 7,
      "amount": 60
    },
    {
      "animalOrder": 7,
      "amount": 10
    },
    {
      "animalOrder": 7,
      "amount": 600
    },
    {
      "animalOrder": 7,
      "amount": 50
    },
    {
      "animalOrder": 7,
      "amount": 100
    },
    {
      "animalOrder": 7,
      "amount": 50
    },
    {
      "animalOrder": 13,
      "amount": 500
    },
    {
      "animalOrder": 13,
      "amount": 100
    },
    {
      "animalOrder": 19,
      "amount": 20
    },
    {
      "animalOrder": 19,
      "amount": 30
    },
    {
      "animalOrder": 19,
      "amount": 30
    },
    {
      "animalOrder": 31,
      "amount": 100
    },
    {
      "animalOrder": 31,
      "amount": 200
    },
    {
      "animalOrder": 31,
      "amount": 900
    },
    {
      "animalOrder": 31,
      "amount": 300
    },
    {
      "animalOrder": 2,
      "amount": 20
    },
    {
      "animalOrder": 2,
      "amount": 50
    },
    {
      "animalOrder": 8,
      "amount": 60
    },
    {
      "animalOrder": 8,
      "amount": 300
    },
    {
      "animalOrder": 14,
      "amount": 200
    },
    {
      "animalOrder": 20,
      "amount": 50
    },
    {
      "animalOrder": 20,
      "amount": 100
    },
    {
      "animalOrder": 20,
      "amount": 100
    },
    {
      "animalOrder": 20,
      "amount": 300
    },
    {
      "animalOrder": 26,
      "amount": 100
    },
    {
      "animalOrder": 26,
      "amount": 200
    },
    {
      "animalOrder": 32,
      "amount": 100
    },
    {
      "animalOrder": 32,
      "amount": 100
    },
    {
      "animalOrder": 32,
      "amount": 500
    },
    {
      "animalOrder": 32,
      "amount": 550
    },
    {
      "animalOrder": 3,
      "amount": 200
    },
    {
      "animalOrder": 3,
      "amount": 200
    },
    {
      "animalOrder": 3,
      "amount": 50
    },
    {
      "animalOrder": 3,
      "amount": 50
    },
    {
      "animalOrder": 9,
      "amount": 10
    },
    {
      "animalOrder": 9,
      "amount": 10
    },
    {
      "animalOrder": 9,
      "amount": 100
    },
    {
      "animalOrder": 15,
      "amount": 10
    },
    {
      "animalOrder": 21,
      "amount": 200
    },
    {
      "animalOrder": 21,
      "amount": 50
    },
    {
      "animalOrder": 21,
      "amount": 300
    },
    {
      "animalOrder": 27,
      "amount": 30
    },
    {
      "animalOrder": 27,
      "amount": 150
    },
    {
      "animalOrder": 27,
      "amount": 350
    },
    {
      "animalOrder": 27,
      "amount": 10
    },
    {
      "animalOrder": 27,
      "amount": 290
    },
    {
      "animalOrder": 33,
      "amount": 100
    },
    {
      "animalOrder": 33,
      "amount": 100
    },
    {
      "animalOrder": 33,
      "amount": 50
    },
    {
      "animalOrder": 33,
      "amount": 40
    },
    {
      "animalOrder": 33,
      "amount": 100
    },
    {
      "animalOrder": 4,
      "amount": 200
    },
    {
      "animalOrder": 4,
      "amount": 50
    },
    {
      "animalOrder": 4,
      "amount": 250
    },
    {
      "animalOrder": 10,
      "amount": 100
    },
    {
      "animalOrder": 10,
      "amount": 200
    },
    {
      "animalOrder": 10,
      "amount": 40
    },
    {
      "animalOrder": 10,
      "amount": 340
    },
    {
      "animalOrder": 16,
      "amount": 50
    },
    {
      "animalOrder": 16,
      "amount": 40
    },
    {
      "animalOrder": 16,
      "amount": 40
    },
    {
      "animalOrder": 22,
      "amount": 40
    },
    {
      "animalOrder": 22,
      "amount": 50
    },
    {
      "animalOrder": 22,
      "amount": 50
    },
    {
      "animalOrder": 22,
      "amount": 350
    },
    {
      "animalOrder": 28,
      "amount": 10
    },
    {
      "animalOrder": 28,
      "amount": 200
    },
    {
      "animalOrder": 34,
      "amount": 50
    },
    {
      "animalOrder": 34,
      "amount": 40
    },
    {
      "animalOrder": 34,
      "amount": 100
    },
    {
      "animalOrder": 11,
      "amount": 300
    },
    {
      "animalOrder": 11,
      "amount": 100
    },
    {
      "animalOrder": 29,
      "amount": 100
    },
    {
      "animalOrder": 35,
      "amount": 120
    },
    {
      "animalOrder": 35,
      "amount": 400
    },
    {
      "animalOrder": 35,
      "amount": 100
    },
    {
      "animalOrder": 6,
      "amount": 10
    },
    {
      "animalOrder": 6,
      "amount": 200
    },
    {
      "animalOrder": 6,
      "amount": 100
    },
    {
      "animalOrder": 6,
      "amount": 50
    },
    {
      "animalOrder": 12,
      "amount": 20
    },
    {
      "animalOrder": 12,
      "amount": 50
    },
    {
      "animalOrder": 18,
      "amount": 100
    },
    {
      "animalOrder": 18,
      "amount": 300
    },
    {
      "animalOrder": 18,
      "amount": 220
    },
    {
      "animalOrder": 24,
      "amount": 50
    },
    {
      "animalOrder": 24,
      "amount": 300
    },
    {
      "animalOrder": 30,
      "amount": 50
    },
    {
      "animalOrder": 30,
      "amount": 200
    },
    {
      "animalOrder": 30,
      "amount": 50
    },
    {
      "animalOrder": 30,
      "amount": 200
    },
    {
      "animalOrder": 30,
      "amount": 300
    },
    {
      "animalOrder": 30,
      "amount": 2180
    },
    {
      "animalOrder": 36,
      "amount": 850
    }
  ],
  "meta": [
    {
      "animalOrder": 1,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 2,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 3,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 4,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 5,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 6,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 7,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 8,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 9,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 10,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 11,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 12,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 13,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 14,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 15,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 16,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 17,
      "tags": "Sáng 2",
      "notes": ""
    },
    {
      "animalOrder": 18,
      "tags": "Sáng 1",
      "notes": ""
    },
    {
      "animalOrder": 19,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 20,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 21,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 22,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 23,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 24,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 25,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 26,
      "tags": "Sáng 29, Chiều 1",
      "notes": ""
    },
    {
      "animalOrder": 27,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 28,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 29,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 30,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 31,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 32,
      "tags": "Chiều 29",
      "notes": ""
    },
    {
      "animalOrder": 33,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 34,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 35,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 36,
      "tags": "",
      "notes": ""
    }
  ]
},
{
  "seedId": "11-1771485946181",
  "name": "Sáng 3",
  "exportedAt": "2026-02-19T07:36:20.204Z",
  "bets": [
    {
      "animalOrder": 1,
      "amount": 70
    },
    {
      "animalOrder": 1,
      "amount": 70
    },
    {
      "animalOrder": 1,
      "amount": 20
    },
    {
      "animalOrder": 1,
      "amount": 210
    },
    {
      "animalOrder": 1,
      "amount": 500
    },
    {
      "animalOrder": 1,
      "amount": 250
    },
    {
      "animalOrder": 1,
      "amount": 100
    },
    {
      "animalOrder": 1,
      "amount": 100
    },
    {
      "animalOrder": 7,
      "amount": 10
    },
    {
      "animalOrder": 7,
      "amount": 70
    },
    {
      "animalOrder": 7,
      "amount": 50
    },
    {
      "animalOrder": 13,
      "amount": 350
    },
    {
      "animalOrder": 13,
      "amount": 500
    },
    {
      "animalOrder": 13,
      "amount": 100
    },
    {
      "animalOrder": 19,
      "amount": 30
    },
    {
      "animalOrder": 19,
      "amount": 500
    },
    {
      "animalOrder": 25,
      "amount": 50
    },
    {
      "animalOrder": 31,
      "amount": 50
    },
    {
      "animalOrder": 2,
      "amount": 50
    },
    {
      "animalOrder": 2,
      "amount": 10
    },
    {
      "animalOrder": 8,
      "amount": 100
    },
    {
      "animalOrder": 8,
      "amount": 200
    },
    {
      "animalOrder": 14,
      "amount": 20
    },
    {
      "animalOrder": 14,
      "amount": 130
    },
    {
      "animalOrder": 20,
      "amount": 50
    },
    {
      "animalOrder": 20,
      "amount": 200
    },
    {
      "animalOrder": 20,
      "amount": 100
    },
    {
      "animalOrder": 26,
      "amount": 15
    },
    {
      "animalOrder": 26,
      "amount": 70
    },
    {
      "animalOrder": 26,
      "amount": 150
    },
    {
      "animalOrder": 26,
      "amount": 50
    },
    {
      "animalOrder": 26,
      "amount": 100
    },
    {
      "animalOrder": 26,
      "amount": 80
    },
    {
      "animalOrder": 26,
      "amount": 10
    },
    {
      "animalOrder": 32,
      "amount": 15
    },
    {
      "animalOrder": 32,
      "amount": 70
    },
    {
      "animalOrder": 32,
      "amount": 20
    },
    {
      "animalOrder": 32,
      "amount": 250
    },
    {
      "animalOrder": 3,
      "amount": 60
    },
    {
      "animalOrder": 3,
      "amount": 70
    },
    {
      "animalOrder": 9,
      "amount": 10
    },
    {
      "animalOrder": 9,
      "amount": 100
    },
    {
      "animalOrder": 9,
      "amount": 500
    },
    {
      "animalOrder": 9,
      "amount": 110
    },
    {
      "animalOrder": 9,
      "amount": 10
    },
    {
      "animalOrder": 15,
      "amount": 10
    },
    {
      "animalOrder": 15,
      "amount": 15
    },
    {
      "animalOrder": 15,
      "amount": 500
    },
    {
      "animalOrder": 15,
      "amount": 100
    },
    {
      "animalOrder": 21,
      "amount": 20
    },
    {
      "animalOrder": 21,
      "amount": 100
    },
    {
      "animalOrder": 21,
      "amount": 450
    },
    {
      "animalOrder": 27,
      "amount": 40
    },
    {
      "animalOrder": 27,
      "amount": 400
    },
    {
      "animalOrder": 27,
      "amount": 10
    },
    {
      "animalOrder": 27,
      "amount": 200
    },
    {
      "animalOrder": 27,
      "amount": 50
    },
    {
      "animalOrder": 27,
      "amount": 110
    },
    {
      "animalOrder": 33,
      "amount": 60
    },
    {
      "animalOrder": 33,
      "amount": 100
    },
    {
      "animalOrder": 33,
      "amount": 200
    },
    {
      "animalOrder": 4,
      "amount": 130
    },
    {
      "animalOrder": 4,
      "amount": 200
    },
    {
      "animalOrder": 4,
      "amount": 300
    },
    {
      "animalOrder": 10,
      "amount": 10
    },
    {
      "animalOrder": 10,
      "amount": 50
    },
    {
      "animalOrder": 10,
      "amount": 245
    },
    {
      "animalOrder": 10,
      "amount": 800
    },
    {
      "animalOrder": 10,
      "amount": 280
    },
    {
      "animalOrder": 10,
      "amount": 10
    },
    {
      "animalOrder": 16,
      "amount": 10
    },
    {
      "animalOrder": 16,
      "amount": 50
    },
    {
      "animalOrder": 16,
      "amount": 20
    },
    {
      "animalOrder": 16,
      "amount": 50
    },
    {
      "animalOrder": 16,
      "amount": 500
    },
    {
      "animalOrder": 22,
      "amount": 300
    },
    {
      "animalOrder": 28,
      "amount": 50
    },
    {
      "animalOrder": 28,
      "amount": 300
    },
    {
      "animalOrder": 28,
      "amount": 840
    },
    {
      "animalOrder": 34,
      "amount": 100
    },
    {
      "animalOrder": 5,
      "amount": 30
    },
    {
      "animalOrder": 11,
      "amount": 40
    },
    {
      "animalOrder": 11,
      "amount": 70
    },
    {
      "animalOrder": 11,
      "amount": 120
    },
    {
      "animalOrder": 17,
      "amount": 120
    },
    {
      "animalOrder": 17,
      "amount": 200
    },
    {
      "animalOrder": 17,
      "amount": 1200
    },
    {
      "animalOrder": 23,
      "amount": 30
    },
    {
      "animalOrder": 23,
      "amount": 400
    },
    {
      "animalOrder": 29,
      "amount": 500
    },
    {
      "animalOrder": 29,
      "amount": 100
    },
    {
      "animalOrder": 29,
      "amount": 100
    },
    {
      "animalOrder": 35,
      "amount": 60
    },
    {
      "animalOrder": 35,
      "amount": 130
    },
    {
      "animalOrder": 35,
      "amount": 400
    },
    {
      "animalOrder": 35,
      "amount": 130
    },
    {
      "animalOrder": 35,
      "amount": 800
    },
    {
      "animalOrder": 35,
      "amount": 200
    },
    {
      "animalOrder": 35,
      "amount": 200
    },
    {
      "animalOrder": 6,
      "amount": 100
    },
    {
      "animalOrder": 6,
      "amount": 500
    },
    {
      "animalOrder": 6,
      "amount": 660
    },
    {
      "animalOrder": 6,
      "amount": 10
    },
    {
      "animalOrder": 18,
      "amount": 60
    },
    {
      "animalOrder": 18,
      "amount": 20
    },
    {
      "animalOrder": 18,
      "amount": 100
    },
    {
      "animalOrder": 18,
      "amount": 50
    },
    {
      "animalOrder": 24,
      "amount": 100
    },
    {
      "animalOrder": 24,
      "amount": 20
    },
    {
      "animalOrder": 30,
      "amount": 20
    },
    {
      "animalOrder": 30,
      "amount": 100
    },
    {
      "animalOrder": 30,
      "amount": 210
    },
    {
      "animalOrder": 30,
      "amount": 20
    },
    {
      "animalOrder": 30,
      "amount": 50
    },
    {
      "animalOrder": 30,
      "amount": 200
    },
    {
      "animalOrder": 30,
      "amount": 200
    },
    {
      "animalOrder": 36,
      "amount": 550
    },
    {
      "animalOrder": 36,
      "amount": 150
    }
  ],
  "meta": [
    {
      "animalOrder": 1,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 2,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 3,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 4,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 5,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 6,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 7,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 8,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 9,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 10,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 11,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 12,
      "tags": "Chiều 2",
      "notes": ""
    },
    {
      "animalOrder": 13,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 14,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 15,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 16,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 17,
      "tags": "Sáng 2",
      "notes": ""
    },
    {
      "animalOrder": 18,
      "tags": "Sáng 1",
      "notes": ""
    },
    {
      "animalOrder": 19,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 20,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 21,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 22,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 23,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 24,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 25,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 26,
      "tags": "Sáng 29, Chiều 1",
      "notes": ""
    },
    {
      "animalOrder": 27,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 28,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 29,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 30,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 31,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 32,
      "tags": "Chiều 29",
      "notes": ""
    },
    {
      "animalOrder": 33,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 34,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 35,
      "tags": "",
      "notes": ""
    },
    {
      "animalOrder": 36,
      "tags": "",
      "notes": ""
    }
  ]
}
  // Example: paste an exported game object here, e.g.
  // {
  //   "seedId": "3-1718000000000",
  //   "name": "Ván 3",
  //   "bets": [{ "animalOrder": 1, "amount": 50 }, ...],
  //   "meta": [{ "animalOrder": 1, "tags": "1S", "notes": "" }, ...]
  // }
]

// ============================================================
// DEFAULT CONFIGURATION
// Edit defaultTags and defaultNotes for each animal below.
// These values are baked into the source code and deployed to
// GitHub Pages — all devices will pick them up automatically
// on the next page load (no manual setup needed per device).
//
// defaultTags : comma-separated labels shown as pills on each cell
//   Format  : 'LABEL1, LABEL2'
//   Example : '1S, 2C'   |   'TN'   |   '' (empty = no tags)
//
// defaultNotes: short note shown below the tags on each cell
//   Example : 'Hay ra'   |   '' (empty = no note)
// ============================================================
const DEFAULT_ANIMALS = [
  { order: 1,  name: 'CÁ TRẮNG',  otherName: 'CHIẾM KHÔI',  defaultTags: '', defaultNotes: '' },
  { order: 2,  name: 'ỐC',        otherName: 'BẢN QUẾ',     defaultTags: '', defaultNotes: '' },
  { order: 3,  name: 'NGỖNG',     otherName: 'VINH SANH',   defaultTags: '', defaultNotes: '' },
  { order: 4,  name: 'CÔNG',      otherName: 'PHÙNG XUÂN',  defaultTags: '', defaultNotes: '' },
  { order: 5,  name: 'TRÙN',      otherName: 'CHÍ CAO',     defaultTags: '', defaultNotes: '' },
  { order: 6,  name: 'CỌP',       otherName: 'KHÔN SƠN',    defaultTags: '', defaultNotes: '' },
  { order: 7,  name: 'HEO',       otherName: 'CHÁNH THUẬN', defaultTags: '', defaultNotes: '' },
  { order: 8,  name: 'THỎ',       otherName: 'NGUYỆT BỬU',  defaultTags: '', defaultNotes: '' },
  { order: 9,  name: 'TRÂU',      otherName: 'HỚN VÂN',     defaultTags: '', defaultNotes: '' },
  { order: 10, name: 'RỒNG BAY',  otherName: 'GIANG TỪ',    defaultTags: '', defaultNotes: '' },
  { order: 11, name: 'CHÓ',       otherName: 'PHƯỚC TÔN',   defaultTags: '', defaultNotes: '' },
  { order: 12, name: 'NGỰA',      otherName: 'QUANG MINH',  defaultTags: 'Chiều 2', defaultNotes: '' },
  { order: 13, name: 'VOI',       otherName: 'HỮU TÀI',     defaultTags: '', defaultNotes: '' },
  { order: 14, name: 'MÈO',       otherName: 'CHỈ ĐẮC',     defaultTags: '', defaultNotes: '' },
  { order: 15, name: 'CHUỘT',     otherName: 'TẤT KHẮC',    defaultTags: '', defaultNotes: '' },
  { order: 16, name: 'ONG',       otherName: 'MẬU LÂM',     defaultTags: '', defaultNotes: '' },
  { order: 17, name: 'HẠC',       otherName: 'TRỌNG TIÊN',  defaultTags: 'Sáng 2', defaultNotes: '' },
  { order: 18, name: 'KỲ LÂN',    otherName: 'THIÊN THÂN',  defaultTags: 'Sáng 1', defaultNotes: '' },
  { order: 19, name: 'BƯỚM',      otherName: 'CẤN NGỌC',    defaultTags: '', defaultNotes: '' },
  { order: 20, name: 'HÒN ĐÁ',   otherName: 'TRÂN CHÂU',   defaultTags: '', defaultNotes: '' },
  { order: 21, name: 'ÉN',        otherName: 'THƯỢNG CHIÊU',defaultTags: '', defaultNotes: '' },
  { order: 22, name: 'CU',        otherName: 'SONG ĐỒNG',   defaultTags: '', defaultNotes: '' },
  { order: 23, name: 'KHỈ',       otherName: 'TAM HÒE',     defaultTags: '', defaultNotes: '' },
  { order: 24, name: 'ẾCH',       otherName: 'HIỆP HẢI',    defaultTags: '', defaultNotes: '' },
  { order: 25, name: 'QUẠ',       otherName: 'CỬU QUAN',    defaultTags: '', defaultNotes: '' },
  { order: 26, name: 'RỒNG NẰM',  otherName: 'THÁI BÌNH',   defaultTags: 'Sáng 29, Chiều 1', defaultNotes: '' },
  { order: 27, name: 'RÙA',       otherName: 'HỎA DIỆM',    defaultTags: '', defaultNotes: '' },
  { order: 28, name: 'GÀ',        otherName: 'NHỰT THĂNG',  defaultTags: '', defaultNotes: '' },
  { order: 29, name: 'LƯƠN',      otherName: 'ĐỊA LƯƠNG',   defaultTags: 'Sáng 3', defaultNotes: '' },
  { order: 30, name: 'CÁ ĐỎ',    otherName: 'TỈNH LỢI',    defaultTags: '', defaultNotes: '' },
  { order: 31, name: 'TÔM',       otherName: 'TRƯỜNG THỌ',  defaultTags: '', defaultNotes: '' },
  { order: 32, name: 'RẮN',       otherName: 'VẠN KIM',     defaultTags: 'Chiều 29', defaultNotes: '' },
  { order: 33, name: 'NHỆN',      otherName: 'THANH TIỀN',  defaultTags: '', defaultNotes: '' },
  { order: 34, name: 'NAI',       otherName: 'NGUYÊN KIẾT', defaultTags: '', defaultNotes: '' },
  { order: 35, name: 'DÊ',        otherName: 'NHỨT PHẨM',   defaultTags: '', defaultNotes: '' },
  { order: 36, name: 'YÊU',       otherName: 'AN SỸ',        defaultTags: '', defaultNotes: '' },
]

// ============================================================
// DATABASE SCHEMA VERSIONS
// ============================================================
db.version(1).stores({
  animals: '++id, order',
  bets: '++id, animalId',
})

db.version(2).stores({
  animals: '++id, order',
  bets: '++id, animalId',
}).upgrade(tx => {
  return tx.table('animals').toCollection().modify(animal => {
    const match = DEFAULT_ANIMALS.find(a => a.order === animal.order)
    if (match) {
      animal.name = match.name
      animal.otherName = match.otherName
    }
    if (!animal.notes) animal.notes = ''
  })
})

db.version(3).stores({
  animals: '++id, order',
  bets: '++id, animalId',
}).upgrade(tx => {
  return tx.table('animals').toCollection().modify(animal => {
    if (!animal.tags) animal.tags = ''
  })
})

db.version(4).stores({
  animals: '++id, order',
  bets: '++id, animalId, gameId',
  games: '++id',
  settings: 'key',
}).upgrade(async tx => {
  const gameId = await tx.table('games').add({
    name: 'Ván 1',
    createdAt: Date.now(),
  })
  await tx.table('bets').toCollection().modify(bet => {
    bet.gameId = gameId
  })
  await tx.table('settings').add({
    key: 'activeGameId',
    value: gameId,
  })
})

db.version(5).stores({
  animals: '++id, order',
  bets: '++id, animalId, gameId',
  games: '++id',
  settings: 'key',
}).upgrade(async tx => {
  await tx.table('animals').toCollection().modify(animal => {
    if (!animal.defaultTags) animal.defaultTags = ''
    if (!animal.defaultNotes) animal.defaultNotes = ''
  })
})

// Version 6: Add animalGameMeta table for per-game tags and notes
db.version(6).stores({
  animals: '++id, order',
  bets: '++id, animalId, gameId',
  games: '++id',
  settings: 'key',
  animalGameMeta: '++id, [gameId+animalId], gameId, animalId',
}).upgrade(async tx => {
  const animals = await tx.table('animals').toArray()
  const games = await tx.table('games').toArray()

  for (const game of games) {
    for (const animal of animals) {
      await tx.table('animalGameMeta').add({
        gameId: game.id,
        animalId: animal.id,
        tags: animal.tags || '',
        notes: animal.notes || '',
      })
    }
  }

  await tx.table('animals').toCollection().modify(animal => {
    delete animal.tags
    delete animal.notes
  })
})

// ============================================================
// AUTO-SYNC: On every page load, push defaultTags/defaultNotes
// from source code into the DB so all devices stay in sync
// after a new deploy (no version bump needed for default changes).
// ============================================================
db.on('ready', async () => {
  await Promise.all(DEFAULT_ANIMALS.map(async (def) => {
    const animal = await db.animals.where('order').equals(def.order).first()
    if (animal) {
      await db.animals.update(animal.id, {
        defaultTags: def.defaultTags || '',
        defaultNotes: def.defaultNotes || '',
      })
    }
  }))

  await importSeededGames()
})

// ============================================================
// FRESH INSTALL (populate runs only when DB is brand new)
// ============================================================
db.on('populate', async () => {
  await db.animals.bulkAdd(
    DEFAULT_ANIMALS.map(a => ({
      name: a.name,
      otherName: a.otherName,
      order: a.order,
      defaultTags: a.defaultTags || '',
      defaultNotes: a.defaultNotes || '',
    }))
  )

  const gameId = await db.games.add({
    name: 'Ván 1',
    createdAt: Date.now(),
  })
  await db.settings.add({ key: 'activeGameId', value: gameId })

  // Initialize animalGameMeta for the first game
  const animalRecords = await db.animals.toArray()
  await db.animalGameMeta.bulkAdd(animalRecords.map(animal => ({
    gameId,
    animalId: animal.id,
    tags: animal.defaultTags || '',
    notes: animal.defaultNotes || '',
  })))
})

// ============================================================
// GAME OPERATIONS
// ============================================================
export async function createGame(name) {
  const gameId = await db.games.add({
    name,
    createdAt: Date.now(),
  })

  const animals = await db.animals.toArray()
  await db.animalGameMeta.bulkAdd(animals.map(animal => ({
    gameId,
    animalId: animal.id,
    tags: animal.defaultTags || '',
    notes: animal.defaultNotes || '',
  })))

  await db.settings.put({ key: 'activeGameId', value: gameId })
  return gameId
}

export async function switchGame(gameId) {
  await db.settings.put({ key: 'activeGameId', value: gameId })
}

export async function deleteGame(gameId) {
  await db.bets.where('gameId').equals(gameId).delete()
  await db.animalGameMeta.where('gameId').equals(gameId).delete()
  await db.games.delete(gameId)
  const activeSetting = await db.settings.get('activeGameId')
  if (activeSetting?.value === gameId) {
    const remaining = await db.games.orderBy('id').last()
    if (remaining) {
      await db.settings.put({ key: 'activeGameId', value: remaining.id })
    }
  }
}

export async function copyGame(sourceGameId, newName) {
  const newGameId = await db.games.add({
    name: newName,
    createdAt: Date.now(),
  })

  const sourceBets = await db.bets.where('gameId').equals(sourceGameId).toArray()
  if (sourceBets.length > 0) {
    await db.bets.bulkAdd(sourceBets.map(bet => ({
      animalId: bet.animalId,
      amount: bet.amount,
      gameId: newGameId,
    })))
  }

  const sourceMeta = await db.animalGameMeta.where('gameId').equals(sourceGameId).toArray()
  if (sourceMeta.length > 0) {
    await db.animalGameMeta.bulkAdd(sourceMeta.map(meta => ({
      gameId: newGameId,
      animalId: meta.animalId,
      tags: meta.tags,
      notes: meta.notes,
    })))
  }

  await db.settings.put({ key: 'activeGameId', value: newGameId })
  return newGameId
}

// Copy game with each animal's bets collapsed into one entry = sum of all bets
export async function copyGameAsSum(sourceGameId, newName) {
  const newGameId = await db.games.add({
    name: newName,
    createdAt: Date.now(),
  })

  // Group source bets by animalId and sum
  const sourceBets = await db.bets.where('gameId').equals(sourceGameId).toArray()
  const animalTotals = sourceBets.reduce((acc, bet) => {
    acc[bet.animalId] = (acc[bet.animalId] || 0) + bet.amount
    return acc
  }, {})

  const summedBets = Object.entries(animalTotals)
    .filter(([, total]) => total > 0)
    .map(([animalId, total]) => ({
      animalId: parseInt(animalId),
      amount: total,
      gameId: newGameId,
    }))

  if (summedBets.length > 0) {
    await db.bets.bulkAdd(summedBets)
  }

  // Copy per-game metadata (tags and notes)
  const sourceMeta = await db.animalGameMeta.where('gameId').equals(sourceGameId).toArray()
  if (sourceMeta.length > 0) {
    await db.animalGameMeta.bulkAdd(sourceMeta.map(meta => ({
      gameId: newGameId,
      animalId: meta.animalId,
      tags: meta.tags,
      notes: meta.notes,
    })))
  }

  await db.settings.put({ key: 'activeGameId', value: newGameId })
  return newGameId
}

export async function renameGame(gameId, newName) {
  await db.games.update(gameId, { name: newName })
}

// Export a game's data as a portable JSON object (download as .json file)
export async function exportGame(gameId) {
  const game = await db.games.get(gameId)
  const animals = await db.animals.orderBy('order').toArray()
  const bets = await db.bets.where('gameId').equals(gameId).toArray()
  const meta = await db.animalGameMeta.where('gameId').equals(gameId).toArray()

  const animalById = {}
  animals.forEach(a => { animalById[a.id] = a })

  return {
    seedId: `${gameId}-${game.createdAt}`,
    name: game.name,
    exportedAt: new Date().toISOString(),
    bets: bets
      .map(b => ({ animalOrder: animalById[b.animalId]?.order, amount: b.amount }))
      .filter(b => b.animalOrder != null),
    meta: meta
      .map(m => ({ animalOrder: animalById[m.animalId]?.order, tags: m.tags, notes: m.notes }))
      .filter(m => m.animalOrder != null),
  }
}

// Import SEEDED_GAMES entries that haven't been imported yet on this device
async function importSeededGames() {
  if (!SEEDED_GAMES || SEEDED_GAMES.length === 0) return

  // Check existing seedIds directly on game records — if a game is deleted,
  // its seedId disappears and the game will be re-imported on the next page load.
  const existingGames = await db.games.toArray()
  const existingSeedIds = new Set(existingGames.map(g => g.seedId).filter(Boolean))

  const animals = await db.animals.orderBy('order').toArray()
  const animalByOrder = {}
  animals.forEach(a => { animalByOrder[a.order] = a })

  for (const seeded of SEEDED_GAMES) {
    if (existingSeedIds.has(seeded.seedId)) continue

    // Store seedId on the game record so deletion = automatic recovery on next load
    const gameId = await db.games.add({ name: seeded.name, createdAt: Date.now(), seedId: seeded.seedId })

    // Initialize meta from defaults for all animals
    await db.animalGameMeta.bulkAdd(animals.map(animal => ({
      gameId,
      animalId: animal.id,
      tags: animal.defaultTags || '',
      notes: animal.defaultNotes || '',
    })))

    // Add bets
    if (seeded.bets && seeded.bets.length > 0) {
      const betsToAdd = seeded.bets
        .map(b => ({ animalId: animalByOrder[b.animalOrder]?.id, amount: b.amount, gameId }))
        .filter(b => b.animalId != null)
      if (betsToAdd.length > 0) await db.bets.bulkAdd(betsToAdd)
    }

    // Overwrite meta with seeded values
    if (seeded.meta && seeded.meta.length > 0) {
      for (const m of seeded.meta) {
        const animal = animalByOrder[m.animalOrder]
        if (!animal) continue
        const existing = await db.animalGameMeta
          .where('[gameId+animalId]').equals([gameId, animal.id]).first()
        if (existing) {
          await db.animalGameMeta.update(existing.id, { tags: m.tags, notes: m.notes })
        }
      }
    }
  }
}

export { DEFAULT_ANIMALS }
