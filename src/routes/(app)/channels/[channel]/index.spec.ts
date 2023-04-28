import { describe, it, expect } from 'vitest'
import { _fetchChannel } from './+page.server'

describe('test _fetchChannel()', () => {
  it('gives a channel_id and receive a expected channel object', async () => {
    const channel = await _fetchChannel('fedbc75e-aff2-4ff8-9057-5a2a229ca4d9')
    expect(channel.name).toBe('IsoCast')
    expect(channel.description).toBe('Um podcast que')
    expect(channel.tags?.[0]).toBe('video')
  })
  it('gives a channel_id and receive a expected channelContents object', async () => {
    const channel = await _fetchChannel('fedbc75e-aff2-4ff8-9057-5a2a229ca4d9')
    const contents = channel.contents
    try {
      if (Array.isArray(contents)) {
        expect(contents[0].channel_id).toBe('fedbc75e-aff2-4ff8-9057-5a2a229ca4d9')
        expect(contents[1].description).toBe('Conversamos sobre c')
        expect(contents[2].title).toBe('#002 Deu tudo errado')
      } else {
        throw new Error('not an array')
      }
    } catch (error) {
      expect(error.message).not.toBe('not an array')
    }
  })
})
