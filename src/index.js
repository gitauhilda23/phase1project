
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let accommodationType = document.getElementById('accommodation-type').value;
    let checkInDate = document.getElementById('check-in-date').value;
    let checkOutDate = document.getElementById('check-out-date').value;
    let totalGuests = document.getElementById('total-guests').value;

    // Here you would typically send data to a server for processing
    console.log(`Booking submitted: ${accommodationType}, ${checkInDate} to ${checkOutDate}, Guests: ${totalGuests}`);
    alert('Booking submitted successfully!');
});


document.getElementById('document-upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let uploadedFile = document.getElementById('document-file').files[0];

    // Here you would handle file upload (e.g., using FormData and AJAX)
    console.log('File uploaded:', uploadedFile.name);
    alert('Document uploaded successfully!');
});

// Function to handle feedback submission
document.getElementById('submit-feedback').addEventListener('click', function() {
    let feedbackText = document.getElementById('feedback-text').value;

    // Here you would typically send feedback to a server for processing
    console.log('Feedback submitted:', feedbackText);
    alert('Feedback submitted successfully!');
});

// Function to handle social media sharing
document.getElementById('facebook-share').addEventListener('click', function() {
    // Simulated sharing action
    console.log('Shared on Facebook');
    alert('Shared on Facebook!');
});

document.getElementById('instagram-share').addEventListener('click', function() {
    // Simulated sharing action
    console.log('Shared on Instagram');
    alert('Shared on Instagram!');
});


document.getElementById('search-vacancies').addEventListener('click', function() {
    let selectedArea = document.getElementById('area-selector').value;

    
    let vacantGuesthouses = [
        { name: 'Cozy Cottage', area: 'nairobi', price: 'ksh100/night' },
        { name: 'Green Meadows Villa', area: 'mombasa', price: 'ksh150/night' },
        { name: 'Riverside Retreat', area: 'kericho', price: 'ksh80/night' }
    ];

    
    let vacancyList = document.getElementById('vacant-guesthouses-list');
    vacancyList.innerHTML = ''; // Clear previous results

    vacantGuesthouses.forEach(guesthouse => {
        if (guesthouse.area.toLowerCase() === selectedArea.toLowerCase()) {
            let guesthouseItem = document.createElement('div');
            guesthouseItem.classList.add('guesthouse-item');
            guesthouseItem.innerHTML = `<strong>${guesthouse.name}</strong><br>Price: ${guesthouse.price}<br><br>`;
            vacancyList.appendChild(guesthouseItem);
        }
    });
});

