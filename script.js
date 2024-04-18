document.addEventListener("DOMContentLoaded", function() {

    const android1 = document.getElementById('android-large-1');
    const android2 = document.getElementById('android-large-2');
    const android3 = document.getElementById('android-large-3');
    const android4 = document.getElementById('android-large-4');
    const android5 = document.getElementById('android-large-5');
    const android6 = document.getElementById('android-large-6');
    const android7 = document.getElementById('android-large-7');

    const navigation1 = document.getElementById('navigation1')
    const navigation2 = document.getElementById('navigation2');

    android2.style.display = "none";
    android3.style.display = "none";
    android4.style.display = "none";
    android5.style.display = "none";
    android6.style.display = "none";
    android7.style.display = "none";

    navigation1.addEventListener('click', function() {
        android2.style.display = "block";
        android1.style.display = "none";
    });

    navigation2.addEventListener('click', function() {
        android3.style.display = "block";
        android2.style.display = "none";
    });

    const registerPage = document.getElementById('registerPage');
    const loginPage = document.getElementById('loginPage');
    const loginLink = document.getElementById('loginLink');
    const registerLink = document.getElementById('registerLink');
    const goalsForm = document.getElementById('goalsForm');


    // Function to show the register page and hide the login page
    function showRegisterPage() {
        android3.style.display = "block";
        android4.style.display = "none";
    }

    // Function to show the login page and hide the register page
    function showLoginPage() {
        registerPage.style.display = "none";
        loginPage.style.display = "block";
    }

    // Event listener for clicking the "Go to Login" link
    loginLink.addEventListener('click', function() {
        // alert('something went wrong')
        android3.style.display = "none";
        android4.style.display = "block";
    });

    // Event listener for clicking the "Go to Register" link
    registerLink.addEventListener('click', function() {
        showRegisterPage();
    });

    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // Handle form submission here
        // You can add your form submission logic here
        alert('Registration form submitted!');
        android3.style.display = "none";
        android4.style.display = "block";
        
    });
    const loginForm=  document.getElementById('loginFormdiv');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // Handle form submission here
        // You can add your form submission logic here
        alert('Login Sucessful!');
        android4.style.display = "none";
        android5.style.display = "block";
        
    });
    goalsForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Hide android-large-5 and show android-large-6
        android5.style.display = 'none';
        android6.style.display = 'block';
    });
    const searchDiv= document.getElementById('search-div');
    searchDiv.addEventListener('click', function(e){
        e.preventDefault();
        android6.style.display = 'none';
        android7.style.display = 'block';
    })
    const currentDate = new Date();

    // Get the calendar element
    const calendar = document.getElementById('calendar');

    // Number of days to display in the calendar
    const numDays = 15;

    // Create a new date for each day and add it to the calendar
    for (let i = 0; i < numDays; i++) {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() + i);

        // Create container div for day and date
        const container = document.createElement('div');
        container.classList.add('day-date-container');

        // Create day element
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = date.toLocaleString('en-US', { weekday: 'short' });

        // Create date element
        const dateElement = document.createElement('div');
        dateElement.classList.add('date');
        dateElement.textContent = date.toLocaleString('en-US', { day: '2-digit' });

        // Append day and date elements to the container
        container.appendChild(dayElement);
        container.appendChild(dateElement);

        // Append container to the calendar
        calendar.appendChild(container);
    }

    const timeSchedule = document.querySelector('.time-schedule');

    // Get the current time
    const now = new Date();
    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();

    // Round up the current minute to the next hour if it's more than 30
    if (currentMinute > 30) {
        currentHour++;
    }

    // Create time slots with 1-hour interval up to 10 entries ahead
    for (let i = 0; i < 10; i++) {
        // Create a new time slot element
        const timeSlot = document.createElement('div');
        timeSlot.classList.add('time-slot');

        // Create hour element
        const hourElement = document.createElement('div');
        hourElement.classList.add('hour');
        hourElement.textContent = formatHour(currentHour);

        // Append hour element to the time slot
        timeSlot.appendChild(hourElement);

        // Append the time slot to the time schedule
        timeSchedule.appendChild(timeSlot);

        // Add a horizontal line between time slots
        if (i < 9) {
            const horizontalLine = document.createElement('hr');
            timeSchedule.appendChild(horizontalLine);
        }

        // Increment current hour for the next time slot
        currentHour++;
    }
});

function formatHour(hour) {
    return hour >= 12 ? (hour === 12 ? '12 PM' : `${hour - 12} PM`) : (hour === 0 ? '12 AM' : `${hour} AM`);
}
