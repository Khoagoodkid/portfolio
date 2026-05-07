import { useEffect, useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { axiosInstance } from "../api/axiosInstance";

const getSocialIcon = (platform) => {
  const normalized = typeof platform === "string" ? platform.toLowerCase() : "";

  switch (normalized) {
    case "facebook":
      return FacebookIcon;
    case "instagram":
      return InstagramIcon;
    case "github":
      return GitHubIcon;
    case "linkedin":
      return LinkedInIcon;
    default:
      return null;
  }
};

export const useSocialLinks = () => {
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    const getSocialLinks = async () => {
      try {
        const { data } = await axiosInstance.get("/social-links");
        const list = Array.isArray(data) ? data : [];

        setSocialLinks(
          list
            .filter((item) => getSocialIcon(item.platform))
            .map((item) => ({
              id: item.id,
              name: item.platform,
              link: item.url,
              Icon: getSocialIcon(item.platform),
            }))
        );
      } catch (error) {
        console.error("Failed to fetch social links", error);
        setSocialLinks([]);
      }
    };

    getSocialLinks();
  }, []);

  return socialLinks;
};

