document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelectorAll('.list');
    const indicator = document.querySelector('.ind');
    let isMouseOverNav = false;

    function moveIndicator(event) {             

        const navRect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - navRect.left;
        const activeIndex = Math.floor(mouseX / (navRect.width / list.length));

        // Move the indicator based on the mouse position
        indicator.style.transform = `translateX(calc(79px * ${activeIndex}))`;
    }

    function moveIconToIndicator() {
        // Move the icon to the indicator
        const icon = this.querySelector('.icon');
        icon.style.transform = 'translateY(-40px)';
    }

    function iconClickHandler() {
        // Increase size and change color when the icon is clicked
        const icon = this.querySelector('.icon');
        icon.style.color = 'red';

        // Create a popup heart
        const heart = document.createElement('div');
        heart.className = 'popup-heart';
        heart.innerHTML = '<i class="fa fa-heart"></i>';
        document.body.appendChild(heart);

        

        // Set a timer to remove the heart after a short delay
        setTimeout( function() {
            document.body.removeChild(heart);
            
        }, 700);
    }

    
    function moveIconBack() {
        // Move the icon back to its original position and color
        const icon = this.querySelector('.icon');
        icon.style.transform = 'translateY(0)';
        icon.style.color = '';
    }

    function showIndicator() {
        indicator.style.display = 'block';
    }

    function hideIndicator() {
        indicator.style.display = 'none';
    }

    // Add mousemove event listener to the navigation to move the indicator
    document.querySelector('.nav').addEventListener('mousemove', function (event) {
        moveIndicator(event);
        showIndicator();
    });

    // Add mouseleave event listener to the navigation to hide the indicator
    document.querySelector('.nav').addEventListener('mouseleave', hideIndicator);

    // Add mouseover and mouseout event listeners to each list item to move the icon to the indicator
    list.forEach((item) => {
        item.addEventListener('mouseover', moveIconToIndicator);
        item.addEventListener('mouseleave', moveIconBack);
        item.addEventListener('click', iconClickHandler);
       
    });

    // Set a flag when the mouse is over the navigation
    document.querySelector('.nav').addEventListener('mouseenter', function () {
        isMouseOverNav = true;
    });

    // Clear the flag when the mouse leaves the navigation
    document.querySelector('.nav').addEventListener('mouseleave', function () {
        isMouseOverNav = false;
    });
});
