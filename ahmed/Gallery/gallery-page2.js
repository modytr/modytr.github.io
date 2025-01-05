document.getElementById('act').addEventListener('click', function () {
      toggleImages('act', document.querySelectorAll('.image-container')[0]);
      });
      
      document.getElementById('stunt').addEventListener('click', function () {
      toggleImages('stunt', document.querySelectorAll('.image-container')[1]);
      });

      function toggleImages(buttonId, container) {
      const button = document.getElementById(buttonId);
      const hiddenImages = container.querySelectorAll('.hidden');
      const isShowingMore = button.textContent === 'Show More';

      hiddenImages.forEach(function (image) {
            image.style.display = isShowingMore ? 'block' : 'none';
      });

      button.textContent = isShowingMore ? 'Show Less' : 'Show More';
      }


      function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } 