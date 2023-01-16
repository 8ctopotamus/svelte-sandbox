<script>
  import Header from './UI/Header.svelte'
  import MeetupGrid from './Meetups/MeetupGrid.svelte';
  import MeetupForm from './Meetups/MeetupForm.svelte';
  import Button from './UI/Button.svelte';
  import meetupsStore from './Meetups/meetups-store'

  let formMode = null

  function addMeetup() {
    formMode = null
  }

  function updateMeetup() {

  }

  function cancelForm() {
    formMode = null
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }
  .meetup-controls {
    margin: 1rem;
  }
</style>

<Header />
<main>
  <div class="meetup-controls">
    {#if formMode === 'add'}
      <MeetupForm 
        on:save={formMode === 'add' ? addMeetup : updateMeetup} 
        on:cancel={cancelForm}
      />
    {:else}
      <Button on:click={() => formMode = 'add'}>
        New Meetup
      </Button>
    {/if}
  </div>
  <MeetupGrid meetups={$meetupsStore} />
</main>
