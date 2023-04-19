document.addEventListener('DOMContentLoaded', function() {
    let demo = new CountUp('myTargetElement', 4000);
    if (!demo.error) {
      demo.start();
    } else {
      console.error(demo.error);
    }
  });