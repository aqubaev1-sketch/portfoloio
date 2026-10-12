"use client";
import { ActivityCalendar, type Activity } from "react-activity-calendar";
import "react-activity-calendar/tooltips.css";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const USERNAME = "amannv";

const theme = {
  light: ["#ebedf0", "#c2c2c2", "#8f8f8f", "#4d4d4d", "#1a1a1a"],
  dark: ["#1B1B1B", "#333333", "#666666", "#999999", "#FFFFFF"],
};

export default function GithubActivity() {
  const [data, setData] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    let active = true;
    fetch(
      `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last&_=${Date.now()}`,
      { cache: "no-store" },
    )
      .then((res) => res.json())
      .then((json) => {
        if (active && json?.contributions)
          setData(json?.contributions as Activity[]);
      })
      .catch(() => {})
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <ActivityCalendar
        key={resolvedTheme}
        data={data}
        loading={loading}
        colorScheme={resolvedTheme as "light" | "dark"}
        theme={theme}
        blockSize={11}
        blockMargin={4}
        fontSize={13}
        labels={{ totalCount: "{{count}} contributions in the last year" }}
      />
    </>
  );
}
