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
        const Name = document.getElementById('Name').value;
        const Email = document.getElementById('Email').value;
        const State = document.getElementById('State').value;
        let isValid = true;
        let response = [];
        if (Name.length < 5 || Name.length > 20) {
            isValid = false;
            response.push('Name should be within 5 to 20 characters in length!');
        }
        if (!Email.includes('@')) {
            isValid = false;
            response.push('Email should have an \'@\'!');
        }
        if (State.length !== 2 || State !== State.toUpperCase()) {
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
            const participantData = {
                Name: document.getElementById('Name').value,
                Email: document.getElementById('Email').value,
                City: document.getElementById('City').value,
                State: document.getElementById('State').value,
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
                    petitionInput.reset();
                    sendAlert(data.message, 'Form Submission Successful.');
                } else {
                    sendAlert(data.message, 'Form Submission Failed.')
                }
            })
            .catch(error => {
                console.error('Failure: ', error);
                sendAlert('Form Submission Failed.');
            });
        } else {
            sendAlert(submissionForm.uiAlert.join('<br>'), 'Failed');
        }
    });
});