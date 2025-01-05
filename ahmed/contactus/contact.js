function hoverLabel(inputId, isHover) {
      const label = document.querySelector(`label[for=${inputId}]`);
      if (isHover) {
          label.style.color = '#33d1ca'; // Change to your desired color
      } else {
          label.style.color = ''; // Reset to default color
      }
  }


      