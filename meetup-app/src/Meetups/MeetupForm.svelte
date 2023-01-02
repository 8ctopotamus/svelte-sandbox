<script>
  import { createEventDispatcher } from "svelte";
  import TextInput from "../UI/TextInput.svelte";
  import Button from '../UI/Button.svelte'
  import Modal from '../UI/Modal.svelte';

  let title
  let subtitle
  let description
  let imageUrl
  let address
  let contactEmail

  function handleSubmit() {
    const newMeetup = {
      id: Math.random().toString(),
      title,
      subtitle,
      description,
      imageUrl,
      address,
      contactEmail
    }
    dispatch('save', newMeetup)
    title = ''
    subtitle = ''
    description = ''
    imageUrl = ''
    address = ''
    contactEmail = ''
  }

  const dispatch = createEventDispatcher()

  function cancel() {
    dispatch('cancel')
  }
</script>

<style>
  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>

<Modal title={`Edit Meetup Info`} on:cancel>
  <form on:submit|preventDefault={handleSubmit}>
    <TextInput 
      id="title"
      label="Title"
      value={title}
      on:input={e => title = e.target.value}
    />
    <TextInput 
      id="subtitle"
      label="Subtitle"
      value={subtitle}
      on:input={e => subtitle = e.target.value}
    />
    <TextInput 
      id="address"
      label="Address"
      value={address}
      on:input={e => address = e.target.value}
    />
    <TextInput 
      id="imageUrl"
      label="Image URL"
      value={imageUrl}
      on:input={e => imageUrl = e.target.value}
    />
    <TextInput 
      id="contactEmail"
      label="Email"
      value={contactEmail}
      on:input={e => contactEmail = e.target.value}
      type="email"
    />
    <TextInput 
      id="description"
      label="Description"
      value={description}
      on:input={e => description = e.target.value}
      controlType="textarea"
    />
  </form>
  <div slot="footer">
    <Button on:click={cancel} type="button" mode="outline">Cancel</Button>
    <Button on:click={handleSubmit} type="button">Save</Button>
  </div>
</Modal>