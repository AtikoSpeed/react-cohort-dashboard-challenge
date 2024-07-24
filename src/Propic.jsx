import "./Propic.css";

export default function Propic({ initials, bgColor }) {
  return (
    <h3 className="profile-picture" style={{ backgroundColor: bgColor }}>
      {initials}
    </h3>
  );
}
