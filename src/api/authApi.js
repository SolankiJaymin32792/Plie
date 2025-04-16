export const loginUser = async (email, password) => {
    try {
      const response = await fetch('https://schema.getpostman.com/json/collection/v2.1.0/collection.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const rawText = await response.text();
  
      let data = null;
      try {
        data = JSON.parse(rawText); 
      } catch (parseError) {
        console.warn('Could not parse JSON:', parseError);
      }
  
      if (!response.ok) {
        return {
          success: false,
          message: data?.message || rawText || 'Login failed. Please try again.',
        };
      }
  
    if (!data) {
        return {
          success: false,
          message: 'Server returned unexpected response. Please contact support.',
        };
      }

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error('Network error:', error);
      return {
        success: false,
        message: 'Unable to connect to the server. Please check your internet connection.',
      };
    }
  };
  
