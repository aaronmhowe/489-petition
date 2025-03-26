document.addEventListener('DOMContentLoaded', function() {

    const petitionInput = document.getElementById('petition');
    const alert = document.getElementById('alert');
    
    function sendAlert(message, type) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <div class="alert alert-${type} alert-dismissable fade show" role="alert">
                ${message}
                <button type="button" class="dismissalert" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        alert.innerHTML = '';
        alert.append(wrapper);
    }

    function validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const state = document.getElementById('state').value;
        let isValid = true;
        let response = [];
        if (name.length < 5 || name.length > 20) {
            isValid = false;
            response.push('Name should be within 5 to 20 characters in length!');
        }
        if (!email.includes('@')) {
            isValid = false;
            response.push('Email should have an \'@\'!');
        }
        if (state.length !== 2 || state !== state.toUpperCase()) {
            isValid = false;
            response.push('State should be of character length 2 and upper-case!');
        }
        return {
            isValid: isValid,
            uiAlert: response
        };
    }

    petitionInput.addEventListener('submit', function(e) {
        e.preventDefault();
        const submissionForm = validateForm();
        if (submissionForm.isValid) {
            const name = document.getElementById('name').value;
            const city = document.getElementById('city').value;
            const state = document.getElementById('state').value;
            const tbody = document.querySelector('tbody');
            const addRow = document.createElement('tr');
            addRow.innerHTML = `
                <td>${name}</td>
                <td>${city}</td>
                <td>${state}</td>
            `;
            tbody.appendChild(addRow);
            petitionInput.reset();
            sendAlert('Submission Succesful');
        } else {
            sendAlert(submissionForm.uiAlert.join('<br>'), 'Failed');
        }
    });
});