<script>
  import Header from './UI/Header.svelte'
  import MeetupItem from './Meetups/MeetupItem.svelte'

  const meetups = [
    {
      id: 'm1',
      title: 'Coding Bootcamp',
      subtitle: 'Learn to code in 2 hours',
      description: 'Bla bla bla',
      imageUrl: 'https://via.placeholder.com/150',
      address: '27th Nerd Road, 8347 New York',
      contactEmail: 'code@test.com'
    },
    {
      id: 'm2',
      title: 'Swim Together',
      subtitle: 'Learn to swim in 2 hours',
      description: 'Bla bla bla',
      imageUrl: 'https://via.placeholder.com/150',
      address: '27th Nerd Road, 8347 New York',
      contactEmail: 'code@test.com'
    }
  ]
</script>

<style>
  #meetups {
    margin-top: 5rem;
  }
</style>

<Header />

<section id="meetups">
  {#each meetups as meetup}
    <MeetupItem />
  {/each}
</section>
