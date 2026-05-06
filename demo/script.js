document.addEventListener('DOMContentLoaded', () => {
    const genderSelect = document.getElementById('gender');
    const serviceSelect = document.getElementById('service');
    const bookingForm = document.getElementById('bookingForm');
    const tableBody = document.getElementById('tableBody');
    const submitBtn = document.getElementById('submitBtn');
    
    // Notification elements
    const emailText = document.getElementById('emailText');
    const waText = document.getElementById('waText');

    const services = {
        'Male': ['Haircut', 'Beard Styling', 'Hair Coloring', 'Facial'],
        'Female': ['Hair Spa', 'Makeup', 'Nail Art', 'Hair Coloring', 'Facial'],
        'LGBTQ+': ['Haircut', 'Beard Styling', 'Hair Coloring', 'Facial', 'Hair Spa', 'Makeup', 'Nail Art']
    };

    // Populate services based on gender
    genderSelect.addEventListener('change', () => {
        const selectedGender = genderSelect.value;
        serviceSelect.innerHTML = '<option value="" disabled selected>Select a service</option>';
        
        if (services[selectedGender]) {
            services[selectedGender].forEach(service => {
                const option = document.createElement('option');
                option.value = service;
                option.textContent = service;
                serviceSelect.appendChild(option);
            });
            serviceSelect.disabled = false;
        } else {
            serviceSelect.disabled = true;
        }
    });

    // Handle form submission
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        const formData = {
            name: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            date: document.getElementById('bookingDate').value,
            gender: genderSelect.value,
            service: serviceSelect.value
        };

        // Simulate network delay
        setTimeout(() => {
            // Update Spreadsheet
            addTableRow(formData);
            
            // Update Mockups
            updateMockups(formData);
            
            // Reset form
            bookingForm.reset();
            serviceSelect.disabled = true;
            serviceSelect.innerHTML = '<option value="" disabled selected>Select gender first</option>';
            
            // Reset button
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;

            // Success feedback
            alert('Success! Your booking has been recorded in the simulated dashboard.');
        }, 1500);
    });

    function addTableRow(data) {
        const row = document.createElement('tr');
        row.className = 'new-row';
        row.innerHTML = `
            <td><strong>${data.name}</strong></td>
            <td>${data.phone}</td>
            <td>${data.gender}</td>
            <td>${data.service}</td>
            <td>${data.date}</td>
            <td><span class="status-badge status-confirmed">Confirmed</span></td>
        `;
        
        // Insert at the top of the table
        if (tableBody.firstChild) {
            tableBody.insertBefore(row, tableBody.firstChild);
        } else {
            tableBody.appendChild(row);
        }
    }

    function updateMockups(data) {
        // Email update
        emailText.innerHTML = `
            <strong>Subject:</strong> New lead from Palette & Pixel<br><br>
            Hi Team,<br>
            A new booking has been confirmed via the website.<br><br>
            <strong>Client:</strong> ${data.name}<br>
            <strong>Service:</strong> ${data.service}<br>
            <strong>Date:</strong> ${data.date}<br><br>
            Data has been synced to Sheet ID: PX-2026-SALON
        `;

        // WhatsApp update
        const firstName = data.name.split(' ')[0];
        waText.textContent = `New Booking Alert! 🚀\n\nName: ${data.name}\nService: ${data.service}\nDate: ${data.date}\n\nClient has been notified via WhatsApp. Check dashboard for details.`;
        
        // Re-trigger animation
        waText.parentElement.style.animation = 'none';
        waText.parentElement.offsetHeight; // trigger reflow
        waText.parentElement.style.animation = null;
    }

    // Add some initial dummy data
    const initialData = [
        { name: 'Sarah Miller', phone: '+1 555-0123', gender: 'Female', service: 'Nail Art', date: '2026-05-10' },
        { name: 'David Chen', phone: '+1 555-0199', gender: 'Male', service: 'Haircut', date: '2026-05-12' }
    ];
    
    initialData.forEach(addTableRow);
});
