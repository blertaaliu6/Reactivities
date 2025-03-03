import React from "react";
import { Button, Card} from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props{
    activity: Activity;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}
export default function ActivityDetails({activity, cancelSelectActivity, openForm}: Props) {
    return (
        <div className="ui card" >
            <div className="image">
                <img src={`/assets/categoryImages/${activity.category}.jpg`}/>
                </div>
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                   {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
               <Button.Group widths='2'>
                    <Button onClick={() => openForm(activity.id)}  basic color='pink' content='Edit' />
                    <Button onClick={cancelSelectActivity} basic color='grey' content='Cancel' />
               </Button.Group>
            </Card.Content>
        </div>
    )
}