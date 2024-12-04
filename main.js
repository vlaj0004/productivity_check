// main.js

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  let studyCount = 0; // To track the number of times 'Yes' is clicked

  // Initial event listeners
  attachEventListeners();

  function attachEventListeners() {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const homeBtn = document.getElementById("home-btn"); // Home button

    if (yesBtn) {
      yesBtn.addEventListener("click", (e) => {
        e.preventDefault();
        studyCount += 1;

        if (studyCount === 1) {
          // First 'Yes' click
          content.innerHTML = `
              <img src="img/cat.jpeg" alt="Cat">
              <p>...really?</p>
              <div class="btn-group vertical-buttons">
                <a href="#" class="btn waves-effect waves-light green" id="yes-btn">Yes</a>
                <a href="#" class="btn waves-effect waves-light red" id="no-btn">No</a>
              </div>
            `;
        } else if (studyCount === 2) {
          // Second 'Yes' click - End Result with Home Button
          content.innerHTML = `
              <img src="img/snoopy.jpeg" alt="Snoopy">
              <p>GOOD JOB !! SNOOPY PARTY !!</p>
              <div class="btn-group vertical-buttons">
                <a href="#" class="btn waves-effect waves-light blue" id="home-btn">Home</a>
              </div>
            `;
        }

        // Re-attach event listeners if buttons are recreated
        attachEventListeners();
      });
    }

    if (noBtn) {
      noBtn.addEventListener("click", (e) => {
        e.preventDefault();
        // End Result with Home Button
        content.innerHTML = `
            <img src="img/dog.jpeg" alt="Dog">
            <p>brotha.</p>
            <div class="btn-group vertical-buttons">
              <a href="#" class="btn waves-effect waves-light blue" id="home-btn">Home</a>
            </div>
          `;
        // Re-attach event listeners if buttons are recreated
        attachEventListeners();
      });
    }

    if (homeBtn) {
      homeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        resetApp();
      });
    }
  }

  function resetApp() {
    studyCount = 0; // Reset the study count
    content.innerHTML = `
        <h5>Did you study today?</h5>
        <div class="btn-group vertical-buttons">
          <a href="#" class="btn waves-effect waves-light green" id="yes-btn">Yes</a>
          <a href="#" class="btn waves-effect waves-light red" id="no-btn">No</a>
        </div>
      `;
    attachEventListeners();
  }
});
