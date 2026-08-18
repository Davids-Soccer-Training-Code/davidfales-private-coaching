import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Individual session pages live in the booking app.
      {
        source: "/groupsession/:id",
        destination:
          "https://app.davidssoccertraining.com/group-sessions/:id",
        permanent: true,
      },
      {
        source: "/group-sessions/:id",
        destination:
          "https://app.davidssoccertraining.com/group-sessions/:id",
        permanent: true,
      },
      {
        source: "/mini-groups/:id",
        destination:
          "https://app.davidssoccertraining.com/group-sessions/:id",
        permanent: true,
      },
      // Group Sessions was renamed to Mini Groups.
      {
        source: "/group-sessions",
        destination: "/mini-groups",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
