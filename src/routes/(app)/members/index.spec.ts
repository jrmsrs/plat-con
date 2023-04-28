import { describe, it, expect } from 'vitest'

import { _fetchMembers } from './+page.server'

describe('test a _fetchMembers()', () => {
  it('expects that received members are correct', async () => {
    const members = await _fetchMembers()
    expect(members[0].stage_name).toBe('Ianson Robinso')
    expect(members[1].stage_name).toBe('John No Arms')
  })
})
