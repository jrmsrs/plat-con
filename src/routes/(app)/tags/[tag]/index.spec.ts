import { describe, it, expect } from 'vitest'
import { _fetchChannelsByTag } from './+page.server'

describe('test _fetchChannelsByTag()', () => {
  it('gives a tag and receive a expected filtered channels', async () => {
    const videoChannels = await _fetchChannelsByTag('video')
    expect(videoChannels[0].description).toBe('Um podcast que')
    expect(videoChannels[1].name).toBe('NóNaOrelha')
    expect(videoChannels.length).toBeGreaterThanOrEqual(2)
    const podcastChannels = await _fetchChannelsByTag('text')
    expect(podcastChannels[0].name).toBe('NóNaOrelha')
  })
})
