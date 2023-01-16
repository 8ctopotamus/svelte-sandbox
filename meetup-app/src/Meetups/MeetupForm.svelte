<script>
  import { createEventDispatcher } from "svelte";
  import TextInput from "../UI/TextInput.svelte";
  import Button from '../UI/Button.svelte'
  import Modal from '../UI/Modal.svelte';
  import { isEmpty, isValidEmail } from '../helpers/validation'

  let title = ''
  let subtitle = ''
  let description = ''
  let imageUrl = ''
  let address = ''
  let contactEmail = ''

  const dispatch = createEventDispatcher()

  $: titleValid = !isEmpty(title)
  $: subtitleValid = !isEmpty(subtitle)
  $: descriptionValid = !isEmpty(description)
  $: imageUrlValid = !isEmpty(imageUrl)
  $: addressValid = !isEmpty(address)
  $: contactEmailValid = !isEmpty(contactEmail) && isValidEmail(contactEmail)
  $: formIsValid = titleValid && subtitleValid && descriptionValid && imageUrlValid && addressValid && contactEmailValid

  function handleSubmit() {
    const newMeetup = {
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
      validityMessage="Please enter a valid title."
      valid={titleValid}
    />
    <TextInput 
      id="subtitle"
      label="Subtitle"
      value={subtitle}
      on:input={e => subtitle = e.target.value}
      validityMessage="Please enter a valid subtitle."
      valid={subtitleValid}
    />
    <TextInput 
      id="address"
      label="Address"
      value={address}
      on:input={e => address = e.target.value}
      validityMessage="Please enter a valid address."
      valid={addressValid}
    />
    <TextInput 
      id="imageUrl"
      label="Image URL"
      value={imageUrl}
      on:input={e => imageUrl = e.target.value}
      validityMessage="Please enter a valid imageUrl."
      valid={imageUrlValid}
    />
    <TextInput 
      id="contactEmail"
      label="Email"
      value={contactEmail}
      on:input={e => contactEmail = e.target.value}
      type="email"
      validityMessage="Please enter a valid email."
      valid={contactEmailValid}
    />
    <TextInput 
      id="description"
      label="Description"
      bind:value={description}
      controlType="textarea"
      validityMessage="Please enter a valid description."
      valid={descriptionValid}
    />
  </form>
  <div slot="footer">
    <Button on:click={cancel} type="button" mode="outline">Cancel</Button>
    <Button on:click={handleSubmit} type="button" disabled={!formIsValid}>Save</Button>
  </div>
</Modal>