<script>
  import Header from './UI/Header.svelte'
  import MeetupGrid from './Meetups/MeetupGrid.svelte';
  import MeetupForm from './Meetups/MeetupForm.svelte';
  import MeetupDetail from './Meetups/MeeupDetail.svelte'
  import Button from './UI/Button.svelte';
  import meetupsStore from './Meetups/meetups-store'

  let formMode = null
  let editId = null
  let page = 'overview'
  const pageData = { id: null }

  function savedMeetup() {
    formMode = null
    editId = null
  }

  function startEdit(event) {
    formMode = 'edit'
    editId = event.detail
  }
  
  function cancelEdit() {
    formMode = null
    editId = null
  }

  function deleteMeetup(event) {
    meetupsStore.removeMeetup(event.detail)
    cancelEdit()
  }

  function showDetails(event) {
    page = 'details'
    pageData.id = event.detail
  }

  function hideDetails() {
    page = 'overview'
    editId = null
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
  {#if page === 'overview'}
    <div class="meetup-controls">
      {#if formMode === 'edit'}
        <MeetupForm 
          id={editId}
          on:save={savedMeetup} 
          on:cancel={cancelEdit}
          on:delete={deleteMeetup}
        />
      {:else}
        <Button on:click={() => formMode = 'edit'}>
          New Meetup
        </Button>
      {/if}
    </div>
    <MeetupGrid 
      meetups={$meetupsStore} 
      on:showDetails={showDetails} 
      on:edit={startEdit}
    />
  {:else} 
    <MeetupDetail id={pageData.id} on:close={hideDetails} />
  {/if}
</main>
