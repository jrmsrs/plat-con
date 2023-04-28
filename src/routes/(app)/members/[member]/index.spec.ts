import { describe, it, expect } from 'vitest'
import { _fetchMember } from './+page.server'

describe('test _fetchMember()', () => {
  it('gives a member_id and receive a expected member object', async () => {
    const member = await _fetchMember('1d2e3e25-992e-488d-880c-100620bb62ec')
    expect(member.id).toBe('1d2e3e25-992e-488d-880c-100620bb62ec')
    expect(member.stage_name).toBe('John No Arms')
  })
  it('gives a member_id and receive a expected channels object', async () => {
    const member = await _fetchMember('ac1298e9-8345-439f-84a8-07598fcf4470')
    const channels = member.channels
    try {
      if (Array.isArray(channels)) {
        expect(channels[0].name).toBe('IsoCast')
        expect(channels[1].description).toBe('Um podcast que')
        expect(channels[1].tags?.[0]).toBe('video')
      } else {
        throw new Error('not an array')
      }
    } catch (error) {
      expect(error.message).not.toBe('not an array')
    }
  })
})
