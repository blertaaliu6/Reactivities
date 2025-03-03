import React from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props{
    activities: Activity[];
    selectActivity:(id:string) => void;
    deleteActivity: (id: string) => void;

}
export default function ActivityList({activities, selectActivity, deleteActivity} : Props){
    return (
        <div className="ui segment">
            <Item.Group>
                {activities.map(activity =>(
                    <div className='ui items' key={activity.id}>
                        <Item.Content>
                            <Item.Header as ='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() =>selectActivity(activity.id)} floated='right' content='View' color="pink" />
                                <Button onClick={() =>deleteActivity(activity.id)} floated='right' content='Delete' color="grey" />
                                <Label basic content={activity.category} />
                            </Item.Extra>
                        </Item.Content>
                    </div>
                 ))}
            </Item.Group>
        </div>
    )
}