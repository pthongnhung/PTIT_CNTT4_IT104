import React from "react";
import { useParams } from "react-router-dom";

// (thực tế bạn có thể import chung từ file dữ liệu)
const TEAMS = [
  { id: "arsenal", name: "Arsenal", founded: 1886, stadium: "Emirates" },
  {
    id: "barca",
    name: "Barcelona",
    founded: 1899,
    stadium: "Spotify Camp Nou",
  },
  { id: "milan", name: "AC Milan", founded: 1899, stadium: "San Siro" },
];

export default function Team() {
  const { teamId } = useParams<{ teamId: string }>();
  const team = TEAMS.find((t) => t.id === teamId);

  if (!team) {
    return <h2>Không tìm thấy team với id: {teamId}</h2>;
  }

  return (
    <div>
      <h2>{team.name}</h2>
      <ul>
        <li>Năm thành lập: {team.founded}</li>
        <li>Sân nhà: {team.stadium}</li>
        <li>Slug: {team.id}</li>
      </ul>
    </div>
  );
}
