// Function to set the preferred theme on the HTML element
function setPreferredTheme(theme) {
      document.documentElement.classList.add(theme);
      localStorage.setItem('preferredTheme', theme);
  }
  
  // Function to remove the theme class from the HTML element
  function removeThemeClass() {
      document.documentElement.classList.remove('light-theme', 'dark-theme');
  }
  
  // Function to initialize the theme based on the user's preference
  function initializeTheme() {
      const preferredTheme = localStorage.getItem('preferredTheme');
  
      if (preferredTheme === 'dark-theme') {
          setPreferredTheme('dark-theme');
      } else {
          setPreferredTheme('light-theme');
      }
  }
  
  // Check if the user has set a preference before
  if (localStorage.getItem('preferredTheme')) {
      // Initialize the theme based on the user's preference
      initializeTheme();
  } else {
      // If no preference is set, use the default theme (light theme in this case)
      setPreferredTheme('light-theme');
  }