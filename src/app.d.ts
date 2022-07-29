/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Locals {}
  // interface Platform {}
  interface Session {
    mode: 'light' | 'dark';
  }
  interface Stuff {
    title: string;
  }
}
