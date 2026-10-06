const YOUTUBE_ID_PATTERN = /^[A-Za-z0-9_-]{11}$/;

const getYouTubeVideoId = (value = "") => {
  const candidate = String(value || "").trim();
  if (YOUTUBE_ID_PATTERN.test(candidate)) return candidate;

  try {
    const url = new URL(candidate);
    const hostname = url.hostname.replace(/^www\./, "");

    if (hostname === "youtu.be") {
      const id = url.pathname.split("/").find(Boolean) || "";
      return YOUTUBE_ID_PATTERN.test(id) ? id : "";
    }

    if (hostname === "youtube.com" || hostname === "m.youtube.com" || hostname === "youtube-nocookie.com") {
      const pathParts = url.pathname.split("/").filter(Boolean);
      const id = url.searchParams.get("v") || (pathParts[0] === "embed" || pathParts[0] === "shorts" ? pathParts[1] : "");
      return YOUTUBE_ID_PATTERN.test(id || "") ? id : "";
    }
  } catch {
    return "";
  }

  return "";
};


module.exports = { getYouTubeVideoId };
