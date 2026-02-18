import Dexie from 'dexie'

export const db = new Dexie('LuckyDrawDB')

const DEFAULT_ANIMALS = [
  { order: 1, name: 'CÁ TRẮNG', otherName: 'CHIẾM KHÔI', notes: '' },
  { order: 2, name: 'ỐC', otherName: 'BẢN QUẾ', notes: '' },
  { order: 3, name: 'NGỖNG', otherName: 'VINH SANH', notes: '' },
  { order: 4, name: 'CÔNG', otherName: 'PHÙNG XUÂN', notes: '' },
  { order: 5, name: 'TRÙN', otherName: 'CHÍ CAO', notes: '' },
  { order: 6, name: 'CỌP', otherName: 'KHÔN SƠN', notes: '' },
  { order: 7, name: 'HEO', otherName: 'CHÁNH THUẬN', notes: '' },
  { order: 8, name: 'THỎ', otherName: 'NGUYỆT BỬU', notes: '' },
  { order: 9, name: 'TRÂU', otherName: 'HỚN VÂN', notes: '' },
  { order: 10, name: 'RỒNG BAY', otherName: 'GIANG TỪ', notes: '' },
  { order: 11, name: 'CHÓ', otherName: 'PHƯỚC TÔN', notes: '' },
  { order: 12, name: 'NGỰA', otherName: 'QUANG MINH', notes: '' },
  { order: 13, name: 'VOI', otherName: 'HỮU TÀI', notes: '' },
  { order: 14, name: 'MÈO', otherName: 'CHỈ ĐẮC', notes: '' },
  { order: 15, name: 'CHUỘT', otherName: 'TẤT KHẮC', notes: '' },
  { order: 16, name: 'ONG', otherName: 'MẬU LÂM', notes: '' },
  { order: 17, name: 'HẠC', otherName: 'TRỌNG TIÊN', notes: '' },
  { order: 18, name: 'KỲ LÂN', otherName: 'THIÊN THÂN', notes: '' },
  { order: 19, name: 'BƯỚM', otherName: 'CẤN NGỌC', notes: '' },
  { order: 20, name: 'HÒN ĐÁ', otherName: 'TRÂN CHÂU', notes: '' },
  { order: 21, name: 'ÉN', otherName: 'THƯỢNG CHIÊU', notes: '' },
  { order: 22, name: 'CU', otherName: 'SONG ĐỒNG', notes: '' },
  { order: 23, name: 'KHỈ', otherName: 'TAM HÒE', notes: '' },
  { order: 24, name: 'ẾCH', otherName: 'HIỆP HẢI', notes: '' },
  { order: 25, name: 'QUẠ', otherName: 'CỬU QUAN', notes: '' },
  { order: 26, name: 'RỒNG NẰM', otherName: 'THÁI BÌNH', notes: '' },
  { order: 27, name: 'RÙA', otherName: 'HỎA DIỆM', notes: '' },
  { order: 28, name: 'GÀ', otherName: 'NHỰT THĂNG', notes: '' },
  { order: 29, name: 'LƯƠN', otherName: 'ĐỊA LƯƠNG', notes: '' },
  { order: 30, name: 'CÁ ĐỎ', otherName: 'TỈNH LỢI', notes: '' },
  { order: 31, name: 'TÔM', otherName: 'TRƯỜNG THỌ', notes: '' },
  { order: 32, name: 'RẮN', otherName: 'VẠN KIM', notes: '' },
  { order: 33, name: 'NHỆN', otherName: 'THANH TIỀN', notes: '' },
  { order: 34, name: 'NAI', otherName: 'NGUYÊN KIẾT', notes: '' },
  { order: 35, name: 'DÊ', otherName: 'NHỨT PHẨM', notes: '' },
  { order: 36, name: 'YÊU', otherName: 'AN SỸ', notes: '' },
]

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

db.on('populate', async () => {
  await db.animals.bulkAdd(DEFAULT_ANIMALS)
  const gameId = await db.games.add({
    name: 'Ván 1',
    createdAt: Date.now(),
  })
  await db.settings.add({
    key: 'activeGameId',
    value: gameId,
  })
})

export async function createGame(name) {
  const gameId = await db.games.add({
    name,
    createdAt: Date.now(),
  })
  await db.settings.put({ key: 'activeGameId', value: gameId })
  return gameId
}

export async function switchGame(gameId) {
  await db.settings.put({ key: 'activeGameId', value: gameId })
}

export async function deleteGame(gameId) {
  await db.bets.where('gameId').equals(gameId).delete()
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
  await db.settings.put({ key: 'activeGameId', value: newGameId })
  return newGameId
}

export async function renameGame(gameId, newName) {
  await db.games.update(gameId, { name: newName })
}

export { DEFAULT_ANIMALS }
