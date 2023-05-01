<script lang="ts">
  import { PUBLIC_APP_NAME } from '$env/static/public'
  import CardContainer from '$components/Card/CardContainer.svelte'
  import Card from '$components/Card/Card.svelte'
  import Image from '$components/Image.svelte'
  import TagButton from '$components/Card/TagButton.svelte'
  import { loading$ } from '$stores/contentStore'
  import { afterUpdate } from 'svelte'
  export let data
  $: ({ channels } = data.streamed)
  afterUpdate(() => loading$.set(false))
</script>

<svelte:head>
  <title>Channels | {PUBLIC_APP_NAME}</title>
  <meta name="description" content="supabase connection test" />
</svelte:head>

<h1>Channels</h1>
<CardContainer>
  {#await channels}
    {#each { length: 5 } as _, i}
      <Card id={i.toString()} pulse>
        <div>
          <div
            class="bg-zinc-700 animate-pulse opacity-50"
            style="width: 100%;height: 0;padding-top: 100%;"
          />
          <h2>------- ---</h2>
          <p>
            -------- -- ----- ---- -- --- --------- --- ------ --- -------- --- ------ - ----- - --
          </p>
          <p>
            - ----- - -- -------- -- ----- ---- -- --- --------- --- ------ --- ----------- - ---
          </p>
        </div>
        <div class="mt-2">
          {#each { length: 2 } as _}
            <TagButton tag={'- --- -'} />
          {/each}
        </div>
      </Card>
    {/each}
  {:then channels}
    {#each channels as { name, description, tags, id, members }}
      <Card href="/channels/{id}?name={encodeURIComponent(name)}" {id}>
        <div>
          <Image
            class="w-full rounded-md overflow-hidden"
            src="https://ui-avatars.com/api/?size=512&background=random&name={name}&uppercase=false"
            alt="logo of {name}"
          />
          <h2>{name}</h2>
          <p>
            Hosted by
            {#if Array.isArray(members)}
              {#each members as { stage_name }, i}
                {#if i < members.length - 2}
                  {stage_name},&nbsp;
                {:else if i == members.length - 2}
                  {stage_name} and&nbsp;
                {:else}{stage_name}
                {/if}
              {/each}
            {/if}
          </p>
          <p>{description}.</p>
        </div>
        <div class="mt-2">
          {#if tags}
            {#each tags as tag}
              <TagButton {tag} />
            {/each}
          {/if}
        </div>
      </Card>
    {/each}
  {/await}
</CardContainer>
