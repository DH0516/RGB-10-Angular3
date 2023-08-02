import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  tasks = [
    {
      description: 'Task 1 Description',
      date: new Date('2023-08-01'),
      time: new Date('2023-08-01T09:00:00'),
      priority_level: 'Low',
      category: 'Personal',
      progress_level: 30,
    },
    {
      description: 'Task 2 Description',
      date: new Date('2023-08-02'),
      time: new Date('2023-08-02T14:30:00'),
      priority_level: 'Medium',
      category: 'Work',
      progress_level: 50,
    },
    {
      description: 'Task 3 Description',
      date: new Date('2023-08-03'),
      time: new Date('2023-08-03T16:00:00'),
      priority_level: 'High',
      category: 'Study',
      progress_level: 80,
    },
    {
      description: 'Task 4 Description',
      date: new Date('2023-08-04'),
      time: new Date('2023-08-04T10:45:00'),
      priority_level: 'Critical',
      category: 'Health',
      progress_level: 100,
    },
  ];
  

}
