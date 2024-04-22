fetch('https://www.eventbriteapi.com/v3/events/search/?q=charity&location.address=new+york&token=7STI3KORNT6C73AYRWEV')
  .then(response => response.json())
  .then(data => {
    // Process the fetched data
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching data:', error);
  });