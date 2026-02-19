import { useEffect, useState } from "react";
import { fetchPublicCollection } from "../lib/publicApi";

const usePublicCollection = (resource, fallback = []) => {
  const [items, setItems] = useState(fallback);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        setError("");
        const data = await fetchPublicCollection(resource);
        if (mounted && Array.isArray(data)) {
          setItems(data);
        }
      } catch (err) {
        if (mounted) {
          setError(err?.message || "Failed to load collection.");
        }
        // Keep fallback data when API is unavailable.
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    load();
    return () => {
      mounted = false;
    };
  }, [resource]);

  return { items, loading, error };
};

export default usePublicCollection;
