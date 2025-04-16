// api/eventApi.js
export const fetchEvents = async () => {
  try {
    const response = await fetch('http://3.7.81.243/projects/plie-api/public/api/events-listing', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 5870|z238xvGi0b9cNcDzGo98OcZ5TIDcdaFDQayDhBLn',
      },
    });

    const json = await response.json();
    console.log('API Status:', response.status);
    console.log('API Response:', json);

    if (json.status === true && Array.isArray(json.data)) {
      return { success: true, data: json.data };
    } else {
      return { success: false, message: 'Invalid data format from API' };
    }
  } catch (error) {
    console.error('Network error details:', error.message);
    return {
      success: false,
      message: `Network request failed. Error: ${error.message}`,
    };
  }
};
