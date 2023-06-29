import { configTest } from '@/config'

test('Should run jest', () => {
  const run = configTest()

  expect(run).toBe('ok')
})
