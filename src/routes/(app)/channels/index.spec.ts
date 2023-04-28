import { describe, it, expect } from 'vitest'

import { _fetchChannels } from './+page.server'

describe('test a _fetchChannels()', () => {
  it('expects that received channels are correct', async () => {
    const channels = await _fetchChannels()
    expect(channels[0].name).toBe('IsoCast')
    expect(channels[1].description).toBe('Coluna de analise musical')
    expect(channels[1].tags?.[1]).toBe('video')
  })
})
