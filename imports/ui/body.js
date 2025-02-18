

import { Template } from 'meteor/templating';
import { Items } from '../api/items.js';

 

import './body.html';
import './items.js';

 

Template.body.helpers({
  items(){
    return Items.find({}, { sort: { upvote: -1, downvote: 1 } });
  } 
});

Template.body.events({
  'submit .new-item'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    // Get value from form element
    const target = event.target;
    const content = target.content.value;
    // Insert a task into the collection
    Items.insert({
      content,
      upvote: 0,
      downvote: 0,
      createdAt: new Date(), // current time
    });
    // Clear form
    target.content.value = '';
  },
});