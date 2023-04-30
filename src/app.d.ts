// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
    interface Event {
      request: Request
      waitUntil(fn: Promise<void>): void
      respondWith(response: Promise<Response | undefined>): Promise<Response>
    }
  }
}
export {}
