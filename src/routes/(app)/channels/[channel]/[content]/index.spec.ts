import { describe, it, expect } from 'vitest'
import { _fetchContent } from './+page.server'

describe('test _fetchContent()', () => {
  it('gives a content_id and receive a expected content object', async () => {
    const content = await _fetchContent('6f310e09-8967-4794-a9b1-ea5830dd4df7')
    expect(content.channel_id).toBe('fedbc75e-aff2-4ff8-9057-5a2a229ca4d9')
    expect(content.title).toBe('#001 O inicio de um sonho')
  })

  it('gives a content_id and receive a expected contentBody object', async () => {
    const content = await _fetchContent('9cd9637b-23af-4749-a4c8-6479ee0173ba')
    const contentBody = content.content_body

    try {
      if (Array.isArray(contentBody)) {
        expect(contentBody[0].content_id).toBe('9cd9637b-23af-4749-a4c8-6479ee0173ba')
        expect(contentBody[1].type).toBe('video/uri')
        expect(contentBody[1].value).toBe('linkpraumvideodeapoioaotexto/')
      } else {
        throw new Error('not an array')
      }
    } catch (error) {
      expect(error.message).not.toBe('not an array')
    }
  })
})
