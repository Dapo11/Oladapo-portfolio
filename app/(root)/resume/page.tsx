"use client";

import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/Oladapo ibiwoye cv-fullstack.pdf"; // This refers to the file in your public folder
    link.download = "Oladapo_Ezekiel_Resume.pdf"; // The name the file will have when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optional: Send the user back home after triggering the download
    window.location.href = "/";
  }, []);

  return <div>Downloading your resume...</div>;
}
