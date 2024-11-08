import React from "react";
import Card from "react-bootstrap/Card";
import "./AchievementCard.css"; 

function AchievementCard({ achievement }) {
  return (
    <Card className="achievement-card-view">
      <Card.Img variant="top" src={achievement.image} alt={achievement.title} className="achievement-image" />
      <Card.Body>
        <Card.Title>{achievement.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{achievement.year}</Card.Subtitle>
        {achievement.description && <Card.Text>{achievement.description}</Card.Text>}
      </Card.Body>
    </Card>
  );
}

export default AchievementCard;
