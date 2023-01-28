<script>
  import MeetupItem from "./MeetupItem.svelte";
  import MeetupFilter from "./MeetupFilter.svelte";

  export let meetups
  
  let filterBy = 'all'

  $: filteredMeetups = filterBy === 'favorites'
    ? meetups.filter(meetup => meetup.isFavorite)
    : meetups
</script>

<style>
  section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
  @media (min-width: 768px) {
    section {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>

<MeetupFilter 
  on:select={event => filterBy = event.detail} 
  filterBy={filterBy} 
/>

<section id="meetups">
  {#each filteredMeetups as meetup}
    <MeetupItem 
      {...meetup} 
      on:togglefavorite
      on:showDetails
      on:edit
    />
  {/each}
</section>
