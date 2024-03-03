document.addEventListener('DOMContentLoaded', (event) => {
    const liFlexbox = document.querySelector('.li_flexbox');
  
    liFlexbox.addEventListener('mouseover', function(e) {
      const targetId = e.target.getAttribute('data-target');
      if (targetId) {
        document.getElementById(targetId).style.display = 'block';
        document.getElementById('preview-container').style.display = 'block';
      }
    });
  
    liFlexbox.addEventListener('mouseout', function(e) {
      const previews = document.querySelectorAll('.preview');
      previews.forEach(function(preview) {
        preview.style.display = 'none';
      });
      document.getElementById('preview-container').style.display = 'none';
    });
  });
  