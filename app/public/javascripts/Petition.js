/**
 * Event handler script - listens for interactions from the user and produces a functional response.
 */

document.addEventListener('DOMContentLoaded', function() {

    const petitionForm = document.getElementById('petition');
    const alert = document.getElementById('alert');
    
    /**
     * Produces a notification pop-up on the webpage that displays form submission response.
     * @param {*} message submission success or failure.
     * @param {*} type alert dismissable.
     */
    function sendAlert(message, type) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <div class="alert alert-${type} alert-dismissable fade show" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        alert.innerHTML = '';
        alert.append(wrapper);
    }

    /**
     * Defines rules for form signature validation on each input box in the Signature section of the webpage.
     * @returns pop-up response message from the server - true if conditions are satisfied, false otherwise.
     */
    function validateForm() {
        const Name = document.getElementById('name').value;
        const Email = document.getElementById('email').value;
        const State = document.getElementById('state').value;
        let isValid = true;
        let response = [];
        // enforce name submission within 5 and 20 characters
        if (Name.length < 5 || Name.length > 20) {
            isValid = false;
            response.push('Name should be within 5 to 20 characters in length!');
        }
        // enforce email include the '@' character
        if (!Email.includes('@')) {
            isValid = false;
            response.push('Email should have an \'@\'!');
        }
        // enforce input for state be two uppercase letters
        if (State.length !== 2 || State !== State.toUpperCase()) {
            isValid = false;
            response.push('State should be of character length 2 and upper-case!');
        }
        return {
            isValid: isValid,
            uiAlert: response
        };
    }

    petitionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const submissionForm = validateForm();
        if (submissionForm.isValid) {
            const participantData = {
                Name: document.getElementById('name').value,
                Email: document.getElementById('email').value,
                City: document.getElementById('city').value,
                State: document.getElementById('state').value
            };
            fetch('/sign', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(participantData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    const tbody = document.querySelector('tbody');
                    const addRow = document.createElement('tr');
                    addRow.innerHTML = `
                        <td>${data.submission.Name}</td>
                        <td>${data.submission.City}</td>
                        <td>${data.submission.State}</td>
                    `;
                    if (tbody.children.length === 2 && tbody.children[0].children[0].textContent === 'Alice Johnson' && tbody.children[1].children[0].textContent === 'Bob Smith') {
                        tbody.innerHTML = '';
                    }
                    tbody.insertBefore(addRow, tbody.firstChild);
                    petitionForm.reset();
                    sendAlert(data.message, 'Form Submission Successful.', 'success');
                } else {
                    sendAlert(data.message, 'Form Submission Failed.', 'danger');
                }
            })
            .catch(error => {
                console.error('Failure: ', error);
                sendAlert('Form Submission Failed.', 'danger');
            });
        } else {
            sendAlert(submissionForm.uiAlert.join('<br>'), 'danger');
        }
    });
});