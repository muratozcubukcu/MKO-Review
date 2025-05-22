document.addEventListener('DOMContentLoaded', () => {
  const pageContent = document.querySelector('.page-content');

  if (!pageContent) {
    console.error('Error: Page content area not found.');
    return;
  }

  fetch('reviews.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(reviews => {
      reviews.forEach(review => {
        const card = document.createElement('div');
        card.classList.add('card');
        // Set background image directly on the card element.
        // The prompt mentions ::before pseudo-element, but direct manipulation is complex.
        // Using card.style.backgroundImage is a more straightforward approach.
        // Assuming review.image contains the correct path relative to the CSS or HTML.
        // If paths are like "Images/foo.jpg", this should work if 'Images' is accessible.
        card.style.backgroundImage = `url('${review.image}')`;

        const content = document.createElement('div');
        content.classList.add('content');

        const title = document.createElement('h2');
        title.classList.add('title');
        title.textContent = review.title;

        const copy = document.createElement('p');
        copy.classList.add('copy');
        copy.textContent = review.copy;

        const button = document.createElement('a'); // Changed from button to a for href
        button.classList.add('btn');
        button.href = review.href;
        button.textContent = 'View Review'; // Or some other appropriate text

        content.appendChild(title);
        content.appendChild(copy);
        content.appendChild(button);
        card.appendChild(content);
        pageContent.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error fetching or processing reviews:', error);
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Could not load reviews at this time. Please try again later.';
      errorMessage.style.color = 'red';
      pageContent.appendChild(errorMessage);
    });
});
