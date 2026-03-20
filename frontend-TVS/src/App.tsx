import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/v1/api`,
        );

        console.log("Backend Response:", response.data);
      } catch (error) {
        console.log("Connection Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Volunteer Attendance System</h1>
      <p>Check console to see backend connection</p>
    </div>
  );
}

export default App;
