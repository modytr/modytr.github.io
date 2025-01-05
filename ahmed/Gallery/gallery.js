document.getElementById('BTS').addEventListener('click', function () {
      toggleImages('BTS', document.querySelectorAll('.image-container')[0]);
      });

      document.getElementById('oscar').addEventListener('click', function () {
            toggleImages('oscar', document.querySelectorAll('.image-container')[1]);
            });

      document.getElementById('CGI').addEventListener('click', function () {
      toggleImages('CGI', document.querySelectorAll('.image-container')[2]);
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

 