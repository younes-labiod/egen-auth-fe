import React, { useEffect, useState } from "react";
import styles from "./ApplicationPage.module.css";
import { getProfile } from "../../services/apiService";

const ApplicationPage: React.FC = () => {
  const [profile, setProfile] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        setProfile(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to fetch profile.");
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <h1>{profile.message}</h1>
      <p>Email: {profile.user.email}</p>
    </div>
  );
};

export default ApplicationPage;
